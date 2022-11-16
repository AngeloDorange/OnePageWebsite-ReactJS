import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import { BsFillLaptopFill } from 'react-icons/bs';

import './serv.css'


const Service = () =>{
    useEffect (() => {
        Aos.init({ duration: 2000, easing: 'ease-in' });
    }, [])
    return (
        <section id="service" className="service">
            <div className="title">
                <h1>We Offer Services</h1>
                <p className="afte">Lorem, ipsum dolor sit amet consectetur adipisicing elit. reiciendis maxime magni <br /> ipsum doloremque quia, quibusdam impedit dolores qui quis maiores?</p>
            </div>

            <div className="cards">
                <div className="content__serv1">
                <strong><BsFillLaptopFill /></strong>
                <div className="serv1" data-aos="zoom-in">
                <h1>Hand-crafted</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus deserunt natus quos est maiores placeat eum praesentium.</p>
                </div>
                </div>

                <div className="content__serv1">
                <strong><BsFillLaptopFill /></strong>
                <div className="serv2" data-aos="zoom-in">
                <h1>Landing Page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus deserunt natus quos est maiores placeat eum praesentium.</p>
                </div>
                </div>

                <div className="content__serv1">
                <strong><BsFillLaptopFill /></strong>
                <div className="serv3" data-aos="zoom-in">
                <h1>Happy Clients</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus deserunt natus quos est maiores placeat eum praesentium.</p>
                </div>
                </div>
           

                <div className="content__serv1">
                <strong><BsFillLaptopFill /></strong>
                <div className="serv1" data-aos="zoom-in">
                    <h1>Light and Fast</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus deserunt natus quos est maiores placeat eum praesentium.</p>
                </div>
                </div>

                <div className="content__serv1">
                <strong><BsFillLaptopFill /></strong>
                <div className="serv2" data-aos="zoom-in">
                <h1>Smooth Animation</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus deserunt natus quos est maiores placeat eum praesentium.</p>
                </div>
                </div>

                <div className="content__serv1">
                <strong><BsFillLaptopFill /></strong>
                <div className="serv3" data-aos="zoom-in">
                <h1>Looks Amazing</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptatibus deserunt natus quos est maiores placeat eum praesentium.</p>
                </div>
                </div>
            </div>

            <div className="four">
                <a className="btn btn-fourth" href="#">Learn more</a>
            </div>

        </section>
    )
}

export default Service