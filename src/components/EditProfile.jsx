import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { addFeed } from '../utils/feedSlice';
import { addUser } from '../utils/userSlice';
import UserCard from './UserCard';

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setlastName] = useState(user.lastName);
    const [photoUrl, setphotoUrl] = useState(user.photoUrl);
    const [age, setAge] = useState(user.age || ""); 
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [showToast, setShowToast] = useState(false)

  

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const saveProfile = async()=>{
      // Clear errors
      setError("")
        try{
        

          const res = await axios.patch(BASE_URL + "/profile/edit",{
            firstName,
            lastName,
            photoUrl,
            age,
            gender,
            about
          },{
          withCredentials : true
          });

          dispatch(addUser(res?.data?.data));
          setShowToast(true)
          setTimeout(() => {
              setShowToast(false)
          }, 3000);

        }catch(error){
          
            setError(error?.response?.data);
          
          
        }
      
    }

  return (
    <div className='flex justify-center m-5 mb-15'>
      <div className="flex justify-center mt-10">
      <div className="card card-border bg-base-300 w-96 mr-10">
      <div className="card-body">
        <h2 className="card-title justify-center">Edit Profile</h2>
          <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">First Name : </legend>
                <input type="text"  value= {firstName} onChange={(event)=>setFirstName(event.target.value)} className="input"/>
                </fieldset>
         </div>
         <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Last Name : </legend>
                <input type="text"  value= {lastName} onChange={(event)=>setlastName(event.target.value)} className="input"/>
                </fieldset>
         </div>
         <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">PhotoURL : </legend>
                <input type="text"  value= {photoUrl} onChange={(event)=>setphotoUrl(event.target.value)} className="input"/>
                </fieldset>
         </div>
         <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Age : </legend>
                <input type="text"  value= {age} onChange={(event)=>setAge(event.target.value)} className="input"/>
                </fieldset>
         </div>
         <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">Gender : </legend>
                <input type="text"  value= {gender} onChange={(event)=>setGender(event.target.value)} className="input"/>
                </fieldset>
         </div>
         <div>
                <fieldset className="fieldset">
                <legend className="fieldset-legend">About : </legend>
                <input type="text"  value= {about} onChange={(event)=>setAbout(event.target.value)} className="input"/>
                </fieldset>
         </div>
         <p className='text-red-500'>{error}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary" onClick={saveProfile}>Save</button>
        </div>
      </div>
      </div>  
    </div>
    
      <UserCard user ={{firstName,lastName,photoUrl,gender,about,age}}></UserCard>


      <div>
        {showToast && <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span>Profile saved successfully.</span>
        </div>
      </div>}   
      </div>
  
    
    </div>
  )
}

export default EditProfile