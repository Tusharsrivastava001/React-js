import { useState,useEffect } from "react";
import axios from 'axios';

import './style.css'
function App(){
  const [city,setcity]=useState('');
  const [weather,setweather]=useState(null);
  const API_KEY = "1f1f2fa4635d0ef422305f41d6cc8d32";

  useEffect(()=>{
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then((res)=>setweather(res.data))
    .catch((err)=>console.log("EROOR AYa: ",err));
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  //   .then((res)=>{
  //   if(!res.ok) throw new Error("Networkn erroor");
  //   return res.json()
  // })
  //   .then((data)=>setweather(data))
  //   .then((err)=>console.log(err))
  },[city]);
  return(
    <div className="app">
        <h2 id="title">Weather app</h2>
        <input type="text" value={city} placeholder="Enter your city name" id="inp" onChange={(e)=>{
          setcity(e.target.value);
        }}/>

        <div className="box">
          {weather && weather.main ? (
            <>
            <h3>{weather.name}</h3>
            <p>Temparature:  {weather.main.temp} `c</p>
            <p>Weather: {weather.weather[0].main}</p>
            </>
          )
          : "loading weather or invalid city"}
        </div>
    </div>
  );
}
export default App;