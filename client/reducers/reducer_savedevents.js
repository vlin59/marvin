import { SET_SAVEDEVENTS } from '../actions/index.js';

export default function (state = [], action) {
  switch (action.type) {
    case SET_SAVEDEVENTS:
      return action.payload;
  }

  return state;
};