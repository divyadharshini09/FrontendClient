import React from 'react';
import Header from './Header';
import {useState} from "react";
import Axios from "axios";
import {BrowserRouter, Routes,Route, useNavigate} from "react-router-dom";
import './Register.css';
function Register(){
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    const createUser = (e) =>{
        Axios.post("http://localhost:3001/createUser",{
            username,email,password
        }).then(result=>{
           console.log(result);
           navigate("/")
        })
        .catch(err=> console.log(err));
    };
    return(
        <body id='bb'>
        <center>
        <div id='dd'>
        <form>
            <br></br>
            <h2>
              Sign Up/Register  
            </h2>
            <label>Username:</label>
            <br></br>
            <input 
            type="text" 
            placeholder="Enter username" 
            onChange={(event)=>{
                setUsername(event.target.value);
            }}>
            </input>
            <br></br>
            <label>Email:</label>
            <br></br>
            <input type="email" placeholder="Enter email"
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
            <button class="but" onClick={createUser}>Submit</button>
            <br></br>
            <br></br>
            <br></br>
        </form>
        </div>
    </center>
    </body>
    );
}
export default Register;