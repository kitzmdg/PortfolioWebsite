import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/kmlogores.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => {

    const [menu, setMenu] = useState("home")

    return (
        <div className="navbar">
            <a href="#home" target='_blank'><img src={logo} alt="" /></a>
            <ul className="nav-menu">
                <li><AnchorLink className='anchor-link' offset={30} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"}</li>
                <li><AnchorLink className='anchor-link' offset={30} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"}</li>
                <li><AnchorLink className='anchor-link' offset={20} href='#projects'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu==="projects"}</li>
            </ul>

            <div className="nav-connect"><AnchorLink className='anchor-linkconnect' offset={-200} href='#contact'>Connect With Me</AnchorLink></div>
        </div>

    )
}

export default NavBar