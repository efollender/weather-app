import { Reapp, React, NestedViewList, View, Button, store, SearchBar } from 'reapp-kit';
import ViewActions from '../actions/ViewActions';

const Home = store.cursor(['weather'], class Home extends React.Component {
  componentWillMount(){
    this.state = {
      loaded: false
    }
  }
  getWeather(e){
    if(event.keyCode == 13){
      this.action.getWeather(e.target.value);
      this.state = {
        loaded:true,
        query: e.target.value
      };
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
            {this.props.weather &&
              <h1>{this.props.weather}</h1>
            }
          <Button onTap={() => this.router().transitionTo('sub')} filled>
            Go to sub view
          </Button>
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