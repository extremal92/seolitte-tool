import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import thunkMiddleware from 'redux-thunk';
// import { createLogger } from 'redux-logger';

import rootReducer from './reducers/index'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(
    thunkMiddleware, 
    thunk
    // loggerMiddleware
  ))
)

export default store;