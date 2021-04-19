const express = require('express');
const fetch = require("node-fetch");
const cors = require("cors");
require('dotenv/config');
const router = express.Router();

router.use(cors())
router.get("/", (req, res) => {
	const myURL = `http://api.openweathermap.org/data/2.5/weather?q=Philadelphia&units=imperial&appid=${process.env.APIKEY}`;
	let WeatherCall = fetch(myURL)
	.then(res => res.json())
	.then(json => {
	console.log(json);
	if (json.cod == '200'){
	const weatherReport = json;
	let importantInfo = {
		place: weatherReport.name.toString(),
		description: weatherReport.weather[0].description.toString(),
		feels_like: weatherReport.main.feels_like.valueOf(),
		temp: weatherReport.main.temp.valueOf(),
		humidity: weatherReport.main.humidity.valueOf()
	}
	res.json(importantInfo);
	} else {
		res.send(`Unable to find city ${json.name}`)
	}

});
});

//get info from weather api on certain location
router.get("/:location", (req, res) => {
	const CITY = req.params.location;
	const myURL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=imperial&appid=${process.env.APIKEY}`;
	let WeatherCall = fetch(myURL)
	.then(res => res.json())
	.then(json => {
	console.log(json);
	console.log(json.cod);
	if (json.cod == '200'){
	const weatherReport = json;
	let importantInfo = {
		place: weatherReport.name.toString(),
		description: weatherReport.weather[0].description.toString(),
		feels_like: weatherReport.main.feels_like.valueOf(),
		temp: weatherReport.main.temp.valueOf(),
		humidity: weatherReport.main.humidity.valueOf()
	}
	res.json(importantInfo);
	} else {
		res.json(json)
	}
});
	
});


module.exports = router;