import { combineReducers } from 'redux';
import EventsReducer from './reducer_events';
import UserReducer from './reducer_user';

  const rootReducer = combineReducers({
    events: EventsReducer,
    user: UserReducer
  });

export default rootReducer;