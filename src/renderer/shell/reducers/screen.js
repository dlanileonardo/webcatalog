import Immutable from 'immutable';

import { SCREEN_RESIZE } from '../constants/actions';

const initialState = Immutable.Map({
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
});

const screen = (state = initialState, action) => {
  switch (action.type) {
    case SCREEN_RESIZE:
      return state
        .set('screenWidth', action.screenWidth);
    default:
      return state;
  }
};

export default screen;
