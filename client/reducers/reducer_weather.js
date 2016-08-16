import { SET_WEATHER } from '../actions/index.js';

export default function (state = [], action) {
  switch (action.type) {
    case SET_WEATHER:
      return action.payload;
  }

  return state;
};