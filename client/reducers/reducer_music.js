import { SET_TRACKS } from '../actions/index.js';

export default function (state = [], action) {
  switch (action.type) {
    case SET_TRACKS:
      return action.payload;
  }

  return state;
};