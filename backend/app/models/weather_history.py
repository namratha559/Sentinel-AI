from sqlalchemy import Column, Integer, String, Float

from app.database.database import Base


class WeatherHistory(Base):
    __tablename__ = "weather_history"

    id = Column(Integer, primary_key=True, index=True)

    city = Column(String)

    latitude = Column(Float)

    longitude = Column(Float)

    temperature = Column(Float)

    humidity = Column(Integer)

    weather = Column(String)

    flood_risk = Column(String)

    fire_risk = Column(String)

    heatwave_risk = Column(String)

    summary = Column(String)