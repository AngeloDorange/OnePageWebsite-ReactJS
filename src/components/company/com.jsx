import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './com.css'
import Client1 from '../../assets/logo1.png'
import Client2 from '../../assets/logo2.png'
import Client3 from '../../assets/logo3.png'
import Client4 from '../../assets/logo4.png'
import Client5 from '../../assets/logo5.png'


const Trust = () =>{
    useEffect (() => {
        Aos.init({ duration: 2000, easing: 'ease-in' });
    }, [])
    return (
        <section className="company">
            <div className="title">
                <h1>Trusted By</h1>
                <p className="afte">We're trusted by these popular companies</p>
            </div>

            <div className="content">

                <ul className="client" data-aos="zoom-in" data-aos-delay="700">
                   <li><img src={Client1} alt="" /></li>
                   <li><img src= {Client2} alt="" /></li>
                   <li><img src={Client3} alt="" /></li>
                   <li><img src={Client4} alt="" /></li>
                   <li><img src={Client5} alt="" /></li>
                </ul>

            </div>
        </section>
    )
}

export default Trust