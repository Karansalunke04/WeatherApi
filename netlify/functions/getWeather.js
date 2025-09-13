import axios from "axios";

export async function handler(event, context) {
  const city = event.queryStringParameters.city || "Pune";

  try {
    const response = await axios.get("https://yahoo-weather5.p.rapidapi.com/weather", {
      params: { location: city, format: "json", u: "c" },
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY, // don’t hardcode, use Netlify env
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com"
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    console.error("Weather API Error:", error.message, error.response?.data);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message, details: error.response?.data })
    };
  }
}
