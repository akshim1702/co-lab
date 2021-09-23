import React from 'react'
import './ContactUS.css'
const ContactUS = () => {
    return (
        <div className="contactUS">
            <h1>
                Contact US
            </h1>
            <div className="contact">
                <div className="ContactName">
                <div className="first">
                <label htmlFor="FirstName">First Name :</label>
                <input type="text" name="FirstName" id="FirstName" />
                </div>
                <div className="last">
                <label htmlFor="LastName">Last Name :</label>
                <input type="text" name="LastName" id="LastName" />
                </div>
                </div>

                <div className="ContactDetail">
                <div className="emailID">
                <label htmlFor="email">Email-ID :</label>
                <input type="email" name="email" id="email" />
                </div>
                <div className="phoneNO">
                <label htmlFor="phone">Phone Number :</label>
                <input type="number" name="phone" id="phone" />
                </div>
                </div>
                <div className="message">
                <label htmlFor="query">Consents :</label>
                <textarea name="query" id="query" cols="75" rows="10"></textarea>
                </div>
                    
               
            </div>
        </div>
    )
}

export default ContactUS
