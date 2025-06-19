import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/reg.css';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!username || !email || !password) {
      alert("Please fill all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://food-app-ecommerce.onrender.com/api/user/reg', {
        username,
        email,
        password,
      });

      if (response.data.message === "User registered successfully") {
        localStorage.setItem("username", username);
        setLoading(false);
        navigate('/home');
      } else if (response.data.message === "The email is already taken") {
        alert("The email is already taken. Please login.");
        setLoading(false);
        navigate('/login');
      } else {
        alert("Unexpected response: " + response.data.message);
        setLoading(false);
      }

    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>Loading...</h2>
      ) : (
        <div className="container-form">
          <main className="form-signin m-auto">
            <form onSubmit={handleSubmit}>
              <h1 className="head-reg">Sign up</h1>

              <div className="form-floating my-3">
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

              <div className='btn-reg'>
                <button className="btn btn-primary py-2 mt-3" type="submit">
                  Sign Up
                </button>
              </div>
            </form>

            <div className="mt-3 text-center">
              <Link to="/login">Already have an account? Login</Link>
            </div>
          </main>
        </div>
      )}
    </>
  );
}

export default Register;
