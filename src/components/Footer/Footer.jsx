import React from 'react';
import './Footer.css';
import mobuis from '../../assets/mobuis-logo.png';
import l from '../../assets/l.png'
const Footer = ()=>{
    return(
        <>
        <div className="footer" id="footer">
            <div className="footer-boxes1">
                <img src={mobuis} alt="" />
                <h5>MobuisEngine</h5>
            </div>
            <hr />
            <div className="footer-boxes3">
                <div className="footer-box3-box1">
                    <p className='underline'>Address</p>
                    <p>1875 Mission St Ste 103 #450
                    San Francisco, CA 94103</p>
                </div>
                <div className="footer-box3-box1">
                    <p className='underline'>Email</p>
                    <p className='underline'>finance@mobiusengine.a</p>
                </div>
                <div className="footer-box3-box1">
                    <p className='underline'>Telephone</p>
                    <p>650-889-6026</p>
                </div>
                <div className="footer-box3-box2">
                    <p>Socials</p>
                    <div className="footer-box3-box2-link">
                    <p><img src={l} alt="" /></p>
                    <p><img src={l} alt="" /></p>
                    </div>
                </div>
            </div>
            <div className="footer-boxes2">
                <p className='llc'>© 2023 Mobiusservices LLC</p>
                <p className='p-last'>Terms & Conditions</p>
                <p className='p-last'>Privacy Policy</p>
            </div>
        </div>
        </>
    )
}
export default Footer;