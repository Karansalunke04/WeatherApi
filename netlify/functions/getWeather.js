import axios from "axios";

export async function handler(event, context) {
  const city = event.queryStringParameters.city || "Pune";

  try {
    const response = await axios.get("https://yahoo-weather5.p.rapidapi.com/weather", {
      params: { location: city, format: "json", u: "c" },
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY, // stored in Netlify
        "x-rapidapi-host": "yahoo-weather5.p.rapidapi.com"
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
}
