import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import{loginUser} from "../../Redux/actions/userAction";
import "./login.css"
import Alert from '@mui/material/Alert';




const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const emailRegEx =/[a-z.]*[@]\btruffleHealth.com/
  const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,12}$/
  const{loginInputFields:inputFields} = useSelector(state=>state.screens);
  const{userData:usersData} = useSelector(state=>state.user);
  const [loginData,setLoginData] = useState({});
  const [errorStack,setErrorStack] = useState([]);



const handleRegisterClick = () =>{
  navigate('/register');
}

const handleFormChange = (path,value) =>{
  let temp = {}
  temp[path] = value;
  setLoginData({...loginData,...temp})
}

const validate  = (path) =>{
  switch(path) {
    case ("email"):
      if(loginData[path]?.match(emailRegEx)!==null){
        return true
      }
      else{
        return false
      }
    case("password"):
    if(loginData[path]?.match(password)!==null){
      return true
    }
    else{
      return false
    }
  }
}


const handleSignIn =(e) =>{
  e.preventDefault();
  let errors = [];
  if(loginData?.email?.match(emailRegEx) === null){
    errors.push("Email must follow pattern");
    setErrorStack(errors);
  }
  if(loginData.password?.match(password) === null){
        errors.push("Password must contain 1Caps 1small and length 6-16")
        setErrorStack(errors)
    }
    setErrorStack(errors);
  let email = usersData.filter(items=>{
    return items?.email === loginData?.email && loginData?.password
  })
  if(email?.length >0){
    dispatch(loginUser(email[0]));
    navigate('/');
}
else{
  console.log("User does not exist");
}
}

  return (
    <div className="login">
      <h1>Sign In</h1>
      <form method="post">
        {inputFields.map(fields =>(
          <div className={validate(fields?.path)?"txt_field":"txt_field_error"}>
          <input type={fields?.type} required  onChange={(e) =>{handleFormChange(fields?.path,e.target.value)}}/>
          <span></span>
          <label>{fields?.label}</label>
        </div>
        ))}
        <input type="submit" value="Login" onClick={(e)=>handleSignIn(e)}/>
        <div className="signup_link">
          Not Registered yet? <a href="#" onClick={handleRegisterClick}>Register here</a>
        </div>
      </form>
      <div className='errorStack'>
        {errorStack.map(errors =>(
          <Alert severity="error">{errors}</Alert>
        ))}
      </div>
    </div>
  )
}

export default Login