import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!username || !email || !password) {
    return alert("Please fill all fields");
  }

  try {
    const response = await axios.post('https://food-app-ecommerce.onrender.com/api/user/reg', {
      username,
      email,
      password,
    });

    if (response.data.message === "User registered successfully") {
      localStorage.setItem("username",username)
      navigate('/home');
    } else if (response.data.message === "The email is already taken") {
      alert("The email is already taken. Please login.");
      navigate('/login');
    } else {
      alert("Unexpected response: " + response.data.message);
    }

  } catch (error) {
    console.error("Registration error:", error);
    alert("Something went wrong. Please try again.");
  }
};

    

  return (
    <>
    <div className="d-flex align-items-center justify-content-center vh-100">
    <main className="form-signin w-25 m-auto">
    <form onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 fw-normal text-center">Sign up</h1>
  
      <div className="form-floating  my-3">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          id="floatingName"
          placeholder="Name"
          required
          autoComplete="username"
        />
        <label htmlFor="floatingName">Name</label>
      </div>
  
      <div className="form-floating my-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          id="floatingEmail"
          placeholder="name@example.com"
          required
          autoComplete="email"
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
          required
          autoComplete="new-password"
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
  
      <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
        Sign Up
      </button>
    </form>
  
    <div className="mt-3 text-center">
      <Link to="/login">Already have an account? Login</Link>
    </div>
  </main>
  </div>
  </>
  );
}

export default Register;
