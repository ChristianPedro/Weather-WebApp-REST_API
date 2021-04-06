const express = require('express');
const fetch = require("node-fetch");
const router = express.Router();

const WeatherReport = {
	coord: { lon: -71.4559, lat: 41.6604 },
	weather: [
	  {
		id: 802,
		main: 'Clouds',
		description: 'scattered clouds',
		icon: '03d'
	  }
	],
	base: 'stations',
	main: {
	  temp: 286.42,
	  feels_like: 285.21,
	  temp_min: 286.15,
	  temp_max: 287.04,
	  pressure: 1012,
	  humidity: 54
	},
	visibility: 10000,
	wind: { speed: 6.69, deg: 50 },
	clouds: { all: 40 },
	dt: 1617724450,
	sys: {
	  type: 1,
	  id: 5217,
	  country: 'US',
	  sunrise: 1617704387,
	  sunset: 1617750966
	},
	timezone: -14400,
	id: 5221875,
	name: 'East Greenwich',
	cod: 200
};

router.get("/", (req, res) => {
	let importantInfo = {
		place: WeatherReport.name.toString(),
		description: WeatherReport.weather[0].description.toString(),
		feels_like: WeatherReport.main.feels_like.valueOf(),
		temp: WeatherReport.main.temp.valueOf(),
		humidity: WeatherReport.main.humidity.valueOf()
	}
	res.json(importantInfo);
});

//fix up so it only sends important stuff
//then comment out code and use the templete struct to test
router.get("/:location", (req, res) => {
	const APIKEY = "c30c2a80da1b272f6f1260b98d152614";
	const CITY = req.params.location;
	const myURL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKEY}`;
	let WeatherCall = fetch(myURL)
	.then(res => res.json())
	.then(json => {
	console.log(json);
	const weatherReport = json;
	console.log(`weather report: ${weatherReport}`);
	res.json(weatherReport);
});
	
});


module.exports = router;