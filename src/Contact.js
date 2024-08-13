import React from 'react';
import './Contact.css';
function Contact(){
    return(
        <body id='bb'>
        <center>
        <div id='dk'>
        <form>
            <br></br>
            <h1 class="he">
              Contact Form
            </h1>
            <br></br>
            <label className='l'>Full Name:</label>
            <br></br>
            <input type="text" placeholder="Enter username/email"></input>
            <br></br>
            <label className='l'>Email Address:</label>
            <br></br>
            <input type="" placeholder="Enter password"></input>
            <br></br>
            <label className='l'>Subject:</label>
            <br></br>
            <input type='text'></input>
            <br></br>
            <label className='l'>Message:</label>
            <br></br>
            <textarea></textarea>
            <br></br>
            <br></br>
           <button class="but">Submit</button>
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