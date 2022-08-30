import React from 'react'
import './button.scss'


const Button = ({children, buttonClassName, ...otherProps}) => {
  return (
    <button 
        className={`button-container ${buttonClassName}`}
        {...otherProps} 
    >
        {children}
    </button>
  )
}


export default Button