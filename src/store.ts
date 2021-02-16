import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from 'rootReducer';
import rootSaga from './rootSaga';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer(history),
  middleware: [
    sagaMiddleware,
    routerMiddleware(history),
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});

// then run the saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
