import React from 'react';
import Search from '../../containers/Search.js'

var devs = [
  { name: "AJ ZAWAWI", job: "LEAD DEVELOPER ", pic: '../../styles/aj.jpeg', gh: 'https://github.com/ajzawawi' },
  { name: "JI BAIK", job: "PRODUCT OWNER & LEAD DEVELOPER", pic: '../../styles/ji.png', gh: 'https://github.com/JiBaik' },
  { name: "TAYLOR PAGE", job: "LEAD DEVELOPER", pic: '../../styles/taylor.jpg', gh: 'https://github.com/taylorpage' },
  { name: "VICTOR LIN", job: "SCRUM MASTER & LEAD DEVELOPER", pic: '../../styles/victor.png', gh: 'https://github.com/vlin59' }
];

var center = {
  textAlign: "center"
}

var top = {
  "margin-top": "100px"
}

export default class main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="col-xs-12" style={ top }>
        {
          devs.map(dev => {
            return (
              <div className="col-xs-3" style={ center }>
                <a href={ dev.gh }>
                  <img className="about-image" src={ dev.pic }></img>
                </a>
                <div style={ center }> { dev.name } </div>
                <div style={ center }> { dev.job } </div>
              </div>
            )
          })
        }
        </div>
        <div style= { top }>
          <h3 style= { center }>MARVIN</h3>
          <p style= { center }>
            Meet Marvin! He is your intuitive, robot, butler and he's here to make your day. Planning the fun part of your life has never been easier with Marvin's integrated calendar and event search. Looking for some fun but your brand new to the location? No problem! Marvin's event search is based on geolocation so he can serve up the best of whatever your current city has to offer. Planning has never been easier with Marvin's integration with Google Calendar. You can easily plan around your busy schedule and even view upcoming events as well as your day to day schedule.</p>
            <br/>
          <p style= { center }>
            For those avid concert-goers there is a built track sampler to easily get a feel for any concert you're looking to attend. Plan on attending a festival? The music sampler can give you a taste of some maybe unfamiliar artists who will be playing the event. Who knows, maybe Marvin can make you a fan!</p>
            <br/>
          <p style= { center }>
            Oh no! In all of your excitement to checkout that new restaurant down the street you've managed to forget to turn your lights off. Not a problem! Marvin also comes with a built in home-automation feature that can easily be hooked up to any appliance you tend to forget to turn off! Marvin has got your back and he's there to make sure you enjoy every second of your night.</p>
            <br/>
          <p style= { center }>
            Marvin also comes with a large array of other features like current weather, news, a todo list, a list of your saved events and even is voice activated! Not only does he come with a plethora of features but he serves them up to on a silver plater with an easy to use Dashboard. Each component on the Dashboard can easily be customized to and adjusted to fit your liking.
          </p>
        </div>
      </div>
    )
  }
}