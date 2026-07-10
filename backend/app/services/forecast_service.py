import requests

def get_forecast(latitude, longitude):

    url = (
        f"https://api.open-meteo.com/v1/forecast"
        f"?latitude={latitude}"
        f"&longitude={longitude}"
        f"&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max"
        f"&timezone=auto"
    )

    response = requests.get(url)

    if response.status_code != 200:
        return {"error": "Unable to fetch forecast"}

    data = response.json()

    forecast = []

    days = data["daily"]["time"]

    max_temp = data["daily"]["temperature_2m_max"]

    min_temp = data["daily"]["temperature_2m_min"]

    rain = data["daily"]["precipitation_probability_max"]

    for i in range(len(days)):

        forecast.append({

            "date": days[i],

            "max_temp": max_temp[i],

            "min_temp": min_temp[i],

            "rain_probability": rain[i]

        })

    return forecast