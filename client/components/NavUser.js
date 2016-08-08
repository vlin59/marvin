import React from 'react';
import { Link } from 'react-router';

export default (props) => (
          <div className="row text-center navbar">
            <div className="col-md-4 col-sm-4">MARVIN</div>
            <Link to="/"><div className="col-md-2 col-sm-2 navpad">Home</div></Link>
            <Link to="/calendar"><div className="col-md-2 col-sm-2 navpad line">Calendar</div></Link>
            <Link to="/dashboard"><div className="col-md-2 col-sm-2 navpad line">Dashboard</div></Link>
            <Link to="/settings"><div className="col-md-2 col-sm-2 navpad">Settings</div></Link>
          </div>
  )