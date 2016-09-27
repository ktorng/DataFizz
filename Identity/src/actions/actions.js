import axios from 'axios';

export const SIGN_UP = 'SIGN_UP';

export function signUp(formData) {
  const url = '/api/signUp';
  const body = {
    email: formData.email,
    password: formData.password
  };
  const request = axios.post(url, body);

  return {
    type: SIGN_UP,
    payload: request
  };
}
