function NasaEventsCard({ data }) {

    if (!data || !data.nasa_events) return null;

    return (
        <div>
            <h2>🌍 NASA Live Disaster Events</h2>

            {data.nasa_events.slice(0, 5).map((event, index) => (
                <div
                    key={index}
                    style={{
                        marginBottom: "12px",
                        padding: "10px",
                        borderRadius: "8px",
                        background: "#f8fafc"
                    }}
                >
                    <h4>{event.title}</h4>

                    <p>📂 {event.category}</p>

                    <p>📅 {event.date.substring(0,10)}</p>
                </div>
            ))}
        </div>
    );
}

export default NasaEventsCard;