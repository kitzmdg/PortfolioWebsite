import React from 'react'
import './Footer.css'
import logo from '../../assets/kmlogores.png'
import fbicon from '../../assets/fbicon.png'
import ghicon from '../../assets/ghicon.png'
import igicon from '../../assets/igicon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    <p>A Freelance Video Editor that has basic knowledge about programming such as Java, HTML, CSS, etc.</p>
                </div>
                <div className="footer-top-right">
                    <p>Feel free to reach out to my socials too.╸╸╸╸➤</p>
                    <a href="https://www.facebook.com/kitzmdg/" target='_blank'><img src={fbicon} alt="" /></a>
                    <a href="https://github.com/kitzmdg" target='_blank'><img src={ghicon} alt="" /></a>
                    <a href="https://www.instagram.com/_ma.vinndiagram/" target='_blank'><img src={igicon} alt="" /></a>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className='footer-bottom-left'>© 2024 Kitz Mavin. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer