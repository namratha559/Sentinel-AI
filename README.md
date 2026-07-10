# 🛰️ Sentinel AI – Disaster Intelligence Platform

Sentinel AI is an AI-powered disaster intelligence platform that provides real-time weather monitoring, air quality analysis, disaster risk prediction, and NASA disaster event visualization through an interactive map.

Users can either search for a city or simply click anywhere on the world map to instantly receive detailed environmental information and AI-generated risk analysis.

---

# 🚀 Features

## 🌍 Interactive World Map
- Click anywhere on the map to analyze that location
- Automatic weather retrieval using latitude & longitude
- Smooth map navigation
- Marker updates to selected location

## 🌦️ Real-Time Weather
- Current temperature
- Humidity
- Wind speed
- Weather condition

Powered by OpenWeather API.

---

## 🤖 AI Disaster Risk Analysis

Sentinel AI predicts:

- 🌊 Flood Risk
- 🔥 Fire Risk
- 🌡️ Heatwave Risk

and generates an AI-based disaster summary.

---

## 🌫️ Air Quality Monitoring

Displays:

- AQI
- PM2.5
- PM10

using OpenWeather Air Pollution API.

---

## 📅 7-Day Weather Forecast

Shows:

- Maximum Temperature
- Minimum Temperature
- Rain Probability

---

## 📈 Weather Charts

Interactive charts for:

- Temperature
- Rain Probability

using Chart.js.

---

## 🌍 NASA Disaster Events

Displays live disaster events from NASA EONET including:

- Wildfires
- Severe Storms
- Volcanoes
- Floods

---

## 🛰️ Satellite View

Switch between:

- 🗺️ Street Map
- 🛰️ Satellite View

using Esri World Imagery.

---

## ⚡ Loading Animation

Provides a loading indicator while fetching live weather and AI analysis.

---

## 💾 Database Support

Stores weather search history using SQLite and SQLAlchemy.

---

# 🛠️ Technologies Used

## Frontend

- React.js
- Vite
- React Leaflet
- Chart.js
- Axios
- CSS

## Backend

- FastAPI
- Python
- SQLAlchemy
- SQLite
- Requests

---

# 🌐 APIs Used

- OpenWeather API
- OpenWeather Air Pollution API
- NASA EONET API
- OpenStreetMap
- Esri Satellite Tiles

---

# 📂 Project Structure

```
Sentinel-AI/
│
├── backend/
│   ├── app/
│   │   ├── routers/
│   │   ├── services/
│   │   ├── database/
│   │   ├── models/
│   │   └── config.py
│   ├── weather.db
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/Sentinel-AI.git
```

---

## Backend

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run server

```bash
python -m uvicorn app.main:app --reload
```

---

## Frontend

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```env
OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
PLANET_API_KEY=YOUR_PLANET_API_KEY
```

---

# 📸 Screenshots

Add screenshots here.

- Dashboard
- Interactive Map
- Weather Analysis
- NASA Events
- Satellite View

---

# 🎯 Future Enhancements

- Live disaster hotspot markers
- AI disaster score
- PDF disaster report generation
- Weather alerts & notifications
- User authentication
- Historical weather analytics
- Machine Learning based disaster prediction

---

# 👨‍💻 Author

**Srinidhi T G**

B.E. Computer Science & Engineering (AI & ML)

Maharaja Institute of Technology Thandavapura

---

# ⭐ Support

If you like this project, please give it a ⭐ on GitHub!