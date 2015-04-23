import { Reapp, React, NestedViewList, View, Button, store, Drawer, Icon } from 'reapp-kit';
import ViewActions from '../actions/ViewActions';
import Results from './home/Results';
import Details from './home/Details';
import CityMenu from './home/Menu';
let iconFile = require('reapp-kit/icons/add.svg');

const Home = store.cursor(['weather', 'cities'], class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      openMenu: false
    };
  }
  componentWillMount(){
    store().set('cities', store().get('setCities').call());
  }
  componentWillUnmount(){
    localStorage.setItem('cities', JSON.stringify(store().get('cities')));
  }
  getWeather(e){
    // if(event.keyCode == 13){
    //   this.setState({
    //     refreshing: true,
    //     query: e.target.value
    //   });
    //   this.action.getForecast(this.state.query);
    //   this.action.getWeather(this.state.query)
    //     .then(() => {
    //       this.setState({
    //         loaded: true,
    //         refreshing: false
    //       });
    //     })
    //     .catch((err) => {
    //       console.log('errrrr', err);
    //     });
    // }
  }
  toggleDrawer() {
    this.setState({ openMenu: !this.state['openMenu'] });
  }
  render() {
    const plusIcon = <Button onTap={() => this.toggleDrawer()} iconProps={ {file:iconFile,size:24,stroke:1}} />;
    let forecast = this.action.getForecast(5103269);
    let weather = this.action.getWeather(5103269);
    return (
      <NestedViewList {...this.props.viewListProps}>
        <View fullscreen currentCity={this.props.cities[0]} title={"React Weather"} titleLeft={plusIcon} titleBarProps={{transparent:true}}>
          <Drawer from={'top'} open={this.state.openMenu}>
            <CityMenu />
          </Drawer>
          <br />
          {!this.props.cities &&
            <p>{'Click the "+" to add a city'}</p>
          }
          <Results location={5103269} forecast={forecast} weather={weather}/>
        </View>
        
      </NestedViewList>
    );
  }
});

export default Reapp(Home);