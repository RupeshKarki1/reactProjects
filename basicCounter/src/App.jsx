import './App.css'
import { useState, useEffect } from 'react';
function App() {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    console.log("Counter updated to:", counter);
  }, [counter]);

  function addValue(){
    if(counter >= 20){
      console.log("counter is greater than 20, resetting to 10");
      setCounter(10);
    }else{
      setCounter(counter + 1);
    }
  }

  function addValue5(){
    setCounter(counter + 5);
  }
  
  function addValue5(){
    setCounter(counter + 5);
  }
  function decreaseValue(){
    if(counter <= 0){
      console.log("counter is smaller than 0, setting counter to 0");
      setCounter(0);
    }else{
      setCounter(counter - 1);
    }
  }

  function resetValue(){
    setCounter(10);
    console.log("counter reset to 10");
  }

  return (
   <>
   <h1> Counter value: {counter} </h1>

   <button onClick={addValue}> Add value </button>
   <br />
   <button onClick={addValue5}> +5 </button>
   <br /> 


   <button onClick={decreaseValue}> Decrease value </button>
   <br />

   <button onClick={resetValue}> Reset </button>
   
   </>
  )
}

export default App
