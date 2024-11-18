import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import Button from '../button';
import './ratings.css';

const Ratings = () => {
    const reviews = [
        {
            name: "Flavio Martins",
            date: "18/04/2024",
            comment: "Profissional qualificado e altamente entendido no que faz. Soube explicar com muita transparência todo o processo.",
        },
        {
            name: "Alef Carvalho",
            date: "18/04/2024",
            comment: "Excelente trabalho, sempre que preciso me atendem com agilidade e confiança.",
        },
        {
            name: "Pedro Moura",
            date: "18/04/2024",
            comment: "Excelente serviço prestado. Nos sentimos protegidos com os equipamentos instalados e sempre feito com profissionalismo.",
        },
    ];

    return (
        <section>

        <div className="google-evaluations">
            <h1>Depoimentos</h1>
            <div className="summary">
                <h2>O Que Nossos Clientes Dizem</h2>
                <div className="rating">
                    <div className="google-container">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                            alt="Google Logo"
                            className="google-logo"
                            />
                        <p>Com base em 84 avaliações</p>
                            <span>★★★★★</span>
                    </div>
                </div>
            </div>

            <div className="swiper-container">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    modules={[Navigation, Autoplay]}
                    >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="review-card">
                                <h3>{review.name}</h3>
                                <p className="review-date">{review.date}</p>
                                <p className="review-comment">{review.comment}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Button text="Solicitar Orçamento Agora" link="https://wa.me/+5534996506345" />
        </div>
                    </section>
    );
};

export default Ratings;
