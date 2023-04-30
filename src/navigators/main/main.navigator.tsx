import React from 'react';
import {useTranslation} from 'react-i18next';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainStack, MainStackParamsList} from '@core/types/navigation';
import {Home} from '@pages/home';

const {Navigator, Screen} = createNativeStackNavigator<MainStackParamsList>();

const MainNavigator: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Navigator screenOptions={{headerShown: true}}>
      <Screen
        name={MainStack.Home}
        component={Home}
        options={{title: t('screenTitles.home')!}}
      />
    </Navigator>
  );
};

export default MainNavigator;
