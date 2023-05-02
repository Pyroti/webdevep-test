import * as AuthService from '@core/services/auth.service';
import {
  getFcmToken,
  storeAccessToken,
  storeRefreshToken,
} from '@core/services/encrypted.service';
import {signInAction} from '@store/actions/auth';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';
import jwt_decode from 'jwt-decode';
import {regFirebaseTokenAction} from '@store/actions/noty';
import {JwtToken} from '@core/interfaces/auth.interface';
import axiosConfig from '@core/config/axios.config';
import {replaceNavigationToAuthorizedState} from '@navigators/root.navigator';

function* signInRequestWorker({
  payload,
}: ActionType<typeof signInAction.request>) {
  try {
    const data: SagaReturnType<typeof AuthService.loginAuth> = yield call(
      AuthService.loginAuth,
      payload,
    );
    if (data.ok) {
      axiosConfig.defaults.params = {apiToken: data.accessToken};
      const decodeJwt = jwt_decode(data.accessToken) as JwtToken;
      const fcmToken: string = yield getFcmToken();
      const tokenPayload = {
        token: fcmToken!,
        uid: decodeJwt.sub!,
      };
      yield put(regFirebaseTokenAction.request(tokenPayload));
      yield storeRefreshToken(data.refreshToken);
      yield storeAccessToken(data.accessToken);
      yield put(signInAction.success(data));
      replaceNavigationToAuthorizedState();
      return;
    }

    yield put(signInAction.failure('fail'));
  } catch {
    yield put(signInAction.failure('fail'));
  }
}

export function* signInRequestSaga() {
  yield takeLatest(signInAction.request, signInRequestWorker);
}
