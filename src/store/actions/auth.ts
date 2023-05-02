import {
  AuthLogin,
  AuthLoginResponse,
  AuthLogOut,
  AuthLogOutResponse,
  AuthPublicKeyResponse,
  AuthRegenerateTokenResponse,
  AuthRegistration,
  AuthRegistrationResponse,
  AuthSendCode,
  AuthSendCodeResponse,
} from '@core/interfaces/auth.interface';
import {ActionType, createAsyncAction} from 'typesafe-actions';

export enum SignInTypes {
  SignInRequest = '[SignInTypes] SignInRequest',
  SignInSuccess = '[SignInTypes] SignInSuccess',
  SignInFailed = '[SignInTypes] SignInFailed',
}

export enum SignUpTypes {
  SignUpRequest = '[SignUpTypes] SignUpRequest',
  SignUpSuccess = '[SignUpTypes] SignUpSuccess',
  SignUpFailed = '[SignUpTypes] SignUpFailed',
}

export enum LogoutTypes {
  LogoutRequest = '[LogoutTypes] LogoutRequest',
  LogoutSuccess = '[LogoutTypes] LogoutSuccess',
  LogoutFailed = '[LogoutTypes] LogoutFailed',
}

export enum SendCodeTypes {
  SendCodeRequest = '[SendCodeTypes] SendCodeRequest',
  SendCodeSuccess = '[SendCodeTypes] SendCodeSuccess',
  SendCodeFailed = '[SendCodeTypes] SendCodeFailed',
}

export enum RegenirationTokenTypes {
  RegenirationTokenRequest = '[RegenirationTokenTypes] RegenirationTokenRequest',
  RegenirationTokenSuccess = '[RegenirationTokenTypes] RegenirationTokenSuccess',
  RegenirationTokenFailed = '[RegenirationTokenTypes] RegenirationTokenFailed',
}

export enum GetPublicKeyTypes {
  GetPublicKeyRequest = '[GetPublicKeyTypes] GetPublicKeyRequest',
  GetPublicKeySuccess = '[GetPublicKeyTypes] GetPublicKeySuccess',
  GetPublicKeyFailed = '[GetPublicKeyTypes] GetPublicKeyFailed',
}

export const signInAction = createAsyncAction(
  SignInTypes.SignInRequest,
  SignInTypes.SignInSuccess,
  SignInTypes.SignInFailed,
)<AuthLogin, AuthLoginResponse, string>();

export const signUpAction = createAsyncAction(
  SignUpTypes.SignUpRequest,
  SignUpTypes.SignUpSuccess,
  SignUpTypes.SignUpFailed,
)<AuthRegistration, AuthRegistrationResponse, string>();

export const logoutAction = createAsyncAction(
  LogoutTypes.LogoutRequest,
  LogoutTypes.LogoutSuccess,
  LogoutTypes.LogoutFailed,
)<AuthLogOut, AuthLogOutResponse, string>();

export const sendCodeAction = createAsyncAction(
  SendCodeTypes.SendCodeRequest,
  SendCodeTypes.SendCodeSuccess,
  SendCodeTypes.SendCodeFailed,
)<AuthSendCode, AuthSendCodeResponse, string>();

export const regenerateTokenAction = createAsyncAction(
  RegenirationTokenTypes.RegenirationTokenRequest,
  RegenirationTokenTypes.RegenirationTokenSuccess,
  RegenirationTokenTypes.RegenirationTokenFailed,
)<void, AuthRegenerateTokenResponse, string>();

export const getPublicKeyAction = createAsyncAction(
  GetPublicKeyTypes.GetPublicKeyRequest,
  GetPublicKeyTypes.GetPublicKeySuccess,
  GetPublicKeyTypes.GetPublicKeyFailed,
)<void, AuthPublicKeyResponse, string>();

export type AuthActionUnion = ActionType<
  | typeof signInAction
  | typeof signUpAction
  | typeof logoutAction
  | typeof sendCodeAction
  | typeof regenerateTokenAction
  | typeof getPublicKeyAction
>;
