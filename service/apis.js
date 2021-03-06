
const axios = require('axios');

const urlRandomUsers = 'https://randomuser.me/api/';
const urlWeather = 'http://api.openweathermap.org/data/2.5/weather';
// https://openweathermap.org/api
const weatherapikey = "xxx";

const getRandomUsers = (callback) => {
    axios.get(`${urlRandomUsers}/?results=10`, {
        headers: {'Content-Type': 'application/json'}
    }).then((res) => callback(res.data.results))
    .catch( (err) => callback({error: err}))
}

const getWeather = (callback) => {
    axios.get(`${urlWeather}/?q=London&units=imperial&appid=${weatherapikey}`, {
        headers: {'Content-Type': 'application/json'}
    }).then((res) => callback(res.data))
    .catch( (err) => callback({error: err}))
}


module.exports = {
    getRandomUsers,
    getWeather
}