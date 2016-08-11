import React from 'react';

export default (props) => {
  console.log(props.event);
  return (
  <div>
    <p>{props.event.summary}</p>
    <p>Organizer: { props.event.organizer.displayName }</p>
  </div>

)}


