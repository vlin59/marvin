import { USER_SET } from '../actions/index.js';
import { cloneDeep } from 'lodash';

export default function (state = null, action) {
  switch (action.type) {
    case USER_SET:
      return cloneDeep(action.options.data);
  }

  return state;
};