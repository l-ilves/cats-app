import React from 'react'
import '../../styles/global.css'


const Button = (props) => {
    return (
        <button className="bttn" onClick={props.generateNewFact}>{props.bttnTitle}</button> 
    )
}

// props for func as well

export default Button