document.getElementById('fetchWeather').addEventListener('click', () => {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeather(location);
    } else {
        alert('Please enter a location');
    }
});

function fetchWeather(location) {
    const apiKey = '773613576b44c3aabe48fd45bcbb59be';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                alert('Location not found');
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const { name, main, weather } = data;
    weatherInfo.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Condition: ${weather[0].description}</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Pressure: ${main.pressure} hPa</p>
    `;
}
