import React, { useContext } from 'react'
import { WeatherContext } from './ContextAPI'

const Input = () => {

const {inputRef, fetchWeather} = useContext(WeatherContext)


  return (
      <div className='w-96 p-4'>
        <div className="flex items-center justify-between gap-4">
        <input 
        type="text" 
        placeholder='Enter Your Location' 
        className='text-xl border-b p-1 border-grey-200 font-semibold uppercase flex-1'
        ref={inputRef}
        /> 
        <button onClick={fetchWeather}>
            <img src="https://cdn-icons-png.flaticon.com/512/758/758651.png" alt="search" 
            className='w-8'
            />
        </button>
        </div>
        </div>
  )
}

export default Input
