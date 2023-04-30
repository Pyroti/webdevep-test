import React from 'react';
import {Control, FieldValues, Path, useController} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {SignInForm, SingUpForm} from '@core/types/auth';
import * as Styled from './auth-input.styles';

type Combined = FieldValues & (SignInForm | SingUpForm);

interface AuthInputProps<T extends Combined> {
  control: Control<T>;
  fieldName: Path<T>;
  label: string;
  secureTextEntry?: boolean;
  errorMessage?: string;
  validate?: (filedValue: string) => string | true;
}

export const AuthInput: React.FC<AuthInputProps<Combined>> = React.memo(
  ({control, fieldName, label, secureTextEntry = false, validate}) => {
    const {t} = useTranslation('common');
    const required = {
      message: t('common.errors.fieldIsRequired'),
      value: true,
    };

    const {
      field: {onChange, value, name},
      formState: {errors},
    } = useController({
      control: control,
      name: fieldName,
      rules: {
        required,
        validate,
      },
    });

    return (
      <Styled.Container>
        <Styled.InputLabel>{label}</Styled.InputLabel>
        <Styled.CustomInput
          value={String(value)}
          secureTextEntry={secureTextEntry}
          onChangeText={onChange}
        />
        <Styled.ErrorMessage>
          {(errors[name] as {message: string})?.message}
        </Styled.ErrorMessage>
      </Styled.Container>
    );
  },
);
