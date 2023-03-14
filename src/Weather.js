import React, { useContext } from 'react'
import { WeatherContext } from './ContextAPI'

const Weather = () => {

  const {loading, showWeather, apiData } = useContext(WeatherContext)

  return (
   <div className={`duration-300 delay-75 overflow-hidden ${showWeather ? 'h-[27rem]' : 'h-0'}}`}>
         {
            loading ? (
              <div className='grid place-items-center h-full'>
                <img 
                src="https://cdn-icons-png.flaticon.com/512/1477/1477009.png" 
                alt="..." 
                className='w-14 mx-auto mb-2 animate-spin'
                />
              </div>
            ) : (
              
                showWeather && 
                (
                  <div className='text-center flex flex-col gap-6 mt-10'>
                    {
                      apiData && 
                      (
                        <p className='text-xl font-semibold'>
                            {apiData?.name + ', ' + apiData?.sys.country}
                        </p>
                      )
                    }
               
                <img 
                src={showWeather[0]?.img} 
                alt="..." 
                className='w-52 mx-auto'/>
                <h3 className='text=2xl font-bold text-zinc-800'>
                    {showWeather[0]?.type}
                </h3>
               {
                apiData &&
                (
                  <>
                  <div className='flex justify-center'>
                      <img 
                        src="https://cdn-icons-png.flaticon.com/128/1684/1684375.png" 
                        alt="..." 
                        className='h-9 mt-1'
                      />
                      <h2 className='text-4xl font-extrabold'>
                        
                        {
                          apiData?.main?.temp
                        } &#176;C
                      </h2>
                  </div>
                </>
                )
               }
              </div>
                )             
            )}
   </div>
  )
}

export default Weather
