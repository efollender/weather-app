import { Reapp, React, View, BackButton, store, action } from 'reapp-kit';

const Results = store.cursor(['weather', 'forecast'], class Results extends React.Component {
  constructor(props){
    super(props);
  }
  componentWillMount(){
    this.state = {
      location: this.context.router.getCurrentParams().zip
    };
  }
  componentDidMount(){
    if(!this.props.weather){
      this.action.getWeather(this.state.location);
    }
    if(!this.props.forecast){
      this.action.getForecast(this.state.location);
    }
  }
  render() {
    const backButton = 
      <BackButton onTap={() => window.history.back()} />

    return (
      <View {...this.props} title={"Searching for " + this.state.location} titleLeft={backButton}>
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
            <p>{this.props.forecast[0]}</p>
        }
      </View>
    );
  }
});

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
  }
  
};

export default Results;