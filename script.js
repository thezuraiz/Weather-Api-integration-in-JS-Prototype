let lahoreApi = fetch("https://api.open-meteo.com/v1/forecast?latitude=31.5204&longitude=74.3587&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m");
let khiApi = fetch("https://api.open-meteo.com/v1/forecast?latitude=24.86&longitude=67.001&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m");
let quettaApi = fetch("https://api.open-meteo.com/v1/forecast?latitude=30.17&longitude=66.97&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m");
let pshApi = fetch("https://api.open-meteo.com/v1/forecast?latitude=34.01&longitude=71.52&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m");
let islApi = fetch("https://api.open-meteo.com/v1/forecast?latitude=33.68&longitude=73.0479&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m");
let mltApi = fetch("https://api.open-meteo.com/v1/forecast?latitude=30.15&longitude=71.52&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m");

let cities = [lahoreApi, khiApi, quettaApi, pshApi, islApi,mltApi];
let i = 0;

cities.map((x) => {
  x.then((response) => {
    return response.json();
  }).then((result) => {
    console.log(result);
    document.getElementsByClassName("temp")[i].innerHTML += ` ${result.current_weather.temperature} C`;
    document.getElementsByClassName("wind")[i].innerHTML += ` ${result.current_weather.windspeed} Km/h`;
    document.getElementsByClassName("img")[i].src =`${result.current_weather.temperature<32? "https://coalregioncanary.com/wp-content/uploads/2020/08/summer.gif": "https://cdn.dribbble.com/users/93925/screenshots/14245026/media/22e55f25c832ff423c88d93cda1edc0c.gif"}`
    i++;
  });
});

