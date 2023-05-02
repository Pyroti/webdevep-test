import {createReducer} from 'typesafe-actions';
import {
  AuthActionUnion,
  getPublicKeyAction,
  logoutAction,
  regenerateTokenAction,
  sendCodeAction,
  signInAction,
  signUpAction,
} from '@store/actions/auth';

export interface State {
  loading: boolean;
  isSignedIn: boolean;
  error: string | null;
}

const initialState: State = {
  loading: false,
  isSignedIn: false,
  error: null,
};

export const reducer = createReducer<State, AuthActionUnion>(initialState)
  .handleAction(signInAction.request, state => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(signInAction.failure, state => ({
    ...state,
    loading: false,
    error: state.error,
  }))
  .handleAction(signInAction.success, state => ({
    ...state,
    loading: false,
    isSignedIn: true,
  }))

  .handleAction(signUpAction.request, state => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(signUpAction.failure, state => ({
    ...state,
    loading: false,
    error: state.error,
  }))
  .handleAction(signUpAction.success, state => ({
    ...state,
    loading: false,
  }))

  .handleAction(logoutAction.request, state => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(logoutAction.failure, state => ({
    ...state,
    loading: false,
    error: state.error,
  }))
  .handleAction(logoutAction.success, state => ({
    ...state,
    loading: false,
    isSignedIn: false,
  }))

  .handleAction(sendCodeAction.request, state => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(sendCodeAction.failure, state => ({
    ...state,
    loading: false,
    error: state.error,
  }))
  .handleAction(sendCodeAction.success, state => ({
    ...state,
    loading: false,
  }))

  .handleAction(regenerateTokenAction.request, state => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(regenerateTokenAction.failure, state => ({
    ...state,
    loading: false,
    error: state.error,
  }))
  .handleAction(regenerateTokenAction.success, state => ({
    ...state,
    loading: false,
  }))

  .handleAction(getPublicKeyAction.request, state => ({
    ...state,
    loading: true,
    error: null,
  }))
  .handleAction(getPublicKeyAction.failure, state => ({
    ...state,
    loading: false,
    error: state.error,
  }))
  .handleAction(getPublicKeyAction.success, state => ({
    ...state,
    loading: false,
  }));
