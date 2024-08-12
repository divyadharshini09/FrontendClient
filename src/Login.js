import React from 'react';
import './Login.css';
import {useState} from "react";
import Axios from "axios";
//import { Link } from "react-router-dom";
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const loginUser = (e) =>{
        e.preventDefault();
        Axios.post("http://localhost:3001/loginUser",{
           email,password
        }).then((result)=>{
           console.log(result);
        })
        .catch(err=> console.log(err));
    };
    return(
        <body id='bb'>
        <center>
        <div id='dp'>
        <form>
            <br></br>
            <h2>
              Login
            </h2>
            <label>Email:</label>
            <br></br>
            <input 
            type="email" 
            placeholder="Enter email address"
            onChange={(event)=>{
                setEmail(event.target.value);
            }}></input>
            <br></br>
            <label>Password:</label>
            <br></br>
            <input type="password" placeholder="Enter password"
             onChange={(event)=>{
                setPassword(event.target.value);
            }}></input>
            <br></br>
            <br></br>
            <button class="but" onclick={loginUser}>Login</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </form>
        </div>
    </center>
    </body>
    );
}
export default Login;