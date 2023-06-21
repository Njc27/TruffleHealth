import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import{loginUser} from "../../Redux/actions/userAction";
import "./login.css"



const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const{loginInputFields:inputFields} = useSelector(state=>state.screens);
  const{userData:usersData} = useSelector(state=>state.user);
  const [loginData,setLoginData] = useState({});


const handleRegisterClick = () =>{
  navigate('/register');
}

const handleFormChange = (path,value) =>{
  let temp = {}
  temp[path] = value;
  setLoginData({...loginData,...temp})
}

const handleSignIn =(e) =>{
  e.preventDefault();
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
          <div className="txt_field">
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
    </div>
  )
}

export default Login