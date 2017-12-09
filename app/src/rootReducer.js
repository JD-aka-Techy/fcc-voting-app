import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import polls from './reducers/polls';
import user from './reducers/user';

export default combineReducers({
  routing: routerReducer,
  polls,
  user
})