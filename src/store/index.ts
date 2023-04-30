import {
  configureStore,
  Store,
  compose,
  applyMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {AppState, rootReducer} from './reducer';
import {sagas} from './saga';

const sagaMiddleware = createSagaMiddleware();

const createStore = (): {store: Store<AppState>} => {
  const middlewares = [sagaMiddleware];

  const store = configureStore({
    reducer: rootReducer,
    enhancers: [compose(applyMiddleware(...middlewares))],
  });

  sagaMiddleware.run(sagas);

  return {store};
};

export default createStore;
