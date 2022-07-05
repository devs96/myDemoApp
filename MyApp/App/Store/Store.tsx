import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';

import rootReducer from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type RootState = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);

export {store};
