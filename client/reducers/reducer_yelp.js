import { SET_VENUES } from '../actions/index.js';

export default function (state = [], action) {
  switch (action.type) {
    case SET_VENUES:
      return action.payload;
  }

  return state;
};