import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import './ques.css'


const Faqs = () =>{
    useEffect (() => {
        Aos.init({ duration: 2000, easing: 'ease-in' });
    }, [])
    return (
        <section id="faq" className="faq">
            <div className="title">
                <h1>Common Questions</h1>
                <p className="afte">Everything you need to know before you get started</p>
            </div>

            <div className="quest">
            <div className="questions">
                <div className="question" data-aos="fade-right">
                    <h1>What is Union ?</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>

                <div className="question" data-aos="fade-left">
                    <h1>What language are avaible ?</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
            </div>

            <div className="questions">
                <div className="question" data-aos="fade-right">
                    <h1>I have technical email, Who I email ?</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>

                <div className="question" data-aos="fade-left">
                    <h1>Can I have a username that is already taken ?</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
            </div>

            <div className="questions"data-aos="fade-right" >
                <div className="question">
                    <h1>How do I use Bato features ?</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>

                <div className="question" data-aos="fade-left">
                    <h1>Is Union free ?</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                </div>
            </div>
            </div>
            
        </section>
    )
}

export default Faqs