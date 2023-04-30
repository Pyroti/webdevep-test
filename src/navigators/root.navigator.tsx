import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStack, RootStackParamsList} from '@core/types/navigation';

import {AuthNavigator} from './auth';
import {MainNavigator} from './main';
import {useSelector} from 'react-redux';
import {authStoreSelector} from '@store/selectors/auth.selector';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamsList>();

const RootNavigator: React.FC = () => {
  const {isSignedIn} = useSelector(authStoreSelector);

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={RootStack.Auth}
        screenOptions={{headerShown: false}}>
        {!isSignedIn ? (
          <Screen name={RootStack.Auth} component={AuthNavigator} />
        ) : (
          <Screen name={RootStack.Main} component={MainNavigator} />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
