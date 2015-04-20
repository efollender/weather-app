import { Reapp, React, NestedViewList, View, Button, store, SearchBar } from 'reapp-kit';
import ViewActions from '../actions/ViewActions';
import RotatingLoadingIcon from './shared/RotatingLoadingIcon';
import Results from './home/Results';

const Home = store.cursor(['weather'], class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false
    };
  }
  getWeather(e){
    if(event.keyCode == 13){
      this.setState({
        refreshing: true,
        query: e.target.value
      });
      this.action.getForecast(this.state.query);
      this.action.getWeather(this.state.query)
        .then(() => {
          this.setState({
            loaded: true,
            refreshing: false
          });
        })
        .catch((err) => {
          console.log('errrrr', err);
        });
    }
  }
  render() {
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View title="React Weather">
          <SearchBar defaultValue="Enter a zip" onKeyDown={this.getWeather} />
          <br />
          {!this.state.loaded && 
            <p>Go get some weather</p>
          }
          {this.state.refreshing &&
            <RotatingLoadingIcon />
          }
          {this.props.weather &&
            <div>
              <Button onTap={() => this.router().transitionTo('details', {zip: this.state.query })} textColor={'#ffffff'}>
                {'See details for ' + this.props.weather.city}
              </Button>
              <Results />
            </div>
          }
        </View>

        {this.props.child()}
      </NestedViewList>
    );
  }
});

export default Reapp(Home);

/*
 This is your root route. When you wrap it with Reapp()
 it passes your class two properties:

  - viewListProps: Passes the scrollToStep to your ViewList so it animates
  - child: The child route
*/