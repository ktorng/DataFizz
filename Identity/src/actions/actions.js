import axios from 'axios';
import { browserHistory } from 'react-router';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTH_ERROR = 'AUTH_ERROR';
export const HIDE_MESSAGE = 'HIDE_MESSAGE';

export function signUp(formData) {
  return function(dispatch) {
    axios.post('/api/auth/signUp', formData)
    .then((res) => {
      dispatch({ type: LOG_IN, payload: res.data.message });
      browserHistory.push('/profile');
    })
    .catch((err) => {
      const message = err.response ?
        err.response.data.message :
        'Error during signup';
      dispatch(authError(message));
    });
  }
}

export function hideMessage() {
  return { type: HIDE_MESSAGE };
}

function authError(message) {
  return { type: AUTH_ERROR, payload: message };
}
