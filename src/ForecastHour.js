import React, { Component } from 'react';

class ForecastHour extends Component {

  render() {
    return (
      <div className="ForecastHour">

        <div className={ this.props.hour.is_sunrise || this.props.hour.is_sunset  ?  'sunrise' : '' }>
          {new Date(this.props.date+' '+this.props.hour.hour+':00:00').toLocaleTimeString().slice(0,5)}
          <img src={this.props.hour.condition.icon}/>
          <strong>{ this.props.hour.temp_c} C</strong>
          <strong className="alarm">{ this.props.hour.is_fog ?  ' FOG!!!' : '' }</strong>
        </div>

      </div>
    );
  }
}

export default ForecastHour;
