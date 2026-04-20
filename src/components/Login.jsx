import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async() =>{
    try{

      const res = await axios.post( BASE_URL+"/login",
        {
        emailId,
        password
        },
      {withCredentials : true});

      
          dispatch(addUser(res.data)); //adding to the store 
          return navigate("/");


      }
      catch(err){
        setError(err?.response?.data || "Something went wrong!")
      
      }
        
  }

  const handleSignUp = async()=> {
    try{
      const res = await axios.post(BASE_URL+ "/signup",{
      firstName,
      lastName,
      emailId,
      password
    },{withCredentials: true});
    dispatch(addUser(res.data.data));
    return navigate("/profile")

    }catch(err){
      console.log(err)
      setError(err?. response?.data || "Something went wrong!");
    }
    
  }
  return (
 
    <div className="flex justify-center mt-10">
      <div className="card card-border bg-base-300 w-96">
      <div className="card-body">
        <h2 className="card-title justify-center">
          {isLoginForm ? "Login" : "Sign Up"}
          </h2>
            {!isLoginForm &&
              <div>
                    <div>
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">First Name: </legend>
                    <input type="text"  value= {firstName} onChange={(event)=>setFirstName(event.target.value)} className="input"/>
                    </fieldset>
            </div>
            <div>
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend">Last Name: </legend>
                    <input type="text"  value= {lastName} onChange={(event)=>setLastName(event.target.value)} className="input"/>
                    </fieldset>
            </div>
              </div>
            }
          
          <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Email ID: </legend>
                <input type="text"  value= {emailId} onChange={(event)=>setEmailId(event.target.value)} className="input"/>
                </fieldset>
         </div>
         <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Password: </legend>
                <input type="password"  value= {password} onChange={(event)=>setPassword(event.target.value)} className="input"/>
                </fieldset>
         </div>
         <p className='text-red-500'>{error}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={isLoginForm? handleLogin : handleSignUp}>
            {isLoginForm? "Login" : "Sign Up"}</button>
        </div>
        <p className='m-auto py-2 cursor-pointer  text-white underline' onClick={()=> setIsLoginForm(value => !value)}>{isLoginForm? "New User? Sign Up here." : "Existing User? Login here."}</p>
      </div>
      </div>  
    </div>
  )
}

export default Login