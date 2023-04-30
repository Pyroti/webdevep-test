import {createReducer} from 'typesafe-actions';
import {
  NotyActionUnion,
  sendMessageAction,
  regFirebaseTokenAction,
} from '@store/actions/noty';

export interface State {
  loading: boolean;
  error: string | null;
}

const initialState: State = {
  loading: false,
  error: null,
};

export const reducer = createReducer<State, NotyActionUnion>(initialState)
  .handleAction(sendMessageAction.request, state => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(sendMessageAction.failure, state => ({
    ...state,
    loading: false,
    error: state.error,
  }))
  .handleAction(sendMessageAction.success, state => ({
    ...state,
    loading: false,
  }))

  .handleAction(regFirebaseTokenAction.request, state => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(regFirebaseTokenAction.failure, state => ({
    ...state,
    loading: false,
    error: state.error,
  }))
  .handleAction(regFirebaseTokenAction.success, state => ({
    ...state,
    loading: false,
  }));
