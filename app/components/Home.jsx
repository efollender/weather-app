import { Reapp, React, NestedViewList, View, Button, store, SearchBar } from 'reapp-kit';
import ViewActions from '../actions/ViewActions';
import RotatingLoadingIcon from './shared/RotatingLoadingIcon';

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
            <Button onTap={() => this.router().transitionTo('results', {zip: this.state.query })} filled>
              See the weather in {this.props.weather.city}
            </Button>
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