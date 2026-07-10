import requests

from app.config import OPENWEATHER_API_KEY
from app.services.risk_service import calculate_risks
from app.services.forecast_service import get_forecast
from app.services.nasa_service import get_nasa_events
from app.services.satellite_image_service import get_satellite_image
from app.services.air_quality_service import get_air_quality

BASE_URL = "https://api.openweathermap.org/data/2.5/weather"


# --------------------------------------------
# Get weather using city name
# --------------------------------------------
def get_weather(city: str):

    params = {
        "q": city,
        "appid": OPENWEATHER_API_KEY,
        "units": "metric"
    }

    response = requests.get(BASE_URL, params=params)

    if response.status_code != 200:
        return {
            "error": "Unable to fetch weather"
        }

    data = response.json()

    temperature = data["main"]["temp"]
    humidity = data["main"]["humidity"]
    weather = data["weather"][0]["main"]

    risks = calculate_risks(
        temperature,
        humidity,
        weather
    )

    latitude = data["coord"]["lat"]
    longitude = data["coord"]["lon"]

    forecast = get_forecast(latitude, longitude)

    nasa_events = get_nasa_events()

    satellite_image = get_satellite_image(latitude, longitude)

    air_quality = get_air_quality(latitude, longitude)

    return {
        "city": data["name"],
        "latitude": latitude,
        "longitude": longitude,
        "temperature": temperature,
        "humidity": humidity,
        "weather": weather,
        "wind_speed": data["wind"]["speed"],
        "forecast": forecast,
        "air_quality": air_quality,
        "satellite_image": satellite_image,
        "nasa_events": nasa_events,
        "risks": {
            "flood": risks["flood"],
            "fire": risks["fire"],
            "heatwave": risks["heatwave"]
        },
        "summary": risks["summary"]
    }


# --------------------------------------------
# Get weather using latitude & longitude
# --------------------------------------------
def get_weather_by_location(lat: float, lon: float):

    params = {
        "lat": lat,
        "lon": lon,
        "appid": OPENWEATHER_API_KEY,
        "units": "metric"
    }

    response = requests.get(BASE_URL, params=params)

    if response.status_code != 200:
        return {
            "error": "Unable to fetch weather"
        }

    data = response.json()

    temperature = data["main"]["temp"]
    humidity = data["main"]["humidity"]
    weather = data["weather"][0]["main"]

    risks = calculate_risks(
        temperature,
        humidity,
        weather
    )

    forecast = get_forecast(lat, lon)

    nasa_events = get_nasa_events()

    satellite_image = get_satellite_image(lat, lon)

    air_quality = get_air_quality(lat, lon)

    return {
        "city": data["name"],
        "latitude": lat,
        "longitude": lon,
        "temperature": temperature,
        "humidity": humidity,
        "weather": weather,
        "wind_speed": data["wind"]["speed"],
        "forecast": forecast,
        "air_quality": air_quality,
        "satellite_image": satellite_image,
        "nasa_events": nasa_events,
        "risks": {
            "flood": risks["flood"],
            "fire": risks["fire"],
            "heatwave": risks["heatwave"]
        },
        "summary": risks["summary"]
    }