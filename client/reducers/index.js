import { combineReducers } from 'redux';
import EventsReducer from './reducer_events';
import UserReducer from './reducer_user';
import CalendarReducer from './reducer_calendar';
import MoviesReducer from './reducer_movies';
import WeatherReducer from './reducer_weather';
import LightsReducer from './reducer_lights';
import TodoReducer from './reducer_todo';
import NewsReducer from './reducer_news';
import ReminderReducer from './reducer_reminder';
import SavedEventsReducer from './reducer_savedevents';
import VenueReducer from './reducer_yelp';

  const rootReducer = combineReducers({
    events: EventsReducer,
    venues: VenueReducer,
    user: UserReducer,
    calendar: CalendarReducer,
    movies: MoviesReducer,
    weather: WeatherReducer,
    lights: LightsReducer,
    todos: TodoReducer,
    news: NewsReducer,
    reminder: ReminderReducer,
    savedevents: SavedEventsReducer
  });

export default rootReducer;