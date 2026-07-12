import axios from "axios";

const API = "https://sentinel-ai-backend-pcvu.onrender.com/";

export const getWeather = async (city) => {
  const response = await axios.get(`${API}/weather?city=${city}`);
  return response.data;
};