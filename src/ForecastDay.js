import React, { Component } from 'react';
import ForecastHour from './ForecastHour';

class ForecastDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAll: false,
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    if(this.state.showAll){
      this.setState({showAll:false});
    }else{
      this.setState({showAll:true});
    }
  }

  render() {
    return (
      <div className="ForecastDay">
        <div className={this.props.date.day.condition.code==1000? 'sunny' : 'cloudy'}>
          <h4>{this.props.date.date}</h4>
          <h1><img src={this.props.date.day.condition.icon}/> {Math.round(this.props.date.day.maxtemp_c)} &#8451;</h1>
          <div className={this.state.showAll? 'showAll':''} >
            {this.props.date.hour.map(hour =>
              <ForecastHour key={hour.hour} hour={hour} date={this.props.date}/>
            )}
          </div>
          <a onClick={this.showMore}>-Show more-</a>
        </div>
      </div>

    );
  }
}

export default ForecastDay;
