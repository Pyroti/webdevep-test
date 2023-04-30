export enum RootStack {
  Auth = '[Root] Auth',
  Main = '[Root] Main',
}

export type RootStackParamsList = {
  [RootStack.Auth]: undefined;
  [RootStack.Main]: undefined;
};

export enum AuthStack {
  SignIn = '[Auth] SignIn',
  SignUp = '[Auth] SignUp',
}

export type AuthStackParamsList = {
  [AuthStack.SignIn]: undefined;
  [AuthStack.SignUp]: undefined;
};

export enum MainStack {
  Home = '[Main] Home',
}

export type MainStackParamsList = {
  [MainStack.Home]: undefined;
};
