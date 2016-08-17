import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import EventsReducer from './reducer_events';
import UserReducer from './reducer_user';
import CalendarReducer from './reducer_calendar';
import MoviesReducer from './reducer_movies';
import WeatherReducer from './reducer_weather';
import LightsReducer from './reducer_lights';

  const rootReducer = combineReducers({
    events: EventsReducer,
    user: UserReducer,
    calendar: CalendarReducer,
    movies: MoviesReducer,
    weather: WeatherReducer,
    lights: LightsReducer,
    routing: routerReducer
  });

export default rootReducer;