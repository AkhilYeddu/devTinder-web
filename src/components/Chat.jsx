import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createSocketConnection } from '../utils/socket';
import { useSelector } from 'react-redux';

const Chat = () => {
    const{targetUserId} = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const user = useSelector((store)=>store.user);
    const userId = user?._id;
    useEffect(()=>{
        if(!userId){
            return;
        }
        
        const socket = createSocketConnection();
        // As soon as the page is loaded, the socket connection is made and joinChat event is emitted.
        socket.emit("joinChat",{
            firstName : user.firstName,
            userId,
            targetUserId
        })

        socket.on("messageReceived",({firstName, text,photoUrl})=>{
            console.log(firstName + " : " + text)
            setMessages(messages=> [...messages,{firstName, text, photoUrl, time : new Date()}])

        })

        return ()=>{
            socket.disconnect();
        }



    },[userId, targetUserId])

    const sendMessage = ()=>{
        console.log("button clicked!")
        const socket = createSocketConnection();
        socket.emit("sendMessage", {
            firstName : user.firstName,
            userId,
            targetUserId,
            text : newMessage,
            photoUrl: user.photoUrl


        })

        setNewMessage("")
            
        };

  return (
    <div className='w-3/4 mx-auto m-5 border border-gray-500 h-[70vh] flex flex-col p-2'>
        <h1 className=' border-b border-gray-700 text-2xl text-center text-white font-bold'>Chat</h1>
        <div className='flex-1 p-5 overflow-y-auto text-white font-semibold'>
            {
                messages.map((msg,index)=>{
                    return <div key={index}>
                        <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src={msg.photoUrl}
                            />
                            </div>
                        </div>
                        <div className="chat-header text-xs">
                           {msg.firstName}
                            <time className="text-xs opacity-50">
                                {new Date(msg.time).toLocaleTimeString([],{
                                hour: "2-digit",
                                minute: "2-digit"})
                                }
                            </time>
                        </div>
                        <div className="chat-bubble">{msg.text}</div>
                        <div className="chat-footer opacity-50">Delivered</div>
                        </div>
                    </div>
                })
            }
        </div>
        <div className='p-5 border bg-gray-500 flex justify-center  gap-3'>
            <input value={newMessage} onChange={(event)=> setNewMessage(event.target.value)} className='bg-gray-800 rounded-xs font-semibold flex-1 p-2 text-white'></input>
            <button onClick= {sendMessage} className='btn btn-primary'>Send</button>
        </div>
    </div>
  )
}

export default Chat