import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import './bills.css';
import {submitBill} from '../../Redux/actions/billAction'
import {useNavigate} from "react-router-dom";

const Bills = () => {

  const{billData:bData} = useSelector(state=>state.bills);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fname,setFname] = useState('');
  const [lname,setLname] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [stName,setStname] = useState('');
  const [city,setCity] = useState('');
  const [state,setState] = useState('');
  const [zip,setZip] = useState('');
  const [Hname,setHname] = useState('');
  const [Dos,setDos] = useState('');
  const [billAmount,setbillAmount] = useState('');


const onSubmit = e => {
    let temp_bill=[{
        fname:fname,
        lname:lname,
        email:email,
        phoneNumber:phoneNumber,
        stName:stName,
        city:city,
        state:state,
        zip:zip,
        Hname:Hname,
        Dos:Dos,
        billAmount:billAmount
    }]
    e.preventDefault();
    if(fname === '' || lname=== '' || email === '' || phoneNumber==='' || stName==='' || city===''){
      alert('Fields cannot be null');
    }
    else{
      dispatch(submitBill(temp_bill));
      navigate('/');
    }
  }



  return (
    <>

    <div className='page-header'>Medical Bill Information</div>
    <div className="center">
    <div className='form-header'>Enter Patient Details</div>
    <form className='bill_form' method="post">
    <div className='left_container'>
        <div className="txt_field">
          <input type="text" required onChange={(e)=>{setFname(e.target.value)}}/>
          <span></span>
          <label>First Name</label>
        </div>
        <div className="txt_field">
          <input type="text" required onChange={(e)=>{setLname(e.target.value)}}/>
          <span></span>
          <label>Last Name</label>
        </div>
        <div className="txt_field">
          <input type="email" required onChange={(e)=>{setEmail(e.target.value)}}/>
          <span></span>
          <label>Email id</label>
        </div>
        <div className="txt_field">
          <input type="tel" id="phone" name="phoneNumber" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required onChange={(e)=>{setPhoneNumber(e.target.value)}}></input>
          <span></span>
          <label>Phone Number</label>
        </div>
        <div className="txt_field">
          <input type="text" required onChange={(e)=>{setStname(e.target.value)}}/>
          <span></span>
          <label>Street/Apt Number</label>
        </div>
        <div className="txt_field">
          <input type="email" required onChange={(e)=>{setCity(e.target.value)}}/>
          <span></span>
          <label>City</label>
        </div>
    </div>
      <div className='right_container'>
      <div className="txt_field">
          <input type="email" required onChange={(e)=>{setState(e.target.value)}}/>
          <span></span>
          <label>State</label>
        </div>
        <div className="txt_field">
          <input type="text" required onChange={(e)=>{setZip(e.target.value)}}/>
          <span></span>
          <label>Zip</label>
        </div>
      <div className="txt_field">
          <input type="text" required  onChange={(e)=>{setHname(e.target.value)}}/>
          <span></span>
          <label>Name of Hospital</label>
        </div>
        <div className="txt_field">
          <input type="date"  onChange={(e)=>{setDos(e.target.value)}}/>
          <span></span>
          <label>Date of Service</label>
        </div>
        <div className="txt_field">
          <input type="text" required  onChange={(e)=>{setbillAmount(e.target.value)}}/>
          <span></span>
          <label>Bill Amount</label>
        </div>
        <div>
          <input type="file" id='image' />
          <label for="image" >Photo of bill</label>
          </div>
      </div>
      </form>
      <div className='submit-btn'>
      <input type = "button" value="Submit" className="primary-btn" onClick={(e)=>{onSubmit(e)}}/>
      </div>
    </div>
    </>
 
  )
}

export default Bills