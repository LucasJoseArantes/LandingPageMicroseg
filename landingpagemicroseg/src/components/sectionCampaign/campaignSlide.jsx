import React from 'react';
import './campaignSlide.css';

const CampaignSlide = ({ imgPath, title, firstDescription, secondDescription, link }) => (
    <div className="sectionCampaign__content">
        <div className="sectionCampaign__img">
            <img src={imgPath} alt={title} />
        </div>
        <div className="sectionCampaign__text">
            <h2 className='sectionTitle'>{title}</h2>
            <p>{firstDescription}</p>
            <p>{secondDescription}</p>
            <div className="sectionCampaign__button">
        </div>
        </div>
    </div>
);

export default CampaignSlide;
