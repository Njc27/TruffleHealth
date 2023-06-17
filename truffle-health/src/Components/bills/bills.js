import React from 'react'
import './bills.css';

const bills = () => {
  return (
    <>
    <h2>Medical Bill Information</h2>
    <div className="center">
    <form className='bill_form' method="post">
    <div className='left_container'>
    
      <h4>Enter Patient details</h4>
        <div className="txt_field">
        <span></span>
          <input type="text" required/>
          <label>First Name</label>
        </div>
        <div className="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Last Name</label>
        </div>
        <div className="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Street Name/Apt No.</label>
        </div>
        <div className="txt_field">
          <input type="text" required/>
          <span></span>
          <label>City</label>
        </div>
        <div className="txt_field">
          <input type="text" required/>
          <span></span>
          <label>State</label>
        </div>
        <div className="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Zip Code</label>
        </div>

    </div>
      <div className='right_container'>

      
      <div className="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Name of Hospital</label>
        </div>
        <div className="txt_field">
          <input type="date" required/>
          <span></span>
          <label>Date of Service</label>
        </div>
        <div className="txt_field">
          <input type="number" required/>
          <span></span>
          <label>Bill Amount</label>
        </div>
        <div className="txt_field">
          <input type="image" required/>
          <span></span>
          <label>Photo of bill</label>
        </div>
        <div className="txt_field">
          <input type="text" required/>
          <span></span>
          <label>Zip Code</label>
        </div>
        <input className="button" type="submit"/>
        

      </div>
      </form>
    </div>
    </>
 
  )
}

export default bills