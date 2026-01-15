const apiKey = "863242cfb1d357e6093d9a4df19a4b";
const apiUrl =
  "https://apip.opemweatherapp.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey} `);
  var data = await response.json();

  console.log(data)
}

checkWeather();