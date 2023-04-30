import {combineReducers} from '@reduxjs/toolkit';
import 'react-redux';
import * as fromAuth from './auth';
import * as fromNoty from './noty';

export interface AppState {
  auth: fromAuth.State;
  noty: fromNoty.State;
}

export const rootReducer = combineReducers<AppState>({
  auth: fromAuth.reducer,
  noty: fromNoty.reducer,
});
