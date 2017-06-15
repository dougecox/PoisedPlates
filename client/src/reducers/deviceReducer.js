import { IS_MOBILE } from '../actions/index';

const initialState = {
  mobile: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_MOBILE:
      return Object.assign({}, state, {
        mobile: true
      });
    default:
      return state;
  }
};