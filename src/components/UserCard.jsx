import React from 'react'

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
            <h2 className="card-title">{firstName + " " + lastName}</h2>
            <p>{about}</p>
            {age &&gender && <p>{age +", " + gender}</p>}

            <div className="card-actions justify-center my-1">
            <button className="btn btn-secondary">Ignore</button>
            <button className="btn btn-primary">Interest</button>
            </div>
        </div>
        </div>
  )
}

export default UserCard