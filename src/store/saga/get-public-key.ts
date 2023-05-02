import * as AuthService from '@core/services/auth.service';
import {getPublicKeyAction} from '@store/actions/auth';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';

function* getPublicKeyWorker() {
  try {
    const data: SagaReturnType<typeof AuthService.getPublicKeyAuth> =
      yield call(AuthService.getPublicKeyAuth);
    yield put(getPublicKeyAction.success(data));
  } catch {
    yield put(getPublicKeyAction.failure('fail'));
  }
}

export function* getPublicKeySaga() {
  yield takeLatest(getPublicKeyAction.request, getPublicKeyWorker);
}
