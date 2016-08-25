import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

export default class ResultsYelpPageEntry extends React.Component {

  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>
       <div className='row event-container venues'>


      <div className="col-md-5 event-img">
        <img className="img-fluid" src={this.props.venue.image_url} />
      </div>


    <div className="col-md-7">
      <div className="row">
      <a href={this.props.venue.url}>{this.props.venue.name}</a>
      <p>{this.props.venue.location.address1},
          {this.props.venue.location.city},
          {this.props.venue.location.state},
          {this.props.venue.location.zip_code}</p>
          <p>Pricing: {this.props.venue.price} | Rating: {this.props.venue.rating} stars</p>
      </div>

    </div>

    </div>

      </div>
    )
  }

}

