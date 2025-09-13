const options = {
  method: 'GET',
  url: 'https://yahoo-weather5.p.rapidapi.com/weather',
  params: {
    location: 'Pune',
    format: 'json',
    u: 'c'
  },
  headers: {
    'x-rapidapi-key': '0c8ed3b71amsh35f6a4b5c6194b9p10fc56jsn8b422255acb6',
    'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
  }
};

function getdata() {
  const city = document.getElementById("input11").value || "Pune";
  options.params.location = city;

  axios.request(options).then(function (response) {
    const data = response.data;

    const val1 = data.location.city;
    const temp = data.current_observation.condition.temperature;
    const hum = data.current_observation.atmosphere.humidity;
    const weather = data.current_observation.condition.text;
    const sunrise = data.current_observation.astronomy.sunrise;
    const sunset = data.current_observation.astronomy.sunset;

   document.getElementById("city").innerHTML = val1;
    document.getElementById("temp").innerHTML = temp + "°C";
    document.getElementById("hum").innerHTML = hum + "%";
    document.getElementById("weather").innerHTML = weather;
    document.getElementById("sunrise").innerHTML = sunrise;
    document.getElementById("sunset").innerHTML = sunset;

    // Change background video depending on weather
    let bgVideo = document.getElementById("bg-video");
    if (weather.toLowerCase().includes("cloud")) {
      bgVideo.src = "images/cloudy.mp4";
    } else if (weather.toLowerCase().includes("rain")) {
      bgVideo.src = "images/shower.mp4";
    } else if (weather.toLowerCase().includes("scattered")) {
      bgVideo.src = "images/scattered.mp4";
    } else {
      bgVideo.src = "images/clear.mp4"; // default
    }
    bgVideo.play();

  }).catch(function (error) {
    console.error(error);
  });
}

// Allow Enter key to trigger search
document.getElementById("input11").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // prevent accidental form submission
    getdata(); // run same function as button
  }
});
