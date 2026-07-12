# 🛰️ Sentinel AI

Sentinel AI is a disaster intelligence web application that helps users monitor weather conditions and identify possible disaster risks using AI. Users can search for a city or simply click anywhere on the interactive map to view live weather information and risk analysis.

## Features

- 🌍 Interactive world map
- 📍 Click any location to view weather
- 🌦️ Live weather details
- 🌡️ Temperature, humidity and wind speed
- 🤖 AI-based Flood, Fire and Heatwave risk analysis
- 🌫️ Air Quality Index (AQI)
- 📅 7-day weather forecast
- 📊 Weather charts
- 🌍 NASA disaster events
- 🛰️ Street and Satellite map view

## Tech Stack

### Frontend
- React.js
- Vite
- React Leaflet
- Chart.js
- Axios

### Backend
- FastAPI
- Python
- SQLAlchemy
- SQLite

## APIs Used

- OpenWeather API
- OpenWeather Air Pollution API
- NASA EONET API
- OpenStreetMap
- Esri World Imagery

## Project Structure

```
Sentinel-AI
│
├── backend
├── frontend
└── README.md
```

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/Sentinel-AI.git
```

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder.

```env
OPENWEATHER_API_KEY=YOUR_API_KEY
PLANET_API_KEY=YOUR_API_KEY
```

## Future Improvements

- Live disaster alerts
- PDF report generation
- User authentication
- Historical weather analysis
- Machine learning based disaster prediction
