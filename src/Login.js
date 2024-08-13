import React, { useState } from 'react';
import './Login.css';
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // Not used now, but keep it for future use
    const [errorMessage, setErrorMessage] = useState(""); // State for error message
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/loginUser", { email })
            .then((result) => {
                const { status, message } = result.data;
                console.log(message);
                if (status === "success") {
                    navigate("/HomePage");
                } else {
                    setErrorMessage(message); 
                }
            })
            .catch(err => {
                console.error(err);
                setErrorMessage("An error occurred. Please try again."); // Set a generic error message
            });
    };

    return (
        <div id='bb'>
            <center>
                <div id='dp'>
                    <form>
                        <br />
                        <h1 className='he'>Login</h1>
                        <br />
                        {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
                        <br></br>
                        <label className='l'>Email:</label>
                        <br />
                        <input
                            type="email"
                            placeholder="Enter email address"
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <br />
                        <label className='l'>Password:</label>
                        <br />
                        <input
                            type="password"
                            placeholder="Enter password"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <br />
                        <br />
                        <button className="but" onClick={loginUser}>Login</button>
                        <br />
                        <br />
                        <br />
                        <br />
                    </form>
                </div>
            </center>
        </div>
    );
}

export default Login;
