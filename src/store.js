import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import RootReducer from 'rootReducer';
import rootSaga from './rootSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: RootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
});

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
