import React from 'react';
import mobius_logo from '../../assets/mobius_logo.png'
import mobius_book from '../../assets/mobius_book.png'
import ellipse from '../../assets/Ellipse_1.png'
import small_book from '../../assets/small_book.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './Home.css'

const Home = () => {
    return (
        <>
            <div className='home' id='#home'>
                <nav>
                    <div className="nav-logo">
                        <img src={mobius_logo} alt="" />
                    </div>
                    <ul className='nav-ul'>
                        <li><AnchorLink className='anchor' href='#home'>Home</AnchorLink></li>
                        <li><AnchorLink className='anchor' href='#about'>About</AnchorLink></li>
                        <li><AnchorLink className='anchor' href='#plan'>Plans</AnchorLink></li>
                        <li><AnchorLink className='anchor' href='#test'>Testimonials</AnchorLink></li>
                        <li>Privacy Policy</li>
                        <li><AnchorLink className='anchor' href='#contact'>More</AnchorLink></li>
                    </ul>
                    <div className="nav-action">
                        Get Started
                    </div>
                </nav>
                <div className="home-left-right">

                    <div className="home-left">
                        <h1>Land job interviews <span>10x</span> Faster</h1>
                        <p>Custom-built resumes that match your goals, keywords, and recruiter expectations.</p>
                        <div className="home-left-button">
                            Get Started
                        </div>
                    </div>
                    <div className="home-right">
                        <div className="home-right-div">
                            <img src={mobius_book} alt="" className='mobius-book'/>
                            <img src={ellipse} alt="" className='ellipse'/>
                            <img src={small_book} alt="" className='smallbook'/>
                            <div className="home-right-caption">
                                Download Free E-Book
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;