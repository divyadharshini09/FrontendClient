import React from 'react';
import {useState} from "react";
import Axios from "axios";
import {useNavigate} from "react-router-dom";
import './Register.css';
function Register(){
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    const createUser = (e) =>{
        e.preventDefault();
        Axios.post("https://backendserver-93kg.onrender.com/createUser",{
            username,email,password
        }).then(result=>{
           console.log(result);
           console.log("hi");
           navigate("/HomePage");
        })
        .catch(err=> console.log(err));
    };
    return(
        <body id='bb'>
        <center>
        <div id='dd'>
        <form>
            <br></br>
            <h1 class="he">
              Sign Up/Register  
            </h1>
            <br></br>
            <label className='l'>Username:</label>
            <br></br>
            <input 
            type="text" 
            placeholder="Enter username" 
            onChange={(event)=>{
                setUsername(event.target.value);
            }}>
            </input>
            <br></br>
            <label className='l'>Email:</label>
            <br></br>
            <input type="email" placeholder="Enter email"
             onChange={(event)=>{
                setEmail(event.target.value);
            }}></input>
            <br></br>
            <label className='l'>Password:</label>
            <br></br>
            <input type="password" placeholder="Enter password"
             onChange={(event)=>{
                setPassword(event.target.value);
            }}></input>
            <br></br>
            <br></br>
            <button className="but" onClick={createUser}>Register</button>
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