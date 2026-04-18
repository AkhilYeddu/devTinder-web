import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store)=> store.connections);
    console.log(connections);
    
    const fetchConnections = async()=>{
        try{
                const res = await axios.get(BASE_URL + "/user/connections",{
            withCredentials : true
             })
             dispatch(addConnections(res.data.data));

        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchConnections();
        
    },[])

    if(!connections) return;

    if(connections.length === 0) return (
        <h1 className='flex justify-center text-2xl my-10'>No connections found</h1>
    )

    

    return(
        <div className='text-center my-10'>
            <h1 className='text-3xl font-bold text-white'>Connections</h1>

            {
                connections.map((connection)=>{
                    const{firstName, lastName, age, gender, photoUrl, about} = connection;
                    return(<div className='bg-base-300  m-4 p-4 flex rounded-lg w-1/2  mx-auto '>
                                <div>
                                    <img alt = "photo" src = {photoUrl} className='w-20 h-20 rounded-full'></img>
                                </div>

                                <div className='text-left mx-4 '> <h2 className='font-bold text-xl'> {firstName + " " + lastName}  </h2>
                                {age && gender && <p> {age +", " + gender}</p>}
                                <p> {about}</p>
                                </div>
                            
                                
                               

                            </div>
                    )

                })
            }
        </div>
    )
}

export default Connections