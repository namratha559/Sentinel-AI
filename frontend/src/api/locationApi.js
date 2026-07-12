import axios from "axios";

const API = "https://sentinel-ai-backend-pcvu.onrender.com/";

export const getWeatherByLocation = async (lat, lon) => {

    const response = await axios.get(
        `${API}/weather/location?lat=${lat}&lon=${lon}`
    );

    return response.data;
};
