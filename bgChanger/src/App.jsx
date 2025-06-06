import './App.css'
import { useState } from 'react'

function App() {
  let [bgColor, setBgColor] = useState('white')

  return (
    <>  
    
      <div className='w-full h-screen duration-200 flex flex-wrap justify-center items-end'   
      style={{backgroundColor: bgColor}}>
        <button className='bg-black text-white p-2 rounded-md m-2 mb-5'
        onClick={() => setBgColor('black')}>Black</button>

        <br />

        <button className='bg-white text-black p-2 rounded-md m-2 mb-5'
         onClick={() => setBgColor('white')}>White</button>
        
        <br />

        <button className='bg-blue-200 text-black p-2 rounded-md m-2 mb-5'
         onClick={() => setBgColor('oklch(88.2% 0.059 254.128)')}>Ice Blue</button>
        
        <br />

        <button className='bg-yellow-400 text-violet-700 p-2 rounded-md m-2 mb-5'
         onClick={() => setBgColor('oklch(85.2% 0.199 91.936)')}>Golden</button>
         
      </div>
     
    </>
  )
}

export default App
