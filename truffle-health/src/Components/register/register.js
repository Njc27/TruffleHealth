import React from 'react'

const register = () => {
    <section>
    <div className="register">
        <div className="column-1">
            <h2>Register Here</h2>
            <span>For a fair and share deal!!</span>

            <form id='form' className='flex flex-col' onSubmit={(e)=>handleSubmit(onSubmit(e))}>
    
          <input type="text"
            placeholder="Enter First name"
            {...register("fname", { required: true })}
            onChange={(e) =>{setFname(e.target.value)}}
          />

          {fname_error&&(
            <div className="error">
            {"First Name is required"}

          </div>
          )}
         
        

          <input
            placeholder="Enter Last name" 
            {...register("lname", { required: true })}
            onChange={(e) =>{setLname(e.target.value)}}

          />

            {lname_error&&(
            <div className="error">
            {"Last Name is required"}

          </div>
          )}

          <input
            placeholder="Enter primary email"
            {...register("email", {
              required: true,
              pattern: /[a-z.]*[@]\bnortheastern.edu/,
            })}
            onChange={(e) =>{setEmail(e.target.value)}}

          />
          {
            email_error&&(
              <div className="error">

            {"Enter email id with domain @northeastern.edu"}
          </div>
            )
          }
          
    
        
          <input placeholder="Enter phone number"
            {...register("phoneNumber",{
              required: true,
            pattern: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
            })}

            onChange={(e) =>{setPhoneNumber(e.target.value)}}
          />

          {
            phoneNumber_error&&(
              <div className="error">
              {"Enter your phone number in the format 'xxx-xxx-xxxx'"}
          </div>
            )
          }
          <input
            placeholder='Enter your Address'
            {...register("address", {
            required: true,
            })}
            onChange={(e) =>{setAddress(e.target.value)}}

          />
          {address_error&&(
            <div className="error">

          {"Enter valid address"}
          </div>
          )}

          <input
            placeholder="Enter password"
            type='password'
            {...register("password", {
            required: true,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,12}$/,
              
            })}
            onChange={(e) =>{setPassword(e.target.value)}}

          />
          {password_error&&(
            <div className="error">

            {"Entered a valid password"}
              {<ul className='pass_ul'>
                Password should contain
                <li>At least one capital letter,</li>
                <li>At least one small letter,</li>
                <li>At least one number,</li>
                <li>At least one special character,</li>
                <li> And minimum length of 8,12</li>
            </ul>
              }
          </div>
          )}

          
        <div>  

          <input className="button" type="submit"/>
        </div>
            </form>
        </div>
    </div>
</section>
}

export default register