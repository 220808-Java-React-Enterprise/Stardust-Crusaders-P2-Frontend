import React, { useEffect, useState } from 'react';
import './App.css';
import Signup from './components/signup/Signup';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './components/login/Login';
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar';
import Inventory from './components/inventory/Inventory';
import Profile from './components/profile/Profile';
import User from './models/User';
// import Pokemon_details from './components/pokemon_details/Pokemon_details';

function App() {
  const [user, setUser] = useState<User | null>(null);
  useEffect(()  => {
    const data = window.sessionStorage.getItem("user");
    if (data != null) setUser(JSON.parse(data));
  }, [])
  return (
    <BrowserRouter>
      <Navbar currentUser={user} />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/auth" element={<Login currentUser={user} updateCurrentUser={setUser} />}></Route>
        <Route path="/home" element={<Home currentUser={user} />}></Route>
        <Route path="/inventory" element={<Inventory />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route path="/pokemon_details" element={<Pokemon_details />}></Route> */}

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
