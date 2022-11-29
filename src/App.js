import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import Products from './Component/Products';
import Register from './Component/Register';
import './style.css'

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>

      {/* <Home/> */}
    </div>
  );
}

export default App;
