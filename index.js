//Dependencies
const express = require("express");
const fetch = require("node-fetch");
const weatherRoutes = require('./Routes/weather');
//Init app
app = express();

//Forward router to Routes folder
app.use('/current', weatherRoutes);

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/" + "Public"+ "/"+"index.html");
});

//Start App
app.listen(process.env.PORT || 3000);




//Weather calls have to execute within the promise
/*
const APIKEY = "c30c2a80da1b272f6f1260b98d152614";
const CITY = "East Greenwich";
const myURL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${APIKEY}`;
let WeatherCall = fetch(myURL)
.then(res => res.json())
.then(json => {
	console.log(json);
	const weatherReport = json;
	console.log(`weather report: ${weatherReport.name}`);
});

*/


