import { useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import './css/checkout.css'

function Checkout({cart}){
    const[name,setname]=useState('')
    const[useremail,setuseremail]=useState('')
    const[useraddress,setuseraddress]=useState('')
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const checkouts = {
            name,
            useremail,
            useraddress,
            orders: cart
        };
        if (!useremail || !name || !useraddress) return alert("Please fill all fields");
        await axios.post('https://food-app-ecommerce.onrender.com/api/user/checkout', checkouts)
      .then(result=>{
        console.log(result)
        if(result.data==="Success"){
             alert("Ordered Successfully")
             setname("")
             setuseremail("")
             setuseraddress('')
        }
        else{
            alert("Order Not placed")
        }
      })
      .catch (err=>console.log(err))
    }
    return(
        <>
        <Nav/>
        <form onSubmit={handleSubmit} className="checkout-container">
        <h1 className="h3 mb-3 fw-normal text-center">Checkout</h1>
        <div className="form-floating my-3">
          <input
            type="email"
            value={useremail}
            onChange={(e) => setuseremail(e.target.value)}
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingEmail">Email address</label>
        </div>


        <div className="form-floating my-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="form-control"
            id="floatingName"
            placeholder="Enter Your Name"
          />
          <label htmlFor="floatingName">Your name</label>
        </div>
        <div className="form-floating my-3">
          <input
            type="text"
            value={useraddress}
            onChange={(e) => setuseraddress(e.target.value)}
            className="form-control"
            id="floatingAddress"
            placeholder="Address"
          />
          <label htmlFor="floatingAddress">Enter our valid address</label>
        </div>

       
        <button className="btn btn-primary d-flex justify-content-center " type="submit">
          Order Now
        </button>
      </form>
        </>
    )
}
export default Checkout;