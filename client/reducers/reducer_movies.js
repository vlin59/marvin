import SET_MOVIES from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case SET_MOVIES:
      return action.payload;
  }

  return state;
};