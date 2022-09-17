import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/signup/Signup';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './components/login/Login';
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar';
import Inventory from './components/inventory/Inventory';
import Profile from './components/profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/profile" element={<Profile />}></Route>


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
