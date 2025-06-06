import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passRef = useRef(null)

  const passwordGen = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()"

    for(let i = 1; i <= length; i++){
      const randCharIndex = Math.floor((Math.random() * str.length))
      pass += str.charAt(randCharIndex)
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed])

  const copyPass = useCallback(()=>{
    passRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=> {
    passwordGen()
  }, [length, numAllowed, charAllowed, passwordGen])
  return (
    <> 
      <div className="bg-[#FCFFC4] w-full max-w-md mx-auto my-10 py-5 px-5 shadow-md text-[#000000] rounded-lg">
        
        <h1 className='text-black text-center font-bold text-xl mb-3'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
           type="text"
           value={password}
           placeholder='password'
           className='outline-none w-full py-1 px-3 bg-white'
           readOnly
           ref={passRef}
          />

          <button className='outline-none bg-[#C7C4FF] px-3 py- 0.5 shrink-0'
          onClick={copyPass}
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
             type="range"
             min={6}
             max={50}
             value={length}
             className='cursor-pointer'
             onChange={(e)=>{
              setLength(Number(e.target.value)) 
             }}   
            />
            <label htmlFor="rangeSlider">Length:{length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
             <input 
              type="checkbox"
              defaultChecked = {numAllowed}
              id="numberInput"
              onChange={()=>{
                setNumAllowed((prev)=>!prev)
             }}
             />
             <label htmlFor="numCheckBox">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
             <input 
              type="checkbox"
              defaultChecked = {charAllowed}
              id="charInput"
              onChange={()=>{
                setCharAllowed((prev)=>!prev)
             }}
             />
             <label htmlFor="charCheckBox">Characters</label>
          </div>
        </div>
      
      </div> 
    </>
  )
}

export default App
