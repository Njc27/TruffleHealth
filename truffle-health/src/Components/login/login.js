import React from 'react'

const login = () => {
  return (
    <div className="center">
      <h1>Sign In</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required  onChange={(e) =>{setEmail(e.target.value)}}/>
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="password" required onChange={(e) =>{setPassword(e.target.value)}}/>
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        <input type="submit" value="Login" onClick={(e)=>handleSignIn(e)}/>
        <div className="signup_link">
          Not Registered yet? <a href="#" onClick={handleRegisterClick}>Register here</a>
        </div>
      </form>
    </div>
  )
}

export default login