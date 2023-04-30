import axiosConfig from '@core/config/axios.config';
import * as AuthService from '@core/services/auth.service';
import {
  removeAccessToken,
  removeRefreshToken,
} from '@core/services/encrypted.service';
import {logoutAction} from '@store/actions/auth';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';

function* logoutRequestWorker({
  payload,
}: ActionType<typeof logoutAction.request>) {
  const data: SagaReturnType<typeof AuthService.logoutAuth> = yield call(
    AuthService.logoutAuth,
    payload,
  );
  if (data.ok) {
    axiosConfig.defaults.params = undefined;
    yield removeAccessToken();
    yield removeRefreshToken();
    yield put(logoutAction.success(data));
    return;
  }

  yield put(logoutAction.failure('fail'));
}

export function* logoutRequestSaga() {
  yield takeLatest(logoutAction.request, logoutRequestWorker);
}
