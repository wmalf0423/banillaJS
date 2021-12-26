const API_KEY = "23430b96068295e77faccef2e4022701";
const divWeather = document.querySelector("#weather ul");
function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(Response => Response.json())
        .then((data) => {
            const weather = document.createElement("li");
            const city = document.createElement("li");
            const temperature = document.createElement("li");
            city.innerText = data.name;
            weather.innerText = data.weather[0].main;
            temperature.innerText = `${data.main.temp}°C`;
            divWeather.appendChild(weather);
            divWeather.appendChild(temperature);
            divWeather.appendChild(city);
        });
}
function onGeoError(){
    alert("Can't do that");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);