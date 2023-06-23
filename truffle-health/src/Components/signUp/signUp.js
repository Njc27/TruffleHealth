import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {registerUser} from"../../Redux/actions/userAction";
import "./signUp.css"
import Alert from '@mui/material/Alert';



const SignUp = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const{signUpFields:registerFields} = useSelector(state=>state.screens);
    const{userData:usersData} = useSelector(state=>state.user);
    const [errorStack,setErrorStack] = useState([]);

    const [signUpData,setSignUpData] = useState({});
    const emailRegEx =/[a-z.]*[@]\btruffleHealth.com/
    const passwordRegEx =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    const validate  = (path) =>{
        switch(path) {
            case ("firstName"):
            case ("lastName"):
                if(signUpData[path]?.trim().length ===0){
                    console.log(signUpData[path])
                    return false
                }
                else{
                    return true
                }
          case ("email"):
            if(signUpData[path]?.match(emailRegEx)!==null){
              return true
            }
            else{
              return false
            }
          case("password"):
          if( signUpData[path]?.match(passwordRegEx)!==null){
            return true
          }
          else{
            return false
          }
        }
      }

      

const handleFormChange = (path,value) =>{
    let temp = {}
    temp[path] = value;
    setSignUpData({...signUpData,...temp})
  }
const handleSignIn =(e) =>{
    e.preventDefault();
    let errors = [];
    if(signUpData?.email?.match(emailRegEx) === null){
        errors.push("Email must be of Pattern")
        setErrorStack(errors)
    }
    if(signUpData.password?.match(passwordRegEx) === null){
        errors.push("Password must contain 1Caps 1small and length 6-16")
        setErrorStack(errors)
    }
    if(Object.keys(signUpData).length < registerFields.length || signUpData?.fname?.toString().trim().length ===0 || signUpData?.lname?.toString().trim().length ===0|| signUpData?.email?.toString().trim().length ===0|| signUpData?.password?.toString().trim().length ===0){
        errors.push("Fields cannot be empty")
        setErrorStack(errors)
    }
  let email = usersData.filter(items=>{
    return items?.email === signUpData?.email
  })
  if(errors.length === 0){
    if(email?.length  === 0){
        console.log("reached")
        dispatch(registerUser([signUpData]));
        navigate('/login')
      }
      else{
        errors.push("Email Id already Exists");
      }
  }
}

  return (
    <div className="register">
      <h1>Register</h1>
      <form method="post">
      {registerFields.map(fields =>(
          <div className={validate(fields?.path)?"txt_field":"txt_field_error"}>
          <input type={fields?.type} required  onChange={(e) =>{handleFormChange(fields?.path,e.target.value)}}/>
          <span></span>
          <label>{fields?.label}</label>
        </div>
        ))}
        <input type="submit" value="Register" onClick={(e)=>handleSignIn(e)}/>
      </form>
      <div className='errorStack'>
        {errorStack.map(errors =>(
          <Alert className = "errors" severity="error">{errors}</Alert>
        ))}
      </div>
    </div>
  )
}

export default SignUp