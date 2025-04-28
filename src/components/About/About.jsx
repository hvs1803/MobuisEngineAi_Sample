import React from 'react';
import how_we_work from '../../assets/how_we_work';
import lady_image from '../../assets/lady-image.png'
import man_image from '../../assets/man-image.png'
import mini_circle from '../../assets/mini-circle.png'
import linked_logo from '../../assets/linkedin-logo.png'
import man_image2 from '../../assets/man_image2.png'
import big_image from '../../assets/big-image.png'

import './About.css';

const About = () => {
    return (
        <>
            <div className="about" id='about'>
                <div className="about-first">
                    <h2>How we work?</h2>
                    <div className="about-container">
                        {how_we_work.map((e, idx) => {
                            return <div key={idx} className='how-format'>
                                <h3>{e.s_no}</h3>
                                <hr />
                                <p>{e.s_desc}</p>
                            </div>
                        })}
                    </div>
                </div>
                <br />
                <div className="about-second">
                    <h2>About Us</h2>
                    <div className="about-second-div">
                        <div className="about-person-container">
                            <div className="person-container1">
                                <div className="big-circle">
                                    <img src={man_image} alt="" className='man' />
                                </div>
                                <img src={mini_circle} alt="" className='mini' />
                                <img src={linked_logo} alt="" className='linked' />
                            </div>
                            <div className="person-container-detail">
                                <p>Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.

                                    Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.</p>
                            </div>
                        </div>
                        <div className="about-person-container">
                            <div className="person-container1">
                                <div className="big-circle">
                                    <img src={lady_image} alt="" className='female' />
                                </div>
                                <img src={mini_circle} alt="" className='mini1' />
                                <img src={linked_logo} alt="" className='linked1' />
                            </div>
                            <div className="person-container-detail">
                                <p>Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.

                                    With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.</p>
                            </div>
                        </div>
                    </div>
                    <p>Learn more about our Board of Advisors</p>
                    <p>Follow us on our Linkedin page</p>
                    <br />
                </div>

            </div>

        </>
    )
}
export default About;