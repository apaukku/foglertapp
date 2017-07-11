import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ForecastDay from './ForecastDay';

class Weather extends Component {

  constructor(props) {
    super(props);

    this.state = {
      forecast: []
    };
  }

  componentDidMount() {
    fetch('https://foglert.herokuapp.com/weather/Espoo')
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
