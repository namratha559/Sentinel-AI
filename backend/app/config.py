import os
from dotenv import load_dotenv

load_dotenv()


APP_NAME = os.getenv("APP_NAME")
APP_VERSION = os.getenv("APP_VERSION")


OPENWEATHER_API_KEY = os.getenv("OPENWEATHER_API_KEY")
PLANET_API_KEY = os.getenv("PLANET_API_KEY")