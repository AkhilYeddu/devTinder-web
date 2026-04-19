import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests, removeRequest } from '../utils/requestSlice'

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store)=>store.requests);
  console.log(requests);
  const fetchRequests = async()=>{
    try{
         const res = await axios.get(BASE_URL + "/user/requests",{
      withCredentials : true
      
    })
    dispatch(addRequests(res.data.data))
    
    
    
    }catch(err){
      console.log(err);
    }
   
  }
  const ReviewRequests = async(status, _id) =>{
    try{
      await axios.post(BASE_URL + "/request/review/" + status + "/"+ _id,{},{
        withCredentials : true
      });
      dispatch(removeRequest(_id));
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchRequests()
  },[])
    
  if(!requests) return;

    if(requests.length === 0) return (
        <h1 className='text-center text-3xl my-10 font-bold text-white'>No Requests found</h1>
    )

  return(
        <div className='text-center my-10'>
            <h1 className='text-3xl font-bold text-white'>Requests</h1>

            {
                requests.map((request)=>{
                    const{_id,firstName, lastName, age, gender, photoUrl, about} = request.fromUserId;
                    return(<div key = {_id} className='bg-base-300  m-4 p-4 flex justify-between rounded-lg w-2/3  mx-auto items-center '>
                                <div>
                                    <img alt = "photo" src = {photoUrl} className='w-20 h-20 rounded-full object-cover'></img>
                                </div>

                                <div className='text-left mx-4 '> <h2 className='font-bold text-xl'> {firstName + " " + lastName}  </h2>
                                {age && gender && <p className='font-semibold'> {age +", " + gender}</p>}
                                <p> {about}</p>
                                </div>
                            
                                
                               
                              <div className='flex '>
                                <button className="btn btn-primary mx-2" onClick={()=> ReviewRequests("accepted",request._id)}>Accept</button>
                                <button className="btn btn-secondary mx-2" onClick={()=> ReviewRequests("rejected",request._id)}>Reject</button></div>
                            </div>
                    )

                })
            }
            
        </div>
    )
}

export default Requests