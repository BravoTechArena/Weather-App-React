import './index.css'
import React from 'react'
import Input from './Input'
import Weather from './Weather'
import ContextAPI from './ContextAPI'


function App() {
  return (
    <ContextAPI>
        <div className="bg-gray-800 h-screen grid place-items-center">
          <div className='bg-white pb-3 rounded-md'>
              <Input />
              <Weather />
            </div>
        </div>
    </ContextAPI>
  );
}

export default App;
