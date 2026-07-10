import requests
from app.config import OPENWEATHER_API_KEY

def get_air_quality(lat, lon):

    url = (
        f"https://api.openweathermap.org/data/2.5/air_pollution"
        f"?lat={lat}&lon={lon}&appid={OPENWEATHER_API_KEY}"
    )

    response = requests.get(url)

    if response.status_code != 200:
        return None

    data = response.json()["list"][0]

    return {

        "aqi": data["main"]["aqi"],

        "pm2_5": data["components"]["pm2_5"],

        "pm10": data["components"]["pm10"]

    }