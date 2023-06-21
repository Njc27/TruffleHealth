import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {registerUser} from"../../Redux/actions/userAction";
import "./signUp.css"


const SignUp = () => {
    const dispatch = useDispatch();
    const{signUpFields:registerFields} = useSelector(state=>state.screens);
    const{userData:usersData} = useSelector(state=>state.user);

    const [signUpData,setSignUpData] = useState({});


const handleFormChange = (path,value) =>{
    let temp = {}
    temp[path] = value;
    setSignUpData({...signUpData,...temp})
  }

const handleSignIn =(e) =>{
    e.preventDefault();
  let email = usersData.filter(items=>{
    return items?.email === signUpData?.email
  })
  if(email?.length  === 0){
    dispatch(registerUser([signUpData]));
  }
}

  return (
    <div className="register">
      <h1>Register</h1>
      <form method="post">
      {registerFields.map(fields =>(
          <div className="txt_field">
          <input type={fields?.type} required  onChange={(e) =>{handleFormChange(fields?.path,e.target.value)}}/>
          <span></span>
          <label>{fields?.label}</label>
        </div>
        ))}
        <input type="submit" value="Register" onClick={(e)=>handleSignIn(e)}/>
      </form>
    </div>
  )
}

export default SignUp