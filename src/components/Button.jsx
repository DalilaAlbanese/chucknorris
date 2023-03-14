import React from "react" //chiammiamo react
import '../styles/Button.css'//importa il css

const Button =({text, type, action})=>{
    return (
        <button  className={`btn btn-${type}`} onClick={action}>
            <h3>{text}</h3>
        </button>
    )
}
export default Button