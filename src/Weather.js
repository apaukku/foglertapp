import React, { Component } from 'react';
import ForecastDay from './ForecastDay';

class Weather extends Component {

  constructor(props) {
    super(props);

    this.state = {
      forecast: []
    };
  }

  componentDidMount() {
    var location = window.location.search.substring(1) ? window.location.search.substring(1) : 'Espoo';
    fetch('https://foglert.herokuapp.com/weather/'+location)
    .then((resp) => resp.json())
    .then((data) => {
      this.setState({forecast:data.forecast.forecastday});
      console.log(this.state.forecast);
    });

    }

  render() {
    return (
      <div className="Weather">
        {this.state.forecast.map(date =>
          <ForecastDay date={date} key={date.date_epoch} />
        )}
      </div>
    );
  }
}

export default Weather;
