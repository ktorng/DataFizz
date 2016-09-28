import axios from 'axios';
import { browserHistory } from 'react-router';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTH_ERROR = 'AUTH_ERROR';

export function signUp(formData) {
  return function(dispatch) {
    axios.post('/api/auth/signUp', formData)
    .then((res) => {
      dispatch({ type: LOG_IN });
      browserHistory.push('/profile');
    })
    .catch((err) => {
      dispatch(authError(err));
    });
  }
}

function authError(err) {
  return {
    type: AUTH_ERROR,
    payload: err
  };
}
