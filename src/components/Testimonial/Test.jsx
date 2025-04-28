import React from 'react';
import small_polygon from '../../assets/small_polygon.png'
import up_arrow from '../../assets/up_arrow.png'
import heart from '../../assets/heart.png'
import star from '../../assets/star.png'
import profile from '../../assets/profile.png'

import './Test.css';

const Test = () => {
    return (
        <>
        <div className="main-test" id="test">

            <div className="test">
                <h2>What our clients have to say</h2>
                <br />
                <br />
                <div className="test-video">
                    <div className="test-videos">
                        <div className="video">
                            <div className="video-circle">
                                <img src={small_polygon} alt="" />
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda iste voluptas.</p>
                        <div className="arrow-but">
                            <img src={up_arrow} alt="" className='arrow' />
                        </div>
                    </div>
                    <div className="test-videos">
                        <div className="video">
                            <div className="video-circle">
                                <img src={small_polygon} alt="" />
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda iste voluptas.</p>
                        <div className="arrow-but">
                            <img src={up_arrow} alt="" className='arrow' />

                        </div>
                    </div>
                    <div className="test-videos">
                        <div className="video">
                            <div className="video-circle">
                                <img src={small_polygon} alt="" />
                            </div>
                        </div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere assumenda iste voluptas.</p>
                        <div className="arrow-but">
                            <img src={up_arrow} alt="" className='arrow' />

                        </div>
                    </div>
                </div>
                <div className="action-but">
                    <div className="but1">
                        More customers testimonials
                        <img src={up_arrow} alt="" className='button-arrow' />
                    </div>
                    <div className="but2">
                        Get Started
                    </div>
                </div>
            </div>
            <br />
            <div className="test-2">
                <h2>Why Choose Us?</h2>
                <div className="test-2-main-box">

                    <div className="test-2-box">
                        <div className="test-2-logo">
                            <img src={heart} alt="" className='test-2-logo-pic'/>
                        </div>
                        <div className="test-2-mid">
                            <h4>Tried, Tested, Trusted</h4>
                        </div>
                        <div className="test-2-end">
                            <p>Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.</p>
                        </div>
                    </div>
                    <div className="test-2-box">
                        <div className="test-2-logo">
                            <img src={profile} alt="" className='test-2-logo-pic'/>
                        </div>
                        <div className="test-2-mid">
                            <h4>Real People, Real Help</h4>
                        </div>
                        <div className="test-2-end">
                            <p>A hands-on team that actually cares — guiding you through every twist in your career path.</p>
                        </div>
                    </div>
                    <div className="test-2-box">
                        <div className="test-2-logo">
                            <img src={star} alt="" className='test-2-logo-pic'/>
                        </div>
                        <div className="test-2-mid">
                            <h4>Beat the Line</h4>
                        </div>
                        <div className="test-2-end">
                            <p>We search, shortlist, and apply for you, so your name shows up first — every single day</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}
export default Test;