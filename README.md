# 🛰️ Sentinel AI

Sentinel AI is an AI-powered disaster intelligence platform that helps users monitor weather conditions and analyze potential disaster risks in real time. Users can either search for a city or simply click anywhere on the interactive map to get live weather information, air quality, forecasts, and AI-generated disaster risk analysis.

---

## 🚀 Features

- 🌍 Interactive world map
- 📍 Click anywhere on the map to get weather details
- 🌦️ Real-time weather information
- 🌡️ Temperature, humidity, wind speed, and weather conditions
- 🤖 AI-based Flood, Fire, and Heatwave risk prediction
- 🌫️ Air Quality Index (AQI), PM2.5, and PM10 monitoring
- 📅 7-day weather forecast
- 📊 Interactive weather charts
- 🌍 Live NASA disaster events
- 🛰️ Street and Satellite map view
- ⚡ Fast and responsive user interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Leaflet
- Chart.js
- Axios
- CSS

### Backend
- FastAPI
- Python
- SQLAlchemy
- SQLite

---

## 🌐 APIs Used

- OpenWeather API
- OpenWeather Air Pollution API
- NASA EONET API
- OpenStreetMap
- Esri World Imagery

---

## 📂 Project Structure

```
Sentinel-AI
│
├── backend
│   ├── app
│   ├── requirements.txt
│   └── weather.db
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/namratha559/Sentinel-AI.git
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python -m uvicorn app.main:app --reload
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `backend` folder and add:

```env
OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
PLANET_API_KEY=YOUR_PLANET_API_KEY
```

---

## 📌 Future Improvements

- Live disaster alerts and notifications
- Downloadable PDF disaster reports
- User authentication
- Historical weather analytics
- Machine Learning based disaster prediction
- Disaster hotspot visualization
- Mobile-friendly responsive interface

---

## 📷 Screenshots

You can add screenshots of your application here.

- Dashboard
- Interactive Map
- Weather Analysis
- Satellite View
- NASA Disaster Events

---

## ⭐ Acknowledgements

This project uses publicly available APIs from OpenWeather, NASA EONET, OpenStreetMap, and Esri to provide real-time weather and disaster-related information.