export const SET_EVENTS = 'SET_EVENTS';
export const SEARCH_EVENTS = 'SEARCH_EVENTS';
export const USER_SET = 'USER_SET';
export const SET_CALENDAR = 'SET_CALENDAR';

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