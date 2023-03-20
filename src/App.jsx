import { useState } from 'react'
import './styles/App.css'
import Button from './components/Button.jsx'
import Dropdown from './components/Dropdown.jsx'
import JokeRender from './components/JokeRender'
function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")
  const [category,loadcategory] = useState([])
  const [selection, setSelection]= useState("")

  function  loadJoke(){
    fetch('').then(
      response => response.json()
    ).then(
      data=> {
        setJoke(data.value)
      }
    )
    
  }

  function handleChange(e){
      setSelection(e)
  }

  return (
    <div className="App">
        <Dropdown handle={handleChange}/>
        {joke != "" &&
        <JokeRender joke={joke} />

        }
        <Button  type='primary' text='CARICA JOKE'/> 
        <Button type='secondary' text='COPIA TESTO'/> 

    </div>
  )
}

export default App
