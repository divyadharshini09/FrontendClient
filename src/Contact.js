import React from 'react';
import './Contact.css';
function Contact(){
    return(
        <body id='bb'>
        <center>
        <div id='dk'>
        <form>
            <br></br>
            <h2>
              Contact Form
            </h2>
            <label>Full Name:</label>
            <br></br>
            <input type="text" placeholder="Enter username/email"></input>
            <br></br>
            <label>Email Address:</label>
            <br></br>
            <input type="" placeholder="Enter password"></input>
            <br></br>
            <label>Subject:</label>
            <br></br>
            <input type='text'></input>
            <br></br>
            <label>Message:</label>
            <br></br>
            <textarea></textarea>
            <br></br>
            <br></br>
            <input type="submit" class="but"></input>
            <br></br>
            <br></br>
            <br></br>
        </form>
        </div>
    </center>
    </body>
    );
}
export default Contact;