import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import CampaignSlide from './campaignSlide';
import campaigns from '../../jsons/campaigns.json';
import FadeTitle from '../fadeTitle/fadeTitle';


const SectionCampaign = () => (
    <section className="sectionCampaign" id="sectionCampaign">
        <div className="mainImage">
            <FadeTitle title="Marcas Parceiras" />
        </div>
         <div className='swiperContainer'>
            
        <Swiper
            spaceBetween={900}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 1000 }}
            loop={true}
            style={{ maxWidth: '100%', height: '100%' }}
        >
            {campaigns.map((campaign, index) => (
                <SwiperSlide key={index}>
                    <CampaignSlide 
                        imgPath={campaign.imgPath} 
                    />
                </SwiperSlide>
            ))}
        </Swiper>
         </div>
       
    </section>
);

export default SectionCampaign;
