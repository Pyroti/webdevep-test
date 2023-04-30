import * as NotyService from '@core/services/noty.service';
import {regFirebaseTokenAction} from '@store/actions/noty';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';

function* regFirebaseTokenRequestWorker({
  payload,
}: ActionType<typeof regFirebaseTokenAction.request>) {
  const data: SagaReturnType<typeof NotyService.regFirebaseTokenNoty> =
    yield call(NotyService.regFirebaseTokenNoty, payload);
  if (data.ok) {
    yield put(regFirebaseTokenAction.success(data));
    return;
  }

  yield put(regFirebaseTokenAction.failure('fail'));
}

export function* regFirebaseRequestSaga() {
  yield takeLatest(
    regFirebaseTokenAction.request,
    regFirebaseTokenRequestWorker,
  );
}
