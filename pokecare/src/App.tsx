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
import Addpoke from './components/addpoke/Addpoke';
import Pokemon_details from './components/pokemon_details/Pokemon_details';
import Pokemon from './models/Pokemon';
import About from './components/about/About';


function App() {
  const [user, setUser] = useState<User | null>(null);
  const [poke, setPoke] = useState<Pokemon | null>(null);
  useEffect(()  => {
    const data = window.sessionStorage.getItem("user");
    if (data != null) setUser(JSON.parse(data));
  }, [])
  useEffect(()  => {
    const data = window.sessionStorage.getItem("poke");
    if (data != null) setPoke(JSON.parse(data));
  }, [])
  return (
    <BrowserRouter>
      <Navbar currentUser={user} />
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>

        <Route path="/auth" element={<Login currentUser={user} updateCurrentUser={setUser} />}></Route>
        <Route path="/home" element={<Home currentUser={user} />}></Route>
        <Route path="/inventory" element={<Inventory currentUser={user}/>}></Route>
        <Route path="/profile" element={<Profile currentUser={user}/>}></Route>
        <Route path="/pokemon" element={<Addpoke/>}></Route>
        <Route path="/pokemon_details" element={<Pokemon_details currentPoke={poke}/>}></Route> 
        <Route path="/about" element={<About/>}></Route>


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
