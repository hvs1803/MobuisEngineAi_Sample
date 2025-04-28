import React from 'react';
import front_arrow from '../../assets/front-arrow.png'
import './Contact.css'

const Contact = ()=>{
    return(
        <>
            <div className='contact' id='contact'>
                <h3>STILL HAVE DOUBTS?</h3>
                <h2>Contact us</h2>
                <p><img src={front_arrow} alt=""/></p>
            </div>
        </>
    )
}
export default Contact;