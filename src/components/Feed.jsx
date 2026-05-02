import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constants';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((store)=>store.feed);

 
  
  const fetchFeed = async() =>{
    try{
      const res = await axios.get(BASE_URL+"/user/feed",{
      withCredentials: true
    });

    dispatch(addFeed(res.data));
    console.log(res);
    

    }catch(err){
      console.error(err.message);
    }
    
    

  }


  useEffect(()=>{
      fetchFeed(); 
  },[])

  if(!feed) return
  if(feed.length === 0) return <div className='flex justify-center text-3xl text-white font-bold'>No users</div>
  
  return (
    <div>
      {feed &&(
        <div className='flex justify-center my-10'>
      <UserCard user = {feed[0]}></UserCard>
     </div>
      )}
    
    </div>
  
    
    )
  
}

export default Feed