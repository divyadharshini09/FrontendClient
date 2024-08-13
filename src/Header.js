import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header(){
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
};
    return(
      <>
    <nav className="navi">
        <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
        <div>
          <img id="im" alt="logo" src='https://cdn.pixabay.com/photo/2022/08/22/03/30/logo-7402626_640.png'></img>
        </div>
        <div id="name">chit<b>Chatter</b></div>
        <div id="n"><Link to="/Login">Login</Link></div>
        <div id="n"><Link to="/Register">Register</Link></div>
        <div id="n"><Link to="/Contact">Contact</Link></div> 
        <div className={isSidebarOpen ? "sidebar open" : "sidebar"}>
                    <button className="close-btn" onClick={toggleSidebar}>×</button>
                    <nav className="sidebar-nav">
                        <Link to="/" onClick={toggleSidebar}>Home</Link>
                        <Link to="/AboutUs" onClick={toggleSidebar}>About Us</Link>
                        <Link to="/mail" onClick={toggleSidebar}>Privacy Policy</Link>
                        <Link to="/mail" onClick={toggleSidebar}>Your Privacy Rights</Link>
                        <Link to="/mail" onClick={toggleSidebar}>Terms of Use</Link>
                    </nav>
         </div> 
    </nav>
    <div class="wel">
            <center>
              <h1 class="x">m<b>O</b>re than <b>JUST</b> text</h1><br></br>
              <h1 class="y">Chat-<b>share</b>-connect <b>anytime</b>, anywhere!</h1>
            </center>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
    </div>
    <div id="end">
    <footer>
            <hr></hr>
        <div class="sm">
            <div></div>
            <div>
                <img id="ss" alt="smm" src="https://static-00.iconduck.com/assets.00/linkedin-icon-1024x1024-k39l5ziu.png"/>
            </div>
            <div>
                <img id="ss" alt="smm" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"/>
            </div>
            <div>
                <img id="ss" alt="smm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTncNdsURrHCorSeR9usPvHN_6XPQp3toe3tA&s"/>
            </div>
            <div>
                <img id="ss" alt="smm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgbIyAxWwj28ZuHOSMkSIxbjx732AjOfXeA&s"/>
            </div>
            <div>
            </div>
        </div>
        <div class="in">
            For More Info
        </div>
        <div class="mail">
           <div></div> 
           <div>
            <img id="ss" alt="smm" src="https://i.pinimg.com/originals/d5/02/3f/d5023f1e5518c1955475536ed2c001a7.jpg"/>
           </div> 
           <div>chitchatter@gmail.com</div>
           <div></div> 
        </div>
        </footer>
    </div>
    </>
    );
};
export default Header;