import { store } from 'reapp-kit';

function getSavedCities(){
		let savedCities = localStorage.getItem('cities');
		if(savedCities){
			return JSON.parse(savedCities);
		} else {
			return [];
		}
};

export default store({
	zip: null,
	weather: null,
	setCities:() => {
		return getSavedCities();
	},
	cities: []
});