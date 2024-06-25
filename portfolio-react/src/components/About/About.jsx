import React from 'react'
import './About.css'
import profile_image from '../../assets/about_prof.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_image} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                <h1>About Me</h1>
                    <p>I am an IT Student pursuing my passion as a video editor. Other than that, I also do basic programming. Particularly HTML, CSS, and Java.</p>
                    <p>I am still exploring my options on what career path to take. But hopefully I end up in the multimedia industry as I want to put my creative and programming savvy to good use.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Video Editting</p><hr style={{width:"50%"}}/> <p>7/10 </p></div>
                    <div className="about-skill"><p>Design</p><hr style={{width:"40%"}}/> <p>5/10 </p></div>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"25%"}}/> <p>3.5/10 </p></div>
                    <div className="about-skill"><p>Java </p><hr style={{width:"35%"}}/> <p>4.5/10 </p></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"30%"}}/> <p>4/10 </p></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About