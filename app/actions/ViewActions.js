import { action, store, Immutable } from 'reapp-kit';
import { WeatherAPI } from '../constants/AppConstants';
import WeatherStore from '../stores/WeatherStore';

const url = path => `${WeatherAPI.root}${path}`;
const get = path => fetch(url(path)).then(validResponse);

function validResponse(response) {
  return response.json();
}

function toArray(obj){
    var arr = [];
    for(var key in obj){
      arr.push(obj[key]);
    }
    return arr;
}

action('getWeather', (zip) => {
	get(`zip=${zip},us`)
		.then( (response) => {
			store().set('weather', response);
		})
		.catch((err) => {
			console.log('errr...', err.message);
			return false;
		})
});

function returnWeatherStore () {
	let weather = store().get('weather');
	// console.log(weather);
	return weather;
	// return false;
}