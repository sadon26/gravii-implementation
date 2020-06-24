import React, { useState } from 'react'
import './NavBar.css'
import graviiLogo from '../images/gravii-logo.svg'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const NavBar = () => {
    const [state, setState] = useState(false)
    const navVariants = {
        hidden: {
            y: "-20vh",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "tween", 
                stiffness: 400, 
                duration: 1
            }
        }
    }
    return (
            <div>
                <div className={state ? "nav-bg" : "no-nav-bg"}> 
                </div>
                <nav data-aos="fade-down">
                <div>
                    <img src= {graviiLogo} alt="gravii"/>
                </div>
                <ul className={!state ? "nav-right-texts-wrapper" : "nav-right-texts-wrapper-shrinked"}>
                    <NavLink 
                    onClick={() => setState(false)}
                    className="nav-right-texts" 
                    activeClassName="nav-right-texts-active" 
                    to="/product">
                    <li>Product</li>
                    </NavLink>
                    <NavLink 
                    onClick={() => setState(false)}
                    className="nav-right-texts" 
                    activeClassName="nav-right-texts-active" 
                    to="/aboutus">
                    <li>About Us</li>
                    </NavLink>
                    <NavLink 
                    onClick={() => setState(false)}
                    className="nav-right-texts" 
                    activeClassName="nav-right-texts-active" 
                    to="/contact">
                    <li>Contact</li>
                    </NavLink>
                </ul>
            </nav>
            <motion.div data-aos="fade-down" className="border-below-nav"></motion.div>
            <div className="hamburger" onClick={() => setState(!state)}>
                <div className={state ? "transform-one" : "one"}></div>
                <div className={state ? "transform-two" : "two"}></div>
                <div className={state ? "transform-three" : "three"}></div>
            </div>
        </div>
    )
}

export default NavBar
