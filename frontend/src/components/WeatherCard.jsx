function WeatherCard({ data }) {
  if (!data) return null;

  return (
    <div>
      <h2>{data.city}</h2>

      <h3>{data.temperature} °C</h3>

      <p>Humidity : {data.humidity}%</p>

      <p>Weather : {data.weather}</p>

      <p>Wind : {data.wind_speed}</p>
    </div>
  );
}

export default WeatherCard;