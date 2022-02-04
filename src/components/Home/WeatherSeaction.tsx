import axios from "axios";
import { useEffect, useMemo, useState } from "react";


const { REACT_APP_WEATHER_API } = process.env

type WeatherType = {
  description? : string,
  id? : number,
  icon? : string,
  main? : string,
  temp? : number
}
const WeatherSeaction = () => {

  const [weather, setWeather] = useState<WeatherType>({})
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const weatherData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${REACT_APP_WEATHER_API}`);
      console.log(weatherData.data)
      setWeather({...weatherData.data.weather[0], temp : weatherData.data.main.temp});
    })

  }, []);

  const temperature = useMemo(() => {
    return weather.temp && Math.floor(weather.temp - 273.15) 
  }, [weather])
  return (
    <div className='weather'>
      <div className="weather-detail">
          <h2>Monday, 16 April</h2>
        <div className="weather-temp">
          <p className="fade">WEATHER</p>
          <h2 className="temp">{temperature} °C</h2>
        </div>
      </div>
      <img src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt='weather'/>

    </div>
  );
};

export default WeatherSeaction;
