import React from 'react'
import './banner.css'


const Hero = () => {
    return (
        <div className="banner">
            <div className="content">
            <h1>One page for everyone</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Error et quaerat temporibus by <a href="#">Angelo Dorange</a>.</p>
            <div className="action">
                <a className="btn" href="#">Learn more</a>
                <a className="btn btn-primary" href="#">Ipsum more</a>
            </div>
            </div>
        </div>
    )
}

export default Hero