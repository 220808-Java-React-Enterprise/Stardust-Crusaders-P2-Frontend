import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css"

export default function About(){


    return(
        <>
            <div className="about">
                <h1>About Us:</h1>
                <p>Just a group of 5 software engineer pals that wanted to simplify the daycare system. Ensuring your ability to work stress free while your pokemon buds are taken care of!</p>
                <h3>How it works:</h3>
                
                <img src="assets\pokegif.gif"></img>
                
            </div>
        </>
    )
    
}