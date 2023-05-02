import * as NotyService from '@core/services/noty.service';
import {sendMessageAction} from '@store/actions/noty';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';

function* sendMessageRequestWorker({
  payload,
}: ActionType<typeof sendMessageAction.request>) {
  try {
    const data: SagaReturnType<typeof NotyService.sendMessageNoty> = yield call(
      NotyService.sendMessageNoty,
      payload,
    );

    if (data.ok) {
      yield put(sendMessageAction.success(data));
      return;
    }

    yield put(sendMessageAction.failure('fail'));
  } catch {
    yield put(sendMessageAction.failure('fail'));
  }
}

export function* sendMessageRequestSaga() {
  yield takeLatest(sendMessageAction.request, sendMessageRequestWorker);
}
