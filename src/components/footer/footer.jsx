import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FiInstagram } from 'react-icons/fi';
import { FaGithubAlt } from 'react-icons/fa';

import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { DiWebplatform } from 'react-icons/di'

import { AiOutlineCopyrightCircle } from 'react-icons/ai'


const Contact = () =>{
    useEffect (() => {
        Aos.init({ duration: 2000, easing: 'ease-in' });
    }, [])
    return (
        <footer className="foot" id="contact">
            <div className="content">

                <div className="parts">
                    <div className="part1" data-aos="fade-down" data-aos-delay="700">
                        <div className="about">
                            <h1>About us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, tempore. Sequi earum veritatis repellat quae omnis quod adipisci ullam itaque.</p>
                        </div>

                        <div className="copy">
                            <p><i><AiOutlineCopyrightCircle /></i> Union Agency 2023.</p>
                            <p>All Rights Reserved.</p>
                            <p>Designed by <span>Angelo Dorange.</span></p>
                        </div>
                    </div>

                    <div className="part2" data-aos="fade-up" data-aos-delay="800">
                        <div className="adress">
                            <h1>Our Adress</h1>
                            
                            <ul>
                                <li><i><FaMapMarkerAlt /></i>198 West 21th Street New York.</li>
                                
                                <li><i><BsTelephone /></i>+ 1235 2355 98</li>
                                    
                                <li><i><HiOutlineMail /></i>Infomywebsite@gmail.com</li>
                                    
                                <li><i><DiWebplatform /></i>www.mywebsite.com</li>
                            </ul>
                            
                        </div>

                        <div className="connect">
                            <h1>Connect with Us</h1>
                            <ul className="social">
                               <li><a href="#"><FaFacebookF /></a></li>
                               <li><a href="#"><BsTwitter /></a></li>
                               <li><a href="#"><FiInstagram /></a></li>
                               <li><a href="#"><FaGithubAlt /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="part3" data-aos="fade-down" data-aos-delay="900">
                        <h1>Drop us a line</h1>
                        <div className="form">
                            <form action="#" method="post">
                                <input type="text" name="name" id="" placeholder='Name' required />
                                <input type="email" name="email" id="" placeholder='Email' required />
                                <textarea name="message" id="" cols="30" rows="10" placeholder='Message' required></textarea>
                            </form>
                        </div>
                           <a className="btn btn-message" href="#">Send Message</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact