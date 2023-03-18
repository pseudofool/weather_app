const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ae09ab708emsh07469b37e017c94p102b11jsnc05007ec9f14',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
    document.getElementById('cityName').innerText = city;
    // document.getElementById('currTemp').innerText = response.temp;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then(response => {
            document.getElementById('cloud_pct').innerHTML = response.cloud_pct
            document.getElementById('temp').innerHTML = response.temp
            document.getElementById('currTemp').innerHTML = response.temp
            document.getElementById('feels_like').innerHTML = response.feels_like
            document.getElementById('humidity').innerHTML = response.humidity
            document.getElementById('curr_humidity').innerHTML = response.humidity
            document.getElementById('min_temp').innerHTML = response.min_temp
            document.getElementById('max_temp').innerHTML = response.max_temp
            document.getElementById('wind_speed').innerHTML = response.wind_speed
            document.getElementById('curr_wind_speed').innerHTML = response.wind_speed
            document.getElementById('wind_degrees').innerHTML = response.wind_degrees
            document.getElementById('sunrise').innerHTML = response.sunrise
            document.getElementById('sunset').innerHTML = response.sunset
            console.log(response)
        })
        .catch(err => console.error(err)
    );
}

submit.addEventListener('click', (e)=>{
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Delhi");

