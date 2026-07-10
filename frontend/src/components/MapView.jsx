import { useState, useEffect } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";

function ClickHandler({ onMapClick }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;

      console.log("Clicked:", lat, lng);

      if (onMapClick) {
        onMapClick(lat, lng);
      }
    },
  });

  return null;
}

function ChangeMapView({ center }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, 8, {
      animate: true,
      duration: 2,
    });
  }, [center, map]);

  return null;
}

function MapView({ data, nasaEvents, onMapClick }) {
  const latitude = data?.latitude || 20.5937;
  const longitude = data?.longitude || 78.9629;
  const city = data?.city || "Click anywhere";

  const [satellite, setSatellite] = useState(false);

  return (
    <div>
      <h2>🗺 Interactive Map</h2>

      <div
        style={{
          marginBottom: "15px",
          textAlign: "right",
        }}
      >
        <button
          onClick={() => setSatellite(!satellite)}
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "#2563eb",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {satellite ? "🗺 Street Map" : "🛰 Satellite View"}
        </button>
      </div>

      <MapContainer
        center={[latitude, longitude]}
        zoom={5}
        style={{
          height: "500px",
          width: "100%",
          borderRadius: "12px",
        }}
      >
        <TileLayer
          attribution={
            satellite
              ? "Tiles © Esri"
              : "© OpenStreetMap contributors"
          }
          url={
            satellite
              ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          }
        />

        <ChangeMapView
          center={[latitude, longitude]}
        />

        <Marker position={[latitude, longitude]}>
          <Popup>{city}</Popup>
        </Marker>

        {nasaEvents &&
          nasaEvents.map((event, index) => {
            if (!event.latitude || !event.longitude) return null;

            return (
              <Marker
                key={index}
                position={[event.latitude, event.longitude]}
              >
                <Popup>
                  <h3>{event.title}</h3>

                  <p>
                    <strong>Category:</strong> {event.category}
                  </p>

                  <p>
                    <strong>Date:</strong>{" "}
                    {event.date.substring(0, 10)}
                  </p>
                </Popup>
              </Marker>
            );
          })}

        <ClickHandler onMapClick={onMapClick} />
      </MapContainer>
    </div>
  );
}

export default MapView;