export const SET_EVENTS = 'SET_EVENTS';
export const SEARCH_EVENTS = 'SEARCH_EVENTS'

export function setEvents (event) {
  return {
    type: SET_EVENTS,
    payload: event
  };
}

export function searchEvents (event) {
  return {
    type: SEARCH_EVENTS,
    payload: event
  };
}