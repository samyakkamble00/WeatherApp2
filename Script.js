const api = {
    key: "199c829e78383992c970be11cbef4a25",
    base: "https://api.openweathermap.org/data/2.5/"
};

const searchBox = document.querySelector("#searchCity");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather() {
    const city = searchBox.value;
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "<sup>o</sup>c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        })
        .catch((e) => console.log("error"));
}

searchBtn.addEventListener("click", () => {
    // console.log("clicked search btn");
    checkWeather();
});