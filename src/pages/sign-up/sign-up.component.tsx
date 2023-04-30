import React, {useCallback} from 'react';
import {Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {AuthStack, AuthStackParamsList} from '@core/types/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AuthInput} from '@core/components/auth-input/auth-input.component';
import {AuthButton} from '@core/components/auth-button/auth-button.component';
import {SingUpForm} from '@core/types/auth';
import {AuthLinkButton} from '@core/components/auth-button-link/auth-button-link.component';
import {signUpAction} from '@store/actions/auth';

import * as Styles from './sign-up.styles';

type SignUpNavigation = NativeStackNavigationProp<
  AuthStackParamsList,
  AuthStack.SignIn
>;

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {navigate, goBack} = useNavigation<SignUpNavigation>();
  const {control, handleSubmit, getValues} = useForm<SingUpForm>({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const logUp = useCallback(() => {
    const payload = {
      email: getValues('email'),
      password: getValues('password'),
      emailConfirmCode: '111111',
      userInfo: {
        name: getValues('name')!,
      },
    };
    dispatch(signUpAction.request(payload));
    goBack();
  }, [dispatch, getValues, goBack]);

  const linkToLogIn = useCallback(() => {
    navigate({name: AuthStack.SignIn, params: undefined});
  }, [navigate]);

  return (
    <Styles.Container onPress={Keyboard.dismiss}>
      <Styles.ScrollContainer>
        <Styles.SafeContainer>
          <AuthInput
            control={control}
            fieldName={'email'}
            label={t('auth.email')}
          />
          <AuthInput
            control={control}
            fieldName={'name'}
            label={t('auth.name')}
          />
          <AuthInput
            control={control}
            fieldName={'password'}
            label={t('auth.password')}
          />
          <AuthLinkButton title={t('auth.signIn')} onPress={linkToLogIn} />
          <AuthButton title={t('auth.signUp')} onPress={handleSubmit(logUp)} />
        </Styles.SafeContainer>
      </Styles.ScrollContainer>
    </Styles.Container>
  );
};

export default SignIn;
