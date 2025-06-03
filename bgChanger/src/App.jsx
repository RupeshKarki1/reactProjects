import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('white')
  
  return (
    <>  
      <button className='bg-black text-white p-2 rounded-md m-2' onClick={() => setBgColor('black')}>Black</button>
      <br />
      <button className='bg-white text-black p-2 rounded-md m-2' onClick={() => setBgColor('white')}>White</button>
    </>
  )
}

export default App
