import axios from "axios";


const searchInput = document.querySelector('search-input');
const searchButton = document.querySelector('search-button');
const weatherBar = document.querySelector('weather-bar');
const cityName = document.querySelector('city-name');
const temperature = document.querySelector('temperature');
const description = document.querySelector('description');
const humidity = document.querySelector('humidity');
const windSpeed = document.querySelector('wind-speed');
const weekForecast = document.querySelector('week-weather-list');
const errorCity = document.getElementById('error');

const API_KEY = '8692f6c7bd3d65b837fd53f602431d16';
const URL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';



async function fetchWeather(city) {
    try {
        const response =  await axios.get(URL);
        const data = response.data;
        displayWeatherData(data);
    } catch (error) {
        errorElement.textContent = 'City not found or API error. Please try again.';
    console.error('Error fetching weather data:', error);
    };
   };



