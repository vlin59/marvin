import React from 'react';

export default (props) => (
          <div className="row text-center navbar">
            <Link to="/"><div className="col-md-2 col-sm-2 navpad">Home</div></Link>
            <Link to="/advanced"><div className="col-md-2 col-sm-2 navpad line">Search</div></Link>
            <div className="col-md-4 col-sm-4"><img className="center-block logo" src="imgs/logo2.png" /></div>
            <Link to="/saved"><div className="col-md-2 col-sm-2 navpad line">Saved</div></Link>
            <Link to="/logout"><div className="col-md-2 col-sm-2 navpad">Logout</div></Link>
          </div>
  )