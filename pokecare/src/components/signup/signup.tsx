import React, { useState } from "react";

export default function Register() {

   const [username, setUsername] = useState("");
   const [password1, setPassword1] = useState("");
   const [password2, setPassword2] = useState("");


    return(
        <>
        <h1>Create a new Trainer!</h1>
        <input type="text" placeholder="Username" value ={username} onChange={() => setUsername(username)} />
        <br/>
        <input type="password" placeholder="Password" value = {password1} onChange={() => setPassword1(password1)} />
        <br/>
        <input type="password" placeholder="Confirm Password" value= {password2} onChange={() => setPassword2(password2)}/>
        <br/>
        <button>submit</button>

        </>
    );
}