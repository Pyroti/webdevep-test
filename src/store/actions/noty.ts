import {
  NotyFirebaseToken,
  NotyShortMessage,
} from '@core/interfaces/noty.interface';
import {ActionType, createAsyncAction} from 'typesafe-actions';

export enum SendMessageTypes {
  SendMessageRequest = '[SendMessageTypes] SendMessageRequest',
  SendMessageSuccess = '[SendMessageTypes] SendMessageSuccess',
  SendMessageFailed = '[SendMessageTypes] SendMessageFailed',
}

export enum RegFirebaseTokenTypes {
  RegFirebaseTokenRequest = '[RegFirebaseTokenTypes] RegFirebaseTokenRequest',
  RegFirebaseTokenSuccess = '[RegFirebaseTokenTypes] RegFirebaseTokenSuccess',
  RegFirebaseTokenFailed = '[RegFirebaseTokenTypes] RegFirebaseTokenFailed',
}

export const sendMessageAction = createAsyncAction(
  SendMessageTypes.SendMessageRequest,
  SendMessageTypes.SendMessageSuccess,
  SendMessageTypes.SendMessageFailed,
)<NotyShortMessage, {ok: string}, string>();

export const regFirebaseTokenAction = createAsyncAction(
  RegFirebaseTokenTypes.RegFirebaseTokenRequest,
  RegFirebaseTokenTypes.RegFirebaseTokenSuccess,
  RegFirebaseTokenTypes.RegFirebaseTokenFailed,
)<NotyFirebaseToken, {ok: string}, string>();

export type NotyActionUnion = ActionType<
  typeof sendMessageAction | typeof regFirebaseTokenAction
>;
