export const geoApiOptions = {
	method: 'GET',
	headers: {
		"X-RapidAPI-Key": "ba0df10b21msheb93a1271b10002p181e99jsn8aeb8fc6f82e",
		"X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
	},
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "68cb258d134df797d49149d8c4ba3dcb"; 

// fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));