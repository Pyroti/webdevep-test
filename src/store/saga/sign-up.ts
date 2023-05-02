import * as AuthService from '@core/services/auth.service';
import {signUpAction} from '@store/actions/auth';
import {call, put, SagaReturnType, takeLatest} from 'redux-saga/effects';
import {ActionType} from 'typesafe-actions';

function* signUpRequestWorker({
  payload,
}: ActionType<typeof signUpAction.request>) {
  try {
    const dataCode: SagaReturnType<typeof AuthService.sendCodeEmailAuth> =
      yield call(AuthService.sendCodeEmailAuth, {email: payload.email});
    if (dataCode.ok) {
      const data: SagaReturnType<typeof AuthService.registrationAuth> =
        yield call(AuthService.registrationAuth, payload);
      if (data.ok) {
        yield put(signUpAction.success(data));
        return;
      }
    }

    yield put(signUpAction.failure('fail'));
  } catch {
    yield put(signUpAction.failure('fail'));
  }
}

export function* signUpRequestSaga() {
  yield takeLatest(signUpAction.request, signUpRequestWorker);
}
