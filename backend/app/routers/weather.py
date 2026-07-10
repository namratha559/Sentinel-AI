from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.crud import save_weather, get_history
from app.database.database import get_db

from app.services.weather_service import (
    get_weather,
    get_weather_by_location
)

router = APIRouter()


# ----------------------------
# Search weather by city
# ----------------------------
@router.get("/weather")
def weather(city: str, db: Session = Depends(get_db)):

    data = get_weather(city)

    if "error" in data:
        return data

    save_weather(db, data)

    return data


# ----------------------------
# Search weather by coordinates
# ----------------------------
@router.get("/weather/location")
def weather_location(
    lat: float,
    lon: float,
    db: Session = Depends(get_db)
):

    data = get_weather_by_location(lat, lon)

    if "error" in data:
        return data

    save_weather(db, data)

    return data


# ----------------------------
# Weather History
# ----------------------------
@router.get("/history")
def history(db: Session = Depends(get_db)):

    history = get_history(db)

    return [
        {
            "city": item.city,
            "temperature": item.temperature,
            "humidity": item.humidity,
            "weather": item.weather,
            "flood_risk": item.flood_risk,
            "fire_risk": item.fire_risk,
            "heatwave_risk": item.heatwave_risk
        }
        for item in history
    ]