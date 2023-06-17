import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import './bills.css';
import {submitBill} from '../../Redux/actions/billAction'
import { on } from 'events';

const Bills = () => {

    const{billData:bData} = useSelector(state=>state.bills);
    console.log(bData);
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
//   const [city,setCity] = useState('');
//   const [city,setCity] = useState('');


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
    }
  }



  return (
    <>
    <h2>Medical Bill Information</h2>
    <div className="center">
    <form className='bill_form' method="post">
    <div className='left_container'>
    
      <h4>Enter Patient details</h4>
        <div className="txt_field">
        <span></span>
          <input type="text" required onChange={(e)=>{setFname(e.target.value)}}/>
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
        </div><div className="txt_field">
          <input type="tel" id="phone" name="phoneNumber" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required onChange={(e)=>{setPhoneNumber(e.target.value)}}></input>
          <span></span>
          <label>Phone Number</label>
        </div>

        
        <div className="txt_field">
          <input type="text" required onChange={(e)=>{setStname(e.target.value)}}/>
          <span></span>
          <label>Street Name/Apt No.</label>
        </div>
        <div className="txt_field">
          <input type="text" required onChange={(e)=>{setCity(e.target.value)}}/>
          <span></span>
          <label>City</label>
        </div>
        <div className="txt_field">
          <input type="text" required onChange={(e)=>{setState(e.target.value)}}/>
          <span></span>
          <label>State</label>
        </div>
        <div className="txt_field">
          <input type="text" required onChange={(e)=>{setZip(e.target.value)}}/>
          <span></span>
          <label>Zip Code</label>
        </div>
    </div>
      <div className='right_container'>

      
      <div className="txt_field">
          <input type="text" required onChange={(e)=>{setHname(e.target.value)}}/>
          <span></span>
          <label>Name of Hospital</label>
        </div>
        <div className="txt_field">
          <input type="date" required onChange={(e)=>{setDos(e.target.value)}}/>
          <span></span>
          <label>Date of Service</label>
        </div>
        <div className="txt_field">
          <input type="number" required onChange={(e)=>{setbillAmount(e.target.value)}}/>
          <span></span>
          <label>Bill Amount</label>
        </div>
        <div className="txt_field">
          <input type="image"/>
          <span></span>
          <label>Photo of bill</label>
        </div>
        <input className="button" type="submit" onClick={(e)=>onSubmit(e)}/>
      </div>
      </form>
    </div>
    </>
 
  )
}

export default Bills