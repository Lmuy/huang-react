import { createStore, applyMiddleware } from "redux";
import reducer from './reducer';
import thunk from 'redux-thunk'
// import createSagaMiddleware from "redux-saga";
// import mySaga from './sagas'

const store = createStore(reducer, applyMiddleware(thunk))

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducer, applyMiddleware(sagaMiddleware))
// sagaMiddleware.run(mySaga)



export default store