import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import RiskCard from "./components/RiskCard";
import SummaryCard from "./components/SummaryCard";
import MapView from "./components/MapView";
import NasaEventsCard from "./components/NasaEventsCard";
import ForecastCard from "./components/ForecastCard";
import ChartCard from "./components/ChartCard";
import RainChart from "./components/RainChart";
import AirQualityCard from "./components/AirQualityCard";
import Loading from "./components/Loading";
import { getWeather } from "./api/weatherApi";
import { getWeatherByLocation } from "./api/locationApi";

function App() {
   const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);

  // Search weather by city
  const searchCity = async (city) => {
    try {
      const data = await getWeather(city);

      if (data.error) {
        alert(data.error);
        return;
      }

      setWeather(data);
    } catch (err) {
      console.error(err);
      alert("Unable to connect to backend");
    }
  };

  // Called when user clicks the map
  const mapClicked = async (lat, lon) => {

  setLoading(true);

  try {

    const data = await getWeatherByLocation(lat, lon);

    if (data.error) {
      setLoading(false);
      alert(data.error);
      return;
    }

    console.log("Map Weather:", data);

    setWeather(data);

    setLoading(false);

  } catch (err) {

    setLoading(false);

    console.error(err);

    alert("Unable to fetch weather for this location.");
  }
};
 

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h1>🌍 Sentinel AI Dashboard</h1>

        <p
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: "#555",
          }}
        >
          Click anywhere on the map to get live weather,
          
          AI risk analysis, AQI, forecast and NASA disaster data.
        </p>

        {/* Search Bar (Optional) */}
        {/* Uncomment if you want search by city */}
        {/* <SearchBar onSearch={searchCity} /> */}

        {/* Interactive Map */}
        <div className="card">
          <MapView
  data={weather}
  nasaEvents={weather?.nasa_events}
  onMapClick={mapClicked}
/>
        </div>
        {loading && <Loading />}

        {/* Weather Information */}
        {weather && (
          <>
            <div className="cards">

  <div className="card">
    <WeatherCard data={weather} />
  </div>

  <div className="card">
    <RiskCard data={weather} />
  </div>

  <div className="card">
    <AirQualityCard data={weather} />
  </div>

</div>
            <div className="card">
              <SummaryCard data={weather} />
            </div>

            

            <div className="card">
              <ForecastCard data={weather} />
            </div>

            <div className="card">
              <RainChart data={weather} />
            </div>

            <div className="card">
              <ChartCard data={weather} />
            </div>

            <div className="card">
              <NasaEventsCard data={weather} />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;