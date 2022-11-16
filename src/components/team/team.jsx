import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './team.css'
import Pic1 from '../../assets/pic-1.png'
import Pic2 from '../../assets/pic-2.png'
import Pic3 from '../../assets/pic-4.png'
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { FiDribbble } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FaGithubAlt } from 'react-icons/fa';



const Team = () =>{
    useEffect (() => {
        Aos.init({ duration: 2000, easing: 'ease-in' });
    }, [])
    return (
        <section id="team" className="team">
            <div className="title">
                <h1>Meet the Team</h1>
                <p className="afte">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> reiciendis maxime magni ipsum doloremque quia, quibusdam impedit dolores qui quis maiores?</p>
            </div>

            <div className="content">
            <div className="members">

<div className="member" data-aos="fade-right">
    <div className="image">
        <img src={Pic1} alt="" />
    </div>
    <h3>Roger Garfield</h3>
    <h4>Lead Developer</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nesciunt animi veniam atque expedita optio nemo quaerat consequatur beatae est vel hic repellat et non sint facere, ipsum mollitia. Ipsum.</p>
    <ul className="social">
        <li><a href="#"><FaFacebookF /></a></li>
        <li><a href="#"><BsTwitter /></a></li>
        <li><a href="#"><FiDribbble /></a></li>
        <li><a href="#"><FiInstagram /></a></li>
        <li><a href="#"><FaGithubAlt /></a></li>
    </ul>
</div>

<div className="member">
    <div className="image">
        <img src={Pic2} alt="" />
    </div>
    <h3>Ross Standford</h3>
    <h4>Product Designer</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nesciunt animi veniam atque expedita optio nemo quaerat consequatur beatae est vel hic repellat et non sint facere, ipsum mollitia. Ipsum.</p>
    <ul className="social">
        <li><a href="#"><FaFacebookF /></a></li>
        <li><a href="#"><BsTwitter /></a></li>
        <li><a href="#"><FiDribbble /></a></li>
        <li><a href="#"><FiInstagram /></a></li>
        <li><a href="#"><FaGithubAlt /></a></li>
    </ul>
</div>

<div className="member" data-aos="fade-left">
    <div className="image">
        <img src={Pic3} alt="" />
    </div>
    <h3>Kevin Steeve</h3>
    <h4>Full Stack Developer</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nesciunt animi veniam atque expedita optio nemo quaerat consequatur beatae est vel hic repellat et non sint facere, ipsum mollitia. Ipsum.</p>
    <ul className="social">
        <li><a href="#"><FaFacebookF /></a></li>
        <li><a href="#"><BsTwitter /></a></li>
        <li><a href="#"><FiDribbble /></a></li>
        <li><a href="#"><FiInstagram /></a></li>
        <li><a href="#"><FaGithubAlt /></a></li>
    </ul>
</div>
</div>
            </div>
            
        </section>
    )
}

export default Team