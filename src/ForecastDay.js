import React, { Component } from 'react';
import ForecastHour from './ForecastHour';

class ForecastDay extends Component {

  render() {
    return (
      <div className="ForecastDay">
      <h4>{this.props.date}</h4>
      {this.props.hours.map(hour =>
        <ForecastHour key={hour.hour} hour={hour} date={this.props.date}/>
      )}

      </div>
    );
  }
}

export default ForecastDay;
