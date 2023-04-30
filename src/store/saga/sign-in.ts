import axiosConfig from '@core/config/axios.config';
import * as AuthService from '@core/services/auth.service';
import {
  storeAccessToken,
  storeRefreshToken,
} from '@core/services/encrypted.service';
import {signInAction} from '@store/actions/auth';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';

function* signInRequestWorker({
  payload,
}: ActionType<typeof signInAction.request>) {
  const data: SagaReturnType<typeof AuthService.loginAuth> = yield call(
    AuthService.loginAuth,
    payload,
  );
  if (data.ok) {
    axiosConfig.defaults.params = {apiToken: data.accessToken};
    yield storeRefreshToken(data.refreshToken);
    yield storeAccessToken(data.accessToken);
    yield put(signInAction.success(data));
    return;
  }

  yield put(signInAction.failure('fail'));
}

export function* signInRequestSaga() {
  yield takeLatest(signInAction.request, signInRequestWorker);
}
