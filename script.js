async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '3aa28ac9d171cdc29bed0f96c8f9c64b'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            document.getElementById('weatherResult').innerHTML = 
                `<p>Temperature: ${data.main.temp}°C</p>
                 <p>Humidity: ${data.main.humidity}%</p>
                 <p>Weather: ${data.weather[0].description}</p>`;

            // Change background based on weather
            changeBackground(data.weather[0].main);
        } else {
            document.getElementById('weatherResult').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weatherResult').innerHTML = `<p>Error fetching weather data.</p>`;
    }
}

function changeBackground(weather) {
    const body = document.getElementById('weatherBody');

    if (weather === "Clear") {
        body.style.backgroundImage = "url('https://www.easemytrip.com/travel/img/summer-holiday-india.jpg')"; // Sunny
    } else if (weather === "Clouds") {
        body.style.backgroundImage = "url('https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?cs=srgb&dl=pexels-pixabay-158163.jpg&fm=jpg')"; // Cloudy
    } else if (weather === "Rain") {
        body.style.backgroundImage = "url('https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=')"; // Rainy
    } else if (weather === "Snow") {
        body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RlWZTMoeBQlxBxiKNKJuRc4Fu7ka98JCWw&s')"; // Snowy
    } else {
        body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmVMQMLRMeHiaE_f-AHp2fwHtpUuawCwEJw&s')"; // Default
    }

    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
}
