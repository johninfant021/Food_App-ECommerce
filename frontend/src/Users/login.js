import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/log.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading,setloading]=useState(false)
  const user_email=email;
  const user_TrimmedMail=user_email.replace("@gmail.com"," ")

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setloading(true)
    if (!email || !password) return alert("Please fill all fields");
    await axios.post('https://food-app-ecommerce.onrender.com/api/user/login', {
        email,
        password,
      })
      .then(result=>{
        console.log(result)
        if(result.data==="Success"){
          localStorage.setItem("User_TrimmedMail",user_TrimmedMail)
          setloading(false)
            navigate('/home'); 
        }
        else{
            alert("The password is incorrect")
            setloading(false)
        }
      })
      .catch (err=>console.log(err)) 
    }
  

  return (
     <>
           {loading ? (
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h2>
      ) : (
             <div className="container-form">
    <main className="form-signin m-auto">
      <form onSubmit={handleSubmit}>
        
        <h1 className="head-reg">Login</h1>
        <div className="form-floating my-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingEmail">Email address</label>
        </div>


        <div className="form-floating my-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
  <div className='btn-reg'>
    <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
          Login
        </button>
  </div>
      </form>
      <div className="mt-3 text-center">
      <Link to='/'>Does not account? sign up</Link>
      </div>
    </main>
    </div>
      )}

    </>
  );
}

export default Login;
