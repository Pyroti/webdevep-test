import * as AuthService from '@core/services/auth.service';
import {sendCodeAction} from '@store/actions/auth';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';

function* sendCodeRequestWorker({
  payload,
}: ActionType<typeof sendCodeAction.request>) {
  const data: SagaReturnType<typeof AuthService.sendCodeEmailAuth> = yield call(
    AuthService.sendCodeEmailAuth,
    payload,
  );
  if (data.ok) {
    yield put(sendCodeAction.success(data));
    return;
  }

  yield put(sendCodeAction.failure('fail'));
}

export function* sendCodeRequestSaga() {
  yield takeLatest(sendCodeAction.request, sendCodeRequestWorker);
}
