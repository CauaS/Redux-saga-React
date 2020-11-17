import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../redux/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux/sagas/index';
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware), 
        composeWithDevTools())
    );

sagaMiddleware.run(rootSaga);

export default store;