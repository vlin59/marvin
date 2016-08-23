import { SET_NEWS } from '../actions/index.js';

export default function (state = '', action) {
  switch (action.type) {
    case SET_NEWS:
      if (!action.payload){
        return 'http%3A%2F%2Ffeeds.feedburner.com%2FTechcrunch';
      }
      return action.payload;
  }

  return state;
};