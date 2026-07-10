from sqlalchemy.orm import Session
from app.models.weather_history import WeatherHistory


def save_weather(db: Session, weather_data: dict):

    weather = WeatherHistory(

        city=weather_data["city"],

        latitude=weather_data["latitude"],

        longitude=weather_data["longitude"],

        temperature=weather_data["temperature"],

        humidity=weather_data["humidity"],

        weather=weather_data["weather"],

        flood_risk=weather_data["risks"]["flood"],

        fire_risk=weather_data["risks"]["fire"],

        heatwave_risk=weather_data["risks"]["heatwave"],

        summary=weather_data["summary"]

    )

    db.add(weather)

    db.commit()

    db.refresh(weather)

    return weather


def get_history(db: Session):

    return db.query(WeatherHistory).all()