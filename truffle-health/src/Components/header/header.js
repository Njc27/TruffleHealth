import React from 'react'
import header_img from '../../Assests/truffle_logo.png'
import './header.css'
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';


const Header = () => {
  let navigate = useNavigate();
  const{loggedInUser} = useSelector(state=>state.user);

  return (
    <div className='header'>
      <div className='company_name' onClick={()=>{navigate('/')}}>
      <img className='logo' src={header_img} alt="Truffle_logo"/>
      <div className='name' >Truffle Health</div>
      </div>
      <div>
      {loggedInUser?.firstName?(
        <div className='userData'>
          Hi {loggedInUser?.firstName}
        </div>
      ):(
      <div className='btn-layout'>
      <input type='button' value="Sign In" className='primary-btn' onClick={()=>{navigate('/login')}}></input>
      <input type = 'button' value ="Register" className = 'secondary-btn'onClick={()=>{navigate('/register')}} ></input>
      </div>
      )
    }
    </div>
      
    
    </div>
  )
}

export default Header