import React from "react" //chiammiamo react
import { useState } from 'react'
import '../styles/Dropdown.css'

const Dropdown =()=>{
    const [categories, setCategories] = useState([])
    function  getCategories(){
        fetch('https://api.chucknorris.io/jokes/categories').then(
          response => response.json()
        ).then(
          data=> {
            setCategories(data)
          }
        )
      }
    return (
        <select name="menu" className='menu' onClick={()=>getCategories()}>   
        {categories.map((category, index)=>(
            <option value={category} key={index}>{category}</option>
        ))}
        </select>
    )
}
export default Dropdown