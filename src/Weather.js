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
        Weather
        {this.state.forecast.map(date =>
          <ForecastDay date={date.date} key={date.date_epoch} hours={date.hour}/>
        )}
      </div>
    );
  }
}

export default Weather;
