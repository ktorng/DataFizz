import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';

// bundle up reducers and send to store
const rootReducer = combineReducers({
  auth: AuthReducer,
})

export default rootReducer;
