import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './price.css'


const Price = () =>{
    useEffect (() => {
        Aos.init({ duration: 2000, easing: 'ease-in' });
    }, [])
    return (
        <section id="price" className="price">
            <div className="title">
                <h1>Plans built for everyone</h1>
                <p className="afte">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> reiciendis maxime magni ipsum doloremque quia, quibusdam impedit dolores qui quis maiores?</p>
            </div>
            <div className="content">
            <div className="cards">
                <div className="card" data-aos="fade-right">
                    <h3>Starter</h3>
                    <p><sup>$</sup> 9</p>
                    <span>/Month</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod quos fugiat, molestias aliquam et dolores quo beatae consequatur eveniet.</p>
                    <a className="btn btn-third" href="#">SELECT PLAN</a>
                </div>

                <div className="card" data-aos="zoom-in">
                    <h3>Basic</h3>
                    <p><sup>$</sup> 27</p>
                    <span>/Month</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod quos fugiat, molestias aliquam et dolores quo beatae consequatur eveniet.</p>
                    <a className="btn btn-third" href="#">SELECT PLAN</a>
                </div>

                <div className="card" data-aos="zoom-in">
                    <h3>Pro</h3>
                    <p><sup>$</sup> 74</p>
                    <span>/Month</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod quos fugiat, molestias aliquam et dolores quo beatae consequatur eveniet.</p>
                    <a className="btn btn-third btn-red" href="#">SELECT PLAN</a>
                </div>

                <div className="card" data-aos="fade-left">
                    <h3>Unlimited</h3>
                    <p><sup>$</sup> 140</p>
                    <span>/Month</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quod quos fugiat, molestias aliquam et dolores quo beatae consequatur eveniet.</p>
                    <a className="btn btn-third" href="#">SELECT PLAN</a>
                </div>
            </div>

            </div>
            
            <div className="more">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, soluta? <a className="Learn" href="#">Learn more</a></p>
            </div>
        </section>
    )
}

export default Price