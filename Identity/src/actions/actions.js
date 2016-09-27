import axios from 'axios';
import { browserHistory } from 'react-router';

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTH_ERROR = 'AUTH_ERROR';

export function signUp({ email, password }) {
  return (dispatch) => {
    axios.post('/api/signUp', { email, password });
    .then((res) => {
      dispatch({ LOG_IN });
      browserHistory.push('/profile');
    })
    .catch((err) => {
      dispatch(authError(err));
    })
  }
}

function authError(err) {
  return {
    type: AUTH_ERROR,
    payload: err
  };
}
