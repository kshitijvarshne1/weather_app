import axios from "axios";

const API_KEY = ""; //9212fb81c520cab92fb2e4e63b1c1a29
const URL = "http://api.openweathermap.org/data/2.5/weather";

export const getWeather = async (city, country) => {
  const data = await axios.get(
    `${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`
  );
  return data;
};
