import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';

export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const RESET_PASSWORD = 'RESET_PASSWORD';

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if (error.data.error) {
    errorMessage = error.data.error;
  } else if (error.data) {
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if (error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    logout();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    })
  }
}

export function register(formData) {
  return function(dispatch) {
    axios.post('/api/auth/register', formData)
    .then((res) => {
      cookie.save('token', res.data.token, { path: '/' });
      dispatch({ type: AUTH_USER, payload: res.data.message });
      browserHistory.push('/dashboard');
    })
    .catch((err) => {
      errorHandler(dispatch, err.response, AUTH_ERROR)
    });
  }
}

export function hideMessage() {
  return { type: HIDE_MESSAGE };
}

function authError(message) {
  return { type: AUTH_ERROR, payload: message };
}
