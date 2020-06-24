import React, { useEffect } from 'react'
import './Product.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'
import prettyLady from '../images/pretty-lady.jpg'
import prettyLadySmall from '../images/pretty-lady-small.jpg'
import phoneMsg from '../images/phone-msg.svg'
import skype from '../images/skype.svg'
import visa from '../images/visa.svg'
import cocaCola from '../images/coca-cola.svg'
import google from '../images/google.svg'
import puma from '../images/puma.svg'
import adidas from '../images/adidas.svg'
import samsung from '../images/samsung.svg'
import designed from '../images/designed.svg'
import scalability from '../images/scalability.svg'
import fingerprint from '../images/fingerprint.svg'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram-logo.svg'
import twitter from '../images/twitter.svg'
import dotsPattern from '../images/dots-pattern.svg'
import graviiLogo from '../images/gravii-logo.svg'


const Product = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <>
           <div className="pretty-lady">
                <img src={prettyLady} alt="pretty-lady"/>
           </div>
           <div className="pretty-lady-small">
                <img src={prettyLadySmall} alt="pretty-lady"/>
           </div>
           <div data-aos="fade-left" 
           className="product-right-text">
               <div>
                   <img src={phoneMsg} alt="phone-msg"/>
               </div>
               <h1>Guaranteed to give you the best experience in banking</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
                   alteration in some form, by injected humour, or randomised words which don't 
                   look even slightly believable. 
                </p>
                <a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} href="#">Get Started</a>
           </div>
           <div className="logos-below-lady">
               <div>
                <div data-aos="zoom-in" className="wrapper">
                    <p className="trusted-by">Trusted by</p>
                    <div>
                        <img src={skype} alt="skype"/> 
                    </div>
                    <div>
                        <img src={visa} alt="visa"/> 
                    </div>
                    <div>
                        <img src={cocaCola} alt="coca-cola"/> 
                    </div>
                    <div>
                        <img src={google} alt="google"/> 
                    </div>
                    <div>
                        <img src={puma} alt="puma"/> 
                    </div>
                    <div>
                        <img src={adidas} alt="adidas"/> 
                    </div>
                    <div>
                        <img src={samsung} alt="samsung"/> 
                    </div>
                </div>
               </div>
           </div>
           <div data-aos="zoom-in" className="features">
               <p>Features</p>
               <h1>Designed with everyone in mind</h1>
           </div>
           <div className="dots-pattern">
               <img src={dotsPattern} alt="dots-pattern"/>
           </div>
           <div data-aos="fade-up" className="below-features">
               <div className ="one" data-aos="fade-up">
                   <div>
                       <img src={designed} alt="designed"/>
                   </div>
                   <h1>Designed with Users in Mind</h1>
                   <p>Get curated content and design inspiration delivered straight to your inbox.</p>
                   <motion.a href="#">Learn more</motion.a>
               </div>
               <div className ="one" data-aos="fade-up">
                    <div>
                       <img src={scalability} alt="scalability"/>
                   </div>
                   <h1>Scalability</h1>
                   <p>Get curated content and design inspiration delivered straight to your inbox.</p>
                   <a href="#">Learn more</a>
               </div>
               <div className ="one" data-aos="fade-up">
                    <div>
                       <img src={fingerprint} alt="fingerprint"/>
                   </div>
                   <h1>Security </h1>
                   <p>Get curated content and design inspiration delivered straight to your inbox.</p>
                   <a href="#">Learn more</a>
               </div>
           </div>
           <motion.footer data-aos="fade-up">
               <div data-aos="fade-up" className="footer-logo">
                   <div>
                       <img src={graviiLogo}/>
                   </div>
               </div>
               <div data-aos="fade-up" className="first-row-box">
                   <h1>Get Started</h1>
                   <motion.a whileHover={{ scale: 1.1, originX: 0 }} transition={{ type: "spring", stiffness: 300 }} href="#">Documentation</motion.a>
                   <motion.a whileHover={{ scale: 1.1, originX: 0 }} transition={{ type: "spring", stiffness: 300 }} href="#">Pricing</motion.a>
                   <motion.a whileHover={{ scale: 1.1, originX: 0 }} transition={{ type: "spring", stiffness: 300 }} href="#">Tutorials</motion.a>
                   <motion.a whileHover={{ scale: 1.1, originX: 0 }} transition={{ type: "spring", stiffness: 300 }} href="#">Guides</motion.a>
               </div>
               <div data-aos="fade-up" className="second-row-box">
               <h1>Platforms</h1>
                   <motion.a whileHover={{ scale: 1.1, originX: 0 }} transition={{ type: "spring", stiffness: 300 }} href="#">Available on iOS</motion.a>
                   <motion.a whileHover={{ scale: 1.1, originX: 0 }} transition={{ type: "spring", stiffness: 300 }} href="#">Available on Android</motion.a>
                   <motion.a whileHover={{ scale: 1.1, originX: 0 }} transition={{ type: "spring", stiffness: 300 }} href="#">Available on Web</motion.a>
               </div>
               <div data-aos="fade-up" className="newsletter">
                   <h1>Newsletter</h1>
                   <p>Get curated content and design inspiration delivered straight to your inbox. <span><a href="#">Learn more</a></span></p>
                   <div className="form-wrapper">
                        <input type="text" placeholder="Your email"></input>
                        <button>Submit</button>
                   </div>
               </div>
               <div className="second-row">
                   <p>Copyright 2018. <span style={{ color: "#FF7008" }}>Gravii</span><span style={{ color: "#000" }}>.ng.</span> All rights reserved</p>
                   <div className="social-icons">
                       <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                           <img src={instagram} alt="instagram" />
                       </motion.div>
                       <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                           <img src={facebook} alt="facebook" />
                       </motion.div>
                       <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                           <img src={twitter} alt="twitter" />
                       </motion.div>
                   </div>
               </div>
           </motion.footer>
        </>
    )
}

export default Product
