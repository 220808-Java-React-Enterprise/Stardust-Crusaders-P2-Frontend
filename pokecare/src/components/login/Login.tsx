import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import PokeApi from "../../utils/ApiConfigs";
import User from "../../models/User";

interface UserProp{
    currentUser: User | null;
    updateCurrentUser: Function; 
  }

/*
 * export default: a module is a self contained unit that can expose assets to other modules using export, and acquire assets from other modules using import. 
 */
export default function Login({currentUser, updateCurrentUser}: UserProp) {
    /* 
     * What is a Hook? A Hook is a special function that lets you “hook into” React features. 
     * For example, useState is a Hook that lets you add React state to function components.
     */
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function updateUsername(event: any) {
        setUsername(event.target.value);
    }

    function updatePassword(event: any) {
        setPassword(event.target.value);
    }


    function submit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        PokeApi.post("/auth", {
            username: username,
            password: password,  
        })
            .then((obj) => {
                let user = { ...obj.data};
                window.sessionStorage.setItem("user", JSON.stringify(user))
                window.sessionStorage.setItem("auth-token", JSON.stringify(obj.headers["user-auth"]));
                updateCurrentUser(user);
                navigate("/home");
                window.location.reload();
            })
            .catch(error => {
                alert(error.response.data.message);
            });

        setUsername("");
        setPassword("");
    }

    function route(event: {preventDefault: () => void; }){
        event.preventDefault();

        navigate("/signup");
    }

    return (
        <>
            <body>
                <div>
                    <div className="loginBackground">
                        <div className="shape"></div>
                        <div className="shape"></div>
                    </div>
                    <form className="loginForm" onSubmit={submit}>
                        <h3>Sign In</h3>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Username" id="username" value={username} onChange={updateUsername}/>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" value={password} onChange={updatePassword}/>

                        <button className="coolButton" type="submit">Sign In</button>
                        
                        <button className="coolButton" onClick={route}>Create an Account!</button>
                        
                    </form>
                </div>
            </body>
        </>
    );

}