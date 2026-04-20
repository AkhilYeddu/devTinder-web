import axios from 'axios';
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { removeUserFromFeed } from '../utils/feedSlice';

const UserCard = ({user}) => {
    const{firstName, lastName, about, gender, age, photoUrl} = user;
    const dispatch = useDispatch();
    const handleSendRequest = async(status,_id)=>{
        try{
            const res = await axios.post(BASE_URL + "/request/send/"+ status + "/" + _id,{},{withCredentials: true})
            dispatch(removeUserFromFeed(_id));
        }catch(err){
            console.log(err)
        }
        

    }
  return (
            <div className="card bg-base-300 w-96 shadow-sm p-3">
        <figure>
            <img
            className='rounded'
            src={photoUrl}
            alt="user photo" />
        </figure>
        <div className="card-body">
            <h2 className="card-title text-3xl">{firstName + " " + lastName}</h2>
            
            {age && gender && <p className='font-bold'>{age +", " + gender}</p>}
            <p>{about}</p>

            <div className="card-actions justify-center my-1">
            <button className="btn btn-secondary" onClick={()=> handleSendRequest("ignored",user._id)}>Ignore</button>
            <button className="btn btn-primary" onClick={()=> handleSendRequest("interested",user._id)}>Interest</button>
            </div>
        </div>
        </div>
  )
}

export default UserCard