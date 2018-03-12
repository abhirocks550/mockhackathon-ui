import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import addCourse from './reducers/addCourseReducer';

const store = createStore(combineReducers({ addCourse }), {}, applyMiddleware(logger, thunk));
export default store;
