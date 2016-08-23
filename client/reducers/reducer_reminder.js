import { SET_REMINDER } from '../actions/index.js';

export default function (state = {}, action) {
  switch (action.type) {
    case SET_REMINDER:
      return action.payload;
  }

  return state;
};