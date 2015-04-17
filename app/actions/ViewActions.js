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
	get(`/weather?zip=${zip},us&units=imperial`)
		.then( (response) => {
			if(response.main){
				let currentWeather = {
					temp: Math.floor(response.main.temp),
					city: response.name,
					conditions: response.weather[0].main 
				}
				store().set('weather', currentWeather);
			}
			console.log(response);
		})
		.catch((err) => {
			console.log('errr...', err.message);
			return false;
		});
});

action('getForecast', (location) => {
	get(`/forecast/daily?q=${location},us&units=imperial`)
		.then( (response) => {
			if(response.cod == '200'){
				console.log('forecast', response)
				let forecast = response.list.map((obj)=>{
					return {
						temp:{
							max: Math.floor(obj.temp.max),
							min: Math.floor(obj.temp.min)
						},
						conditions: obj.weather[0]
					}
				});
				store().set('forecast', toArray(forecast));
			}
			return true;
		})
		.catch((err) => {
			console.log('errr...', err.message);
			return false;
		});
});

function returnWeatherStore () {
	let weather = store().get('weather');
	return weather;
}