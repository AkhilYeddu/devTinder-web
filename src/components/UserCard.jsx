import React, { useEffect } from 'react'

const UserCard = ({user}) => {
    const{firstName, lastName, about, gender, age, photoUrl} = user;
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
            <button className="btn btn-secondary">Ignore</button>
            <button className="btn btn-primary">Interest</button>
            </div>
        </div>
        </div>
  )
}

export default UserCard