import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
  StackActions,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStack, RootStackParamsList} from '@core/types/navigation';

import {AuthNavigator} from './auth';
import {MainNavigator} from './main';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamsList>();

const navigationRef = createNavigationContainerRef();

export function replaceNavigationToAuthorizedState() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(RootStack.Main));
  }
}

export function replaceNavigationToUnauthorizedState() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(RootStack.Auth));
  }
}

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        initialRouteName={RootStack.Auth}
        screenOptions={{headerShown: false}}>
        <Screen name={RootStack.Auth} component={AuthNavigator} />
        <Screen name={RootStack.Main} component={MainNavigator} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
