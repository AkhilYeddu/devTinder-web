import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../utils/constants'
const Premium = () => {
    const handleBuyClick = async(type) =>{
        try{
            const order= await axios.post(BASE_URL+"/payment/create", 
                {membershipType : type}
                ,{
                withCredentials : true
            })
            console.log(order)

            //it should open up the razorpay dialog box

            const{keyId, amount, currency, notes, orderId} = order.data;

                    const options = {
                key: keyId, 
                amount: amount, 
                currency: currency,
                name: 'Dev Tinder',
                description: 'Connect to other developers',
                order_id: orderId, // This is the order_id created in the backend
                prefill: {
                name: notes.firstName + " " + notes.lastName,
                email: notes.emailId,
                contact: '9999999999'
                },
                theme: {
                color: '#F37254'
                },
            };
            const rzp = new window.Razorpay(options);
            rzp.open();

        }
        catch(err){
            console.log(err);
        }
        
    }
  return (
    <div className="flex gap-10 justify-center items-center m-10">
        
                <div className="card w-96 bg-base-300 shadow-sm">
        <div className="card-body">
            <span className="badge badge-xs badge-warning invisible">Most Popular</span>
            <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Silver </h2>
            <span className="text-xl">₹499/mo</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Chat with other people</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>100 Connection requests per day </span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Blue Tick</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>3 Months</span>
            </li>
            </ul>
            <div className="mt-6">
            <button className="btn btn-primary btn-block" onClick={()=> handleBuyClick("silver")}>Buy Silver</button>
            </div>
        </div>
        </div>

                      <div className="card w-96 bg-base-300 shadow-sm">
        <div className="card-body">
            <span className="badge badge-xs badge-warning">Most Popular</span>
            <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Gold</h2>
            <span className="text-xl">₹799/mo</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Chat with other people</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Infinite Connection requests per day </span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Blue Tick</span>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>6 Months</span>
            </li>
            </ul>
            <div className="mt-6">
            <button className="btn btn-primary btn-block" onClick={()=> handleBuyClick("gold")}>Buy Gold</button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Premium