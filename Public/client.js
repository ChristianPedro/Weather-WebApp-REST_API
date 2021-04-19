

const app = Vue.createApp({
	data () {
		locationInput: ''
		return {
			place: 'Norway',
			description: 'Scattered Clouds',
			feelslike: '90',
			temp: '80',
			humidity: '54',
		}
	},
	methods: {
		async getWeather() {
			const response = fetch(`http://localhost:3000/current/${this.locationInput}`)
			  const data = (await response).json()
			  .then(data => {
				if (data.cod != 404){
				const WeatherReport = data;
				this.place = WeatherReport.place.toString(),
				this.description = WeatherReport.description.toString(),
				this.feelslike = Math.round(WeatherReport.feels_like.valueOf()),
				this.temp = Math.round(WeatherReport.temp.valueOf()),
				this.humidity = Math.round(WeatherReport.humidity.valueOf())
				}
				else {
					alert("City not found");
				}
			  });
		},
		outputWeather() {
			if (typeof(this.locationInput) != 'undefined'){
			const data = this.getWeather();
			}
		}
	}
});

app.mount('#app')
