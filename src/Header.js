import React from 'react';
//import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';
function Header(){
    return(
      <>
    <nav class="navi">
        <div>
          <img id="im" src='https://cdn.pixabay.com/photo/2022/08/22/03/30/logo-7402626_640.png'></img>
        </div>
        <div id="name">Glowio</div>
        <div id="n"><Link to="/Login">Login</Link></div>
        <div id="n"><Link to="/Register">Register</Link></div>
        <div id="n"><Link to="/Contact">Contact</Link></div>   
    </nav>
    <div>
      <h1>Welcome</h1>
    </div>
    </>
    );
};
export default Header;