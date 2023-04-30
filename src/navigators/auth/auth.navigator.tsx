import React from 'react';
import {useTranslation} from 'react-i18next';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AuthStack, AuthStackParamsList} from '@core/types/navigation';
import {SignIn} from '@pages/sign-in';
import {SignUp} from '@pages/sign-up';

const {Navigator, Screen} = createNativeStackNavigator<AuthStackParamsList>();

const AuthNavigator: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Navigator screenOptions={{headerShown: true}}>
      <Screen
        name={AuthStack.SignIn}
        component={SignIn}
        options={{title: t('screenTitles.signIn')!}}
      />
      <Screen
        name={AuthStack.SignUp}
        component={SignUp}
        options={{title: t('screenTitles.signUp')!}}
      />
    </Navigator>
  );
};

export default AuthNavigator;
