async function getdata() {
  const city = document.getElementById("input11").value;
  if (!city) {
    alert("Please enter a city");
    return;
  }

  try {
    const res = await fetch(`/.netlify/functions/getWeather?city=${city}`);
    const data = await res.json();

    if (data.error) {
      console.error("Weather API error:", data);
      alert("Weather API error: " + data.error);
      return;
    }

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

  } catch (err) {
    console.error("Fetch error:", err);
    alert("Failed to fetch weather");
  }
}
