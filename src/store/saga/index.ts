import {fork} from 'redux-saga/effects';
import {logoutRequestSaga} from './logout';
import {signInRequestSaga} from './sign-in';
import {signUpRequestSaga} from './sign-up';
import {sendCodeRequestSaga} from './send-code';
import {sendMessageRequestSaga} from './send-message';
import {regFirebaseRequestSaga} from './reg-firebase-token';

export function* sagas(): Generator {
  yield fork(logoutRequestSaga);
  yield fork(signInRequestSaga);
  yield fork(signUpRequestSaga);
  yield fork(sendCodeRequestSaga);
  yield fork(sendMessageRequestSaga);
  yield fork(regFirebaseRequestSaga);
}
