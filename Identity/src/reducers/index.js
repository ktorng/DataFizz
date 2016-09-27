import { combineReducers } from 'redux';
import AuthReducer from './reducer_auth';
import { reducer as FormReducer } from 'redux-form';

// bundle up reducers and send to store
const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
})

export default rootReducer;
