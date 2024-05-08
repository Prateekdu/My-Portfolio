import React from 'react'
import './Hero.css'
const Hero = () => {
    return (
        <div>
            <section id="Hero" className="hero-container">
                <div className="hero-content">
                    <h2>Prateek Dubey</h2>
                    <h3>Software Developer</h3>
                    <p>
                    Enthusiastic programmer seeking full-time opportunities as a Software Developer or Full-stack Developer. Eager to contribute skills to an innovative organization, combining a passion for learning with a goal-oriented approach. Excited about creating and implementing ideas in a dynamic and growth-focused environment.
                    </p>
                </div>
                <div className="hero-img">
                    <div>
                        <div className="tech-icon">
                            <img src='./assets/images/logo192.png' alt='' />
                        </div>
                        <img src={process.env.PUBLIC_URL + './assets/images/oo.png'} alt='' />
                    </div>
                    <div>
                        <div className="tech-icon">
                            <img src='./assets/images/html1.png' alt='' />
                        </div>
                        <div className="tech-icon">
                            <img src='./assets/images/css1.png' alt='' />
                        </div>
                        <div className="tech-icon">
                            <img src='./assets/images/js.png' alt='' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero