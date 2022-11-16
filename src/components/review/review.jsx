import React from 'react'
import './review.css'
import Pic1 from '../../assets/pic-1.png'
import Pic2 from '../../assets/pic-2.png'
import Pic3 from '../../assets/pic-4.png'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Review = () => {
    return (
        <section id="testimonials">
            <Swiper className="container__testi" modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

                <SwiperSlide className="testimonial">
                    <div className="client">
                        <img src={Pic1} alt="" />
                    </div>
                    <small className="review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore illo repellat eius laboriosam, facere sint dicta magnam fugiat labore.
                    </small>
                    <h5>Angelo Dorange, via <a href="#">Twitter</a></h5>
                </SwiperSlide>

                   <SwiperSlide className="testimonial">
                    <div className="client">
                        <img src={Pic2} alt="" />
                    </div>
                    <small className="review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore illo repellat eius laboriosam, facere sint dicta magnam fugiat labore.
                    </small>
                    <h5>Angelina Dorange, via <a href="#">Instagram</a></h5>
                </SwiperSlide>

                <SwiperSlide className="testimonial">
                    <div className="client">
                        <img src={Pic3} alt="" />
                    </div>
                    <small className="review">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore illo repellat eius laboriosam, facere sint dicta magnam fugiat labore.
                    </small>
                    <h5>Angela Dorange, via <a href="#">Facebook</a></h5>
                </SwiperSlide>             
            </Swiper>
        </section>
    )
}

export default Review
