import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(0)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGen = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()"

    for(let i = 1; i <= length; i++){
      const randCharIndex = Math.floor((Math.random() * str.length + 1))
      pass = str.charAt(randCharIndex)
    }
  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>
    <div className = "bg-gray-800 h-screen w-full flex items-center justify-center">
      
     
    </div>
     
    </>
  )
}

export default App
