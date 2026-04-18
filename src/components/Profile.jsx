import React from 'react'
import ProfileForm from './EditProfile'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((store)=>store.user);
  if (!user) return <div className='flex justify-center text-3xl'>Loading...</div>; 
  
  return (
    user && (
      <div className='flex justify-center '>
          <EditProfile user = {user}></EditProfile>
      </div>
    )

    
    

  )
}

export default Profile