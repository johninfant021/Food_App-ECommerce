import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Users/register';
import Login from './Users/login';
import Home from './components/Home';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import About from './components/about';

function App() {
  const[cart,setcart]=useState('')
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home cart={cart} setcart={setcart} />} />
        <Route path="/cart" element={<Cart cart={cart} setcart={setcart} />} />
        <Route path="/checkout" element={<Checkout cart={cart}  />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
