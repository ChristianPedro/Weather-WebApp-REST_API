//Dependencies
const express = require("express");
const fetch = require("node-fetch");
const weatherRoutes = require('./Routes/weather');
//Init app
app = express();

//Forward router to Routes folder
app.use('/current', weatherRoutes);

app.use(express.static('public'))

//Start App
app.listen(process.env.PORT || 3000);



