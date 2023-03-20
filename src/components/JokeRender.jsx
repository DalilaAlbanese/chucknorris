import React from 'react'
import '../styles/JokeRender.css'

const JokeRender = ({joke}) => {
  return (
    <p className='jokeBox'>{joke}</p>
  )
}

export default JokeRender