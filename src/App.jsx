import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")
  const [category,loadcategory] = useState([])

  function  loadJoke(){
    fetch('').then(
      response => response.json()
    ).then(
      data=> {
        setJoke(data.value)
      }
    )
    
  }

  return (
    <div className="App">
  
    </div>
  )
}

export default App
