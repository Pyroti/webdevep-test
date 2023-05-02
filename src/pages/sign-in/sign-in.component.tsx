import React, {useCallback} from 'react';
import {ActivityIndicator, Keyboard} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {AuthStack, AuthStackParamsList} from '@core/types/navigation';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthInput} from '@core/components/auth-input/auth-input.component';
import {AuthButton} from '@core/components/auth-button/auth-button.component';
import {SignInForm} from '@core/types/auth';
import {AuthLinkButton} from '@core/components/auth-button-link/auth-button-link.component';
import {signInAction} from '@store/actions/auth';
import {authStoreSelector} from '@store/selectors/auth.selector';

import * as Styles from './sign-in.styles';

type SignInNavigation = NativeStackNavigationProp<
  AuthStackParamsList,
  AuthStack.SignUp
>;

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {loading} = useSelector(authStoreSelector);
  const {navigate} = useNavigation<SignInNavigation>();
  const {control, handleSubmit, getValues} = useForm<SignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const login = useCallback(() => {
    const payload = {
      credential: getValues('email'),
      password: getValues('password'),
      code: '111111',
    };
    dispatch(signInAction.request(payload));
  }, [dispatch, getValues]);

  const linkToLoginUp = useCallback(() => {
    navigate({name: AuthStack.SignUp, params: undefined});
  }, [navigate]);

  if (loading) {
    return (
      <Styles.LoaderContainer>
        <ActivityIndicator />
      </Styles.LoaderContainer>
    );
  }

  return (
    <Styles.Container onPress={Keyboard.dismiss}>
      <Styles.ScrollContainer>
        <Styles.SafeContainer>
          <Styles.Text>{t('auth.welcome')}</Styles.Text>
          <AuthInput
            control={control}
            fieldName={'email'}
            label={t('auth.email')}
          />
          <AuthInput
            control={control}
            fieldName={'password'}
            label={t('auth.password')}
          />
          <AuthLinkButton title={t('auth.signUp')} onPress={linkToLoginUp} />
          <AuthButton title={t('auth.signIn')} onPress={handleSubmit(login)} />
        </Styles.SafeContainer>
      </Styles.ScrollContainer>
    </Styles.Container>
  );
};

export default SignIn;
