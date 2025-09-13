import axios from "axios";

export async function handler(event, context) {
  const city = event.queryStringParameters.city || "Pune";

  try {
    const response = await axios.get("https://yahoo-weather5.p.rapidapi.com/weather", {
      params: { location: city, format: "json", u: "c" },
      headers: {
        'x-rapidapi-key': '0c8ed3b71amsh35f6a4b5c6194b9p10fc56jsn8b422255acb6', // stored in Netlify
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
