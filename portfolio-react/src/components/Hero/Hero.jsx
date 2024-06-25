import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'

const Hero = () => {
  return (
    <div id='home' className="hero">
        <h1>I'm<span className="name"> Kitz Mavin</span>, Video Editor & Website Programmer</h1>
        <img src={profile} alt="" />
        <p >I am a freelance video editor and beginner programmer with basic knowledge of front-end developing and Java. Currently taking 
          Information Technology in Mobile Application and Website Development (ITMAWD) Strand in STI College Alabang.
 </p>
            <div className="hero-buttons">
                <a href="https://drive.google.com/file/d/1CZ0jdHbJ8cSwntoWK0QPnD26BthxS3BN/view?usp=sharing" target='_blank'><div className="hero-resume">Resumé</div></a>
            </div>

    </div>
  )
}

export default Hero