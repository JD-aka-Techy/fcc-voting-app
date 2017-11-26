import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import polls from './reducers/polls';

export default combineReducers({
  routing: routerReducer,
  polls
})