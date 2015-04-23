import {Reapp, React, store, action, List, SearchBar, Button} from 'reapp-kit';

const CityMenu = store.cursor(['results', 'cities'], class Menu extends React.Component {
	searchForCity(e){
		if(e.keyCode == 13){
			this.action.querySearch(e.target.value);
		}
	}
	render(){
		return (
			<div styles={{overflow:'scroll'}}>
				<SearchBar defaultValue="Search for a city" onKeyDown={this.searchForCity} />
				<List>
					{this.props.results && this.props.results.map( (city, index) => 
						<List.Item
							key={index} 
							title={city.name + ', ' + city.sys.country}
							titleSub={city.id}>
							<Button textColor={'#000000'} onClick={this.action.saveCity.bind(this, city)}>Add</Button>
						</List.Item>
						)
					}
				</List>
				<List title="saved">
					{this.props.cities && this.props.cities.map( (city, index) => 
						<List.Item
							key={index+'2'} 
							title={city.name}
							titleSub={city.id}
						>
						<Button textColor={'#000000'} onClick={this.action.removeCity.bind(this, city)}>Remove</Button>
						</List.Item>
						)
					}
		        </List>
			</div>
		);
	}
});

export default Reapp(CityMenu);