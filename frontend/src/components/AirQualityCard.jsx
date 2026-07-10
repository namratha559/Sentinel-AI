function AirQualityCard({ data }) {

    if (!data || !data.air_quality) return null;

    const aqiText = {
        1: "Good",
        2: "Fair",
        3: "Moderate",
        4: "Poor",
        5: "Very Poor"
    };

    return (
        <div>
            <h2>🌫 Air Quality</h2>

            <p><strong>AQI:</strong> {data.air_quality.aqi} ({aqiText[data.air_quality.aqi]})</p>

            <p><strong>PM2.5:</strong> {data.air_quality.pm2_5}</p>

            <p><strong>PM10:</strong> {data.air_quality.pm10}</p>
        </div>
    );
}

export default AirQualityCard;