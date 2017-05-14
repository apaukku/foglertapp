import React, { Component } from 'react';

class ForecastHour extends Component {

  render() {
    return (
      <div className="ForecastHour">

        <div className={ this.props.hour.is_sunrise || this.props.hour.is_sunset  ?  'visible' : 'hidden' }>
          <div className={ this.props.hour.is_fog ?  ' alarm' : '' }>
            <div className="hour-row">
              <div className="hour-row-time">{ this.props.hour.hour.toString().length == 1 ? '0': ''}{this.props.hour.hour}:00</div>
              <div className="hour-row-icon"><img src={this.props.hour.condition.icon}/></div>
              <div className="hour-row-temp"><strong>{Math.round(this.props.hour.temp_c)}&#8451;</strong></div>
              <div className="hour-row-humidity"> {this.props.hour.humidity}%</div>
              <div className="hour-row-visibility"> {Math.round(this.props.hour.vis_km)}km</div>
              <div className="hour-row-wind"> {Math.round(this.props.hour.wind_kph)}kph</div>
              <div className="hour-row-dew"> {Math.round(this.props.hour.dewpoint_c)}&#8451;</div>
              <div className="hour-row-cloud"> {Math.round(this.props.hour.cloud)}%</div>
              <div className="hour-row-precip"> {Math.round(this.props.hour.precip_mm)}mm</div>
            </div>
            <div className="break"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default ForecastHour;
