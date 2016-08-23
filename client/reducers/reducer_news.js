import { SET_NEWS } from '../actions/index.js';

export default function (state = '', action) {
  switch (action.type) {
    case SET_NEWS:
      return action.payload;
  }

  return state;
};