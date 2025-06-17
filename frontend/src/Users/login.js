import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const user_email=email;
  const user_TrimmedMail=user_email.replace("@gmail.com"," ")

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!email || !password) return alert("Please fill all fields");
    await axios.post('http://localhost:5000/api/user/login', {
        email,
        password,
      })
      .then(result=>{
        console.log(result)
        if(result.data==="Success"){
          localStorage.setItem("User_TrimmedMail",user_TrimmedMail)
            navigate('/home'); 
        }
        else{
            alert("The password is incorrect")
        }
      })
      .catch (err=>console.log(err)) 
    }
  

  return (
     <div className="d-flex align-items-center justify-content-center vh-100">
    <main className="form-signin w-25 m-auto">
      <form onSubmit={handleSubmit}>
        
        <h1 className="h3 mb-3 fw-normal text-center">Login</h1>
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

       
        <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
          Login
        </button>
      </form>
      <div className="mt-3 text-center">
      <Link to='/'>Does not account? sign up</Link>
      </div>
    </main>
    </div>
  );
}

export default Login;
