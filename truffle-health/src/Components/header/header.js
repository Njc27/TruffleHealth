import React from 'react'
import header_img from '../../Assests/truffle_logo.png'
import './header.css'

const header = () => {
  return (
    <div className='header'>
    <img className='logo' src={header_img} alt="Truffle_logo"/>
    <h1>Truffle Health</h1>
    </div>
  )
}

export default header