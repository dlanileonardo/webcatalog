/* global localStorage */
import Immutable from 'immutable';
import { SIGN_IN, LOG_OUT } from '../constants/actions';

const initialState = Immutable.Map({
  token: localStorage.getItem('token'),
});

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem('token', action.token);
      return state
        .set('token', action.token);
    case LOG_OUT:
      localStorage.removeItem('token');
      return state
        .set('token', action.token);
    default:
      return state;
  }
};

export default auth;
