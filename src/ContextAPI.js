import React, { createContext, useState, useRef } from 'react'
import { WeatherTypes } from './WeatherTypes'


export const WeatherContext = createContext(null)

const ContextAPI = (props) => {

    const Api_key = '5c86490ff1685b81ccc2dcc182a48a32'



  const inputRef = useRef(null)

  const [apiData, setApiData] = useState(null)

  const [showWeather, setShowWeather] = useState(null)

  const [loading, setLoading] = useState(false)

  

  const fetchWeather = async () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputRef.current.value}&units=metric&appid=${Api_key}`
    setLoading(true)

    try {
      let response = await fetch(URL)
      let data = await response.json()
      setApiData(null)
      if(data.cod == 404 || data.cod == 400) {
        setShowWeather([{
          type: 'Not Found',
          img: 'https://cdn-icons-png.flaticon.com/512/4275/4275497.png'
        }])
      }
      const myWeather = WeatherTypes.filter(weather => weather.type === data.weather[0].main)
      setShowWeather(myWeather)
      setApiData(data)
      setLoading(false)
      
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }



    const contextValue = {inputRef, fetchWeather, loading, apiData, showWeather}

  return (
    <WeatherContext.Provider value={contextValue}>
        {props.children}
    </WeatherContext.Provider>
  )
}

export default ContextAPI
