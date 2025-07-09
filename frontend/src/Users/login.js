import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/log.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading,setloading]=useState(false)
  // const user_email=email;
  // const user_TrimmedMail=user_email.replace("@gmail.com"," ")

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert('Please fill all fields');
    }

    setloading(true);
    try {
      // 1. Send login request with Axios
      const res = await axios.post(
        'https://food-app-ecommerce.onrender.com/api/user/login',
        { email, password }
      );

      // 2. Axios puts the parsed JSON on res.data
      const { token } = res.data;

      if (token) {
        // 3. Store token and navigate
        localStorage.setItem('token', token);
        navigate('/home');
      } else {
        alert('Login failed: no token returned');
      }

    } catch (err) {
      console.error(err)
      alert('Login failed');

    } finally {
      setloading(false);
    }
  };
  

  return (
     <>
           {loading ? (
            <div className='loading'>
              <h2>Loading...</h2>
            </div>
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
      <Link to='/' className='already'>Does not account? sign up</Link>
      </div>
    </main>
    </div>
      )}

    </>
  );
}

export default Login;
