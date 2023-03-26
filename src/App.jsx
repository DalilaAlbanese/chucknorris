import { useState } from 'react'
import './styles/App.css'
import Button from './components/Button.jsx'
import Dropdown from './components/Dropdown.jsx'
import JokeRender from './components/JokeRender'
import logoChuck from '../public/logo.svg'
function App() {
  const [count, setCount] = useState(0)
  const [joke, setJoke] = useState("")
  const [category,loadcategory] = useState([])
  const [selection, setSelection]= useState("")

  function  loadJoke(){
    if(selection != ""){
    let url = `https://api.chucknorris.io/jokes/random?category=${selection}`
    let promise = fetch(url)

    promise.then(
      response => response.json()
    ).then(
      data => setJoke(data.value)
    ) 
  }else{
    let url = `https://api.chucknorris.io/jokes/random`
    let promise = fetch(url)

    promise.then(
      response => response.json()
    ).then(
      data => setJoke(data.value)
    ) 

  }
}

function copy(){
  if(joke != ""){
    navigator.clipboard.writeText(joke)
    alert("Il testo è stato copiato")
  }
}

  function handleChange(e){
      setSelection(e)
  }

  return (
    <div className="App">
        <h1 id='title'>Webapp API Chuck Norris</h1>
        <p id='p'>Design di una pagina che utilizza la API di chucknorris.io per generare alla pressione di <br /> un pulsante una battuta del tipo che selezioni nel menu a tendina qui sotto.</p>
        <img id="img" src={logoChuck}/>
        <Dropdown handle={handleChange}/>
        {joke != "" &&
        <JokeRender joke={joke} />

        }
        <Button  type='primary' text='CARICA JOKE' action={()=>loadJoke()}/> 
        <Button type='secondary' text='COPIA TESTO' action={copy}/> 

    </div>
  )
}

export default App
