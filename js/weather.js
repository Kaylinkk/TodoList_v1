const API_KEY = "9a4bc0fc6b1c8eeea6cdd9a84c358340"

function onGeoOk(position){
    const lat= position.coords.latitude;
    const lon= position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
fetch(url)
.then((response) => response.json() // with using fetch, we can accessing and manipulating parts of the HTTP pipleline. 
.then((data)=>{
    const weather = document.querySelector("#weather div:nth-child(1)");
    const temp = document.querySelector("#weather div:nth-child(2)")
    const city = document.querySelector("#weather div:nth-child(3)");
    city.innerText = data.name;
    weather.innerText = data.weather[0].main;
    temp.innerText = data.main.temp;
}));
}
function onGeoError(){
    alert("can't find you :( Try again");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);//success, error