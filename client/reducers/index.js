import { combineReducers } from 'redux';
import EventsReducer from './reducer_events';
import UserReducer from './reducer_user';
import CalendarReducer from './reducer_calendar';
import MoviesReducer from './reducer_movies'

  const rootReducer = combineReducers({
    events: EventsReducer,
    user: UserReducer,
    calendar: CalendarReducer,
    movies: MoviesReducer
  });

export default rootReducer;