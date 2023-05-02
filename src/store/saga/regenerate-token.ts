import * as AuthService from '@core/services/auth.service';
import {
  getFcmToken,
  getRefreshToken,
  storeAccessToken,
  storeRefreshToken,
} from '@core/services/encrypted.service';
import {regenerateTokenAction} from '@store/actions/auth';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import jwt_decode from 'jwt-decode';
import {regFirebaseTokenAction} from '@store/actions/noty';
import {JwtToken} from '@core/interfaces/auth.interface';

function* regenerateTokenWorker() {
  try {
    const refreshToken: string = yield getRefreshToken();
    const data: SagaReturnType<typeof AuthService.regenerateTokenAuth> =
      yield call(AuthService.regenerateTokenAuth, {refreshToken});
    if (data.ok) {
      const decodeJwt: JwtToken = jwt_decode(data.accessToken);
      const fcmToken: string = yield getFcmToken();
      const tokenPayload = {
        token: fcmToken!,
        uid: decodeJwt.sub!,
      };
      yield put(regFirebaseTokenAction.request(tokenPayload));
      yield storeRefreshToken(data.refreshToken);
      yield storeAccessToken(data.accessToken);
      yield put(regenerateTokenAction.success(data));
      return;
    }

    yield put(regenerateTokenAction.failure('fail'));
  } catch {
    yield put(regenerateTokenAction.failure('fail'));
  }
}

export function* regenerateTokenSaga() {
  yield takeLatest(regenerateTokenAction.request, regenerateTokenWorker);
}
