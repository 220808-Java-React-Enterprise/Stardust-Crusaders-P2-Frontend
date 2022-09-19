import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css"
import PokeApi from "../../utils/ApiConfigs";
import User from "../../models/User";

/*
 * export default: a module is a self contained unit that can expose assets to other modules using export, and acquire assets from other modules using import. 
 */
export default function Register() {
    /* 
     * What is a Hook? A Hook is a special function that lets you “hook into” React features. 
     * For example, useState is a Hook that lets you add React state to function components.
     */
    const [username, setUsername] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [given_name, setGiven_name] =useState("");
    const [surname, setSurname]= useState("");
    const [email, setEmail]= useState("");
    const navigate = useNavigate();

    function updateUsername(event: any) {
        setUsername(event.target.value);
    }

    function updatePassword(event: any) {
        setPassword1(event.target.value);
    }

    function confirmPassword(event: any) {
        setPassword2(event.target.value);
    }
    function updateGiven_name(event: any) {
        setGiven_name(event.target.value);
    }
    function updateSurname(event: any) {
        setSurname(event.target.value);
    }
    function updateEmail(event: any) {
        setEmail(event.target.value);
    }

    function submit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        PokeApi.post("/users/signup?role=user", {
            username: username,
            password1: password1,
            password2: password2,
            given_name: given_name,
            surname: surname,
            email: email
        })
            .then(() => {
                alert("Account created successfully!");
                navigate("/home");
            })
            .catch(error => {
                alert(error.response.data.message);
            });

        setUsername("");
        setPassword1("");
        setPassword2("");
        setGiven_name("");
        setSurname("");
        setEmail("");
        
    }

    return (
        <>
            <body>
                <div>
                    <div className="background">
                        <div className="shape"></div>
                        <div className="shape"></div>
                    </div>
                    <form onSubmit={submit}>
                        <h3>Register</h3>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Username" id="username" value={username} onChange={updateUsername}/>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" value={password1} onChange={updatePassword}/>

                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" id="password2" value={password2} onChange={confirmPassword} />

                        <label htmlFor="given_name">First Name</label>
                        <input type="text" placeholder="First Name" id="given_name" value={given_name} onChange={updateGiven_name} />

                        <label htmlFor="surname">Last Name</label>
                        <input type="text" placeholder="Last Name" id="surname" value={surname} onChange={updateSurname} />

                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email Address" id="email" value={email} onChange={updateEmail} />

                        <button type="submit">Create Account</button>
                    </form>
                </div>
            </body>
        </>
    );

}