import { SET_CALENDAR } from '../actions/index.js';

export default function (state = [], action) {
  switch (action.type) {
    case SET_CALENDAR:
      return action.payload;
  }

  return state;
};