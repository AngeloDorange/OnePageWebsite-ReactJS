import React, {useState} from 'react'
import './nav.css'


const Navigation = () =>{

  const [active, setActive] = useState("nav__menu");

  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggle = () => {
    active === "nav__menu" ? setActive("nav__menu nav__active") : setActive("nav__menu");

    toggleIcon === "nav__toggler" ? setToggleIcon("nav__toggler toggle") : setToggleIcon("nav__toggler");
  };


    return (
       <nav className="nav">
         <a href="#" className="nav__brand"><span>U</span>NION</a>

         <ul className={active}>
           <li className="nav__item"><a href="#" className="nav__link active">Home</a></li>
           <li className="nav__item"><a href="#" className="nav__link">Explore</a></li>
           <li className="nav__item"><a href="#" className="nav__link">Testimony</a></li>
           <li className="nav__item"><a href="#" className="nav__link">Pricing</a></li>
           <li className="nav__item"><a href="#" className="nav__link">Services</a></li>
           <li className="nav__item"><a href="#" className="nav__link">Team</a></li>
           <li className="nav__item"><a href="#" className="nav__link">FAQ</a></li>
           <li className="nav__item"><a href="#" className="nav__link link__sign">Sign up free</a></li>
         </ul>

         <div onClick={navToggle} className={toggleIcon}>
           <div className="line1"></div>
           <div className="line2"></div>
           <div className="line3"></div>
         </div>
       </nav>
    )
}

export default Navigation