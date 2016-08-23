export const SET_EVENTS = 'SET_EVENTS';
export const SEARCH_EVENTS = 'SEARCH_EVENTS';
export const USER_SET = 'USER_SET';
export const SET_CALENDAR = 'SET_CALENDAR';
export const SET_TRACKS = 'SET_TRACKS';
export const SET_LIGHTS = 'SET_LIGHTS';
export const SET_MOVIES = 'SET_MOVIES';
export const SET_TODOS = 'SET_TODOS';
export const SET_WEATHER = 'SET_WEATHER';
export const SET_NEWS = 'SET_NEWS';
export const SET_REMINDER = 'SET_REMINDER';

export function setCalendar(events) {
  return {
    type: SET_CALENDAR,
    payload: events
  };
}

export function setEvents (event) {
  return {
    type: SET_EVENTS,
    payload: event
  };
}

export function setTracks (tracks) {
  return {
    type: SET_TRACKS,
    payload: tracks

  };
}

export function setLights (lights) {
  return {
    type: SET_LIGHTS,
    payload: lights
  };
}


export function setMovies(movies) {
  return{
    type: SET_MOVIES,
    payload: movies
  };
}

export function setTodos (todos) {
  return {
    type: SET_TODOS,
    payload: todos
  };
}

export function setWeather (weather) {
  return {
    type: SET_WEATHER,
    payload: weather
  };
}

export function setNews (news) {
  return {
    type: SET_NEWS,
    payload: news
  };
}

export function setReminder (reminder, time){


  return {
    type: SET_REMINDER,
    payload: {
      reminder,
      time
    }
  }
}

