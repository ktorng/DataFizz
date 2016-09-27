import { LOG_IN, LOG_OUT, AUTH_ERROR } from '../actions/actions';

export default function(state = {}, action) {
  switch (action.type) {
    case LOG_IN: {
      return { ...state, auth: true };
    }
    case LOG_OUT: {
      return { ...state, auth: false };
    }
    case AUTH_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
}
