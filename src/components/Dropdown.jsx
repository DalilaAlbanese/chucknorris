import React from "react" //chiammiamo react
import '../styles/Dropdown.css'
const Dropdown =()=>{
    return (
        <select name="cars" className='menu'>   
        <option value="volvo">Volvo</option>   
        <option value="saab">Saab</option>   
        <option value="mercedes">Mercedes</option>   
        <option value="audi">Audi</option> 
        </select>
    )
}
export default Dropdown