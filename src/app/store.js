import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import user from './reducers/userReducer';
const store = createStore(combineReducers({ user }), {}, applyMiddleware(logger, thunk));
export default store;
