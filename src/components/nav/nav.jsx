import React, {useEffect} from 'react'
import {useState} from 'react'
import './nav.css'
import Bar from '../../assets/bars.svg'


const Navigation = () =>{


    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <div className="logo">
              <label><a href="#"><span>U</span>NION</a></label>
            </div>

                <ul className="navigation">
                <li><a className="active" href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</a></li>
                <li><a href="#product" onClick={() => setActiveNav('#product')} className={activeNav === '#product' ? 'active' : ''}>Explore</a></li>
                <li><a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}>Testimony</a></li>
                <li><a href="#price" onClick={() => setActiveNav('#price')} className={activeNav === '#price' ? 'active' : ''}>Pricing</a></li>
                <li><a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}>Services</a></li>
                <li><a href="#team" onClick={() => setActiveNav('#team')} className={activeNav === '#team' ? 'active' : ''}>Team</a></li>
                <li><a href="#faq" onClick={() => setActiveNav('#faq')} className={activeNav === '#faq' ? 'active' : ''}>FAQ</a></li>
                <li><a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a></li>
                <li><a className="sign" href="#">Sign up free</a></li>
                </ul>

        </nav>
    )
}

export default Navigation