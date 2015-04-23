import { Reapp, React, store } from 'reapp-kit';
import Forecast from './Forecast';
import Chart from './Chart';

export default class Results extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log('Results mounted')
  }
  render() {

    return (
      <div>
        <h3 styles={styles.h3}>
          {this.props.weather &&
            <span>{this.props.weather.city}</span>
          }
          {!this.props.weather &&
            <span>Ridgewood</span>
          }
        </h3>
        <h4 styles={styles.h4}>
          {this.props.weather &&
            <span>{this.props.weather.conditions}</span>
          }
          {!this.props.weather &&
            <span>Sunny</span>
          }
        </h4>
        <h1 styles={styles.h1} className="temperature">
          {this.props.weather &&
            <span>{this.props.weather.temp}</span>
          }
          {!this.props.weather &&
            <span>81</span>
          }
        </h1>
        
        {this.props.forecast &&
          <div styles={styles.forecastWrapper}>
            <Forecast data={this.props.forecast} />
            <Chart data={this.props.forecast} />
          </div>
        }
      </div>
    );
  }
};

let styles = {
  h3: {
    textAlign: 'center',
    fontSize: '2em',
    marginBottom: '0'
  },
  h4: {
    textAlign: 'center',
    fontSize: '1.75em',
    margin: '0',
    fontWeight: 'normal'
  },
  h1: {
    textAlign: 'center',
    fontSize: '10em',
    margin: '0',
    lineHeight: '1em',
    fontWeight: 'normal'
  },
  small: {
      fontSize: '30%'
  },
  forecastWrapper: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0
  }
  
};