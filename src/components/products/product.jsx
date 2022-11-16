import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './product.css'
import Prod1 from '../../assets/work_1.png'
import { AiOutlineCheck } from 'react-icons/ai'
import { GrPersonalComputer } from 'react-icons/gr'



const Product = () => {
    useEffect (() => {
        Aos.init({ duration: 2000, loop: 'false', easing: 'ease-in' });
    }, [])
    return (
        <section id="product" className="prod">
            <div className="title">
                <h1>Explore our product</h1>
                <p className="afte">Lorem, ipsum dolor sit amet consectetur adipisicing elit. reiciendis maxime magni ipsum doloremque quia, <br /> quibusdam impedit dolores qui quis maiores?</p>
            </div>

            <div className="cards">
            <div className="card1">
                <div className="text" data-aos="fade-right">
                    <h2>Real project for real solutions</h2>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    
                    <p><small><AiOutlineCheck /></small> A small river named Duden</p>
                    <p><small><AiOutlineCheck /></small> A small river named Duden</p>
                    <p><small><AiOutlineCheck /></small> A small river named Duden</p>
                    <p><small><AiOutlineCheck /></small> A small river named Duden</p>
                    <p><small><AiOutlineCheck /></small> A small river named Duden</p>
                    
                </div>
                <div className="img" data-aos="fade-left">
                    <img src={Prod1} alt="" />
                </div>
            </div>


            <div className="card2">

                <div className="img" data-aos="fade-right">
                    <img src={Prod1} alt="" />
                </div>

                <div className="text" data-aos="fade-left">
                    <div className="content">
                       
                       <h2><small><GrPersonalComputer /></small> Real project for real solutions</h2>
                       <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div>
                    <div className="content">
                       <h2><small><GrPersonalComputer /></small> Real project for real solutions</h2>
                       <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div> 

                    <div className="content">
                       <h2><small><GrPersonalComputer /></small> Real project for real solutions</h2>
                       <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                    </div> 
                    
                </div>
            </div>
            </div>
            
        </section>
    )
}

export default Product