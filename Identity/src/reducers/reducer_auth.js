import {
  LOG_IN,
  LOG_OUT,
  AUTH_ERROR,
  HIDE_MESSAGE
} from '../actions/actions';

const INITIAL_STATE = {
  message: '',
  showMessage: false
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isAuthenticated: true,
        message: action.payload,
        showMessage: true
      };
    }
    case LOG_OUT: {
      return { ...state, isAuthenticated: false };
    }
    case AUTH_ERROR: {
      return { ...state, message: action.payload, showMessage: true };
    }
    case HIDE_MESSAGE: {
      return { ...state, showMessage: false };
    }
    default: {
      return state;
    }
  }
}
