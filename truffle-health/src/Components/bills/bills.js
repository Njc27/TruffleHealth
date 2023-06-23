import React,{useEffect, useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import './bills.css';
import {submitBill, updateBill} from '../../Redux/actions/billAction'
import {useNavigate,useLocation} from "react-router-dom";
import Alert from '@mui/material/Alert';


const Bills = (props) => {
  const{billData:bData} = useSelector(state=>state.bills);
  const{billFields} = useSelector(state=>state.screens);
  const{loggedInUser} = useSelector(state=>state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isPreview,setIsPreview] = useState(false);
  const [isEdit,setIsEdit] = useState(false);
  const [billsData,setBillsData] = useState({});
  const [errorStack,setErrorStack] = useState([]);

  const emailRegEx =/[a-z.]*[@]\btruffleHealth.com/
  const phoneNumberRegEx = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
  


  useEffect(()=>{
    if(location.state){
      let tempdata = location.state.data;
      setBillsData({...billsData,...tempdata});
      setIsPreview(true);
    }
  },[location.state])

  console.log(location?.state)


const disabledField = () =>{

}



const onSubmit = e => {
  if(isPreview){
    setIsPreview(false);
    setIsEdit(true);
  }
  else{
    let temp_bill = billsData;
    e.preventDefault();
    let errors = [];
    if( billsData?.phoneNumber?.match(phoneNumberRegEx) === null){
      errors.push("Phone number must follow pattern 000-123-1234")
      setErrorStack(errors);
    }
    if(billsData?.email?.match(emailRegEx) === null){
      console.log(billsData?.email?.match(emailRegEx) === null);
      errors.push("email number must follow pattern")
      setErrorStack(errors);

    }
    console.log(Object.keys(billsData).length <= billFields.length+2)
    if(Object.keys(billsData).length <= billFields.length|| billsData?.fname === ' '  ||  billsData?.lname === ' '||  billsData?.email === ' '  ||  billsData?.phoneNumber===' ' || billsData?.stName===' ' || billsData?.city===' '){
      errors.push("Fields cannot be empty")
      setErrorStack(errors);
    }

    else{
      if(isEdit){
        let index = location?.state?.index;
        let completeData = bData;

        completeData[index] = temp_bill;
        console.log(completeData)
        dispatch(updateBill(completeData));
      }
      else{
        if(loggedInUser){
          temp_bill["user"]=loggedInUser?.email
        }
        dispatch(submitBill([temp_bill]));
      }
      navigate('/');
    }
  }
  }

  const handleFormChange = (path,value) =>{
    let temp = {}
    temp[path] = value;
    setBillsData({...billsData,...temp});
  }


  const validate  = (path) =>{
    switch(path) {
      case ("fname"):
      case ("lname"):
      case ("stName"):
      case ("city"):
      case ("state"):
      case ("zip"):
      case ("Hname"):
      case ("Dos"):
      case("billAmount"):
          if(billsData[path]?.trim().length === 0){
            return false
        }
        else {
            return true
        }
      case ("phoneNumber"):
          if(billsData[path]?.match(phoneNumberRegEx)!==null){
            return true
          }
        else{
          return false
        }
        case ("email"):
        if(billsData[path]?.match(emailRegEx)!==null){
          return true
        }
        else{
          return false
        }
    }
  }


  return (
    <>
    <div className='page-header'>Medical Bill Information</div>
    
    <div className="center">

    <div className='form-header'>Enter Patient Details</div>
    <form className='bill_form' method="post">
    <div className='left_container'>
      {billFields.map(items=>(
        items?.container === 'left' &&
        <div className={validate(items?.path)?"txt_field":"txt_field_error"}>
        <input type={items?.type} required = {true} value={billsData[items?.path]?billsData[items?.path] : ""}  onChange={(e)=>{!isPreview? handleFormChange(items?.path, e.target.value):disabledField()}}/>
        <span></span>
        <label>{items?.label}</label>
      </div>
      ))}
    </div>
      <div className='right_container'>
      {billFields.map(items=>(
        items?.container === 'right' &&
        <div className={validate(items?.path)?"txt_field":"txt_field_error"}>
        <input type={items?.type} required = {true} value={billsData[items?.path]?billsData[items?.path] : ""}  onChange={(e)=>{!isPreview? handleFormChange(items?.path, e.target.value):disabledField()}}/>
        <span></span>
        <label>{items?.label}</label>
      </div>
      ))}
      <div className="txt_field">
          <input type="date" value={billsData["Dos"]?billsData["Dos"] : " "}  onChange={(e)=>{!isPreview? handleFormChange("Dos", e.target.value):disabledField()}}/>
          <span></span>
          <label>Date of Service</label>
        </div>
      <div>
          <input type="file" id='image' disabled={isPreview} onChange={(e)=>{!isPreview? handleFormChange("image", e.target.files[0]):disabledField()}}/>
          <label for="image" >Photo of bill</label>
          </div>
          {billsData["image"]!=null ? (<a href={URL.createObjectURL(billsData["image"])} target='_blank'>Preview</a>):<></>}
      </div>
      </form>
      <div className='submit-btn'>
      <input type = "button" value={isPreview?"Edit":"Submit"} className={isPreview?"secondary-btn":"primary-btn"} onClick={(e)=>{onSubmit(e)}}/>
      </div>
    </div>
    <div className='errorStack'>
    {errorStack?.map(errors =>(
        <Alert className='errors' severity="error">{errors}</Alert>
      ))}
    </div>
    </>
 
  )
}

export default Bills