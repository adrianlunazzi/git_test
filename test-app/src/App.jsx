import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Spinner } from './Components/Spinner/Spinner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Spinner/>
    </div>
  )
}

export default App
