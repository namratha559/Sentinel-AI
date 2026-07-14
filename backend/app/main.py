from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.database import engine
from app.database.database import Base
from app.models.weather_history import WeatherHistory
from app.routers.weather import router as weather_router
from app.routers.root import router as root_router
from app.routers.health import router as health_router
Base.metadata.create_all(bind=engine)
app = FastAPI(title="Sentinel AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(root_router)
app.include_router(health_router)
app.include_router(weather_router)