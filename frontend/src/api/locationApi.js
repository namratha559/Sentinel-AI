import axios from "axios";

const API = "http://127.0.0.1:8000";

export const getWeatherByLocation = async (lat, lon) => {

    const response = await axios.get(
        `${API}/weather/location?lat=${lat}&lon=${lon}`
    );

    return response.data;
};
