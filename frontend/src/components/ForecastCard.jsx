function ForecastCard({ data }) {

    if (!data || !data.forecast) return null;

    return (

        <div>

            <h2>📅 7-Day Forecast</h2>

            {data.forecast.map((day, index) => (

                <div
                    key={index}
                    style={{
                        borderBottom: "1px solid #ddd",
                        padding: "10px 0"
                    }}
                >

                    <h4>{day.date}</h4>

                    <p>🌡 Max : {day.max_temp} °C</p>

                    <p>❄ Min : {day.min_temp} °C</p>

                    <p>🌧 Rain : {day.rain_probability}%</p>

                </div>

            ))}

        </div>

    )

}

export default ForecastCard;