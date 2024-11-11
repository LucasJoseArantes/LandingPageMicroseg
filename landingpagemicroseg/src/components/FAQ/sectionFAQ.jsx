import React, { useState } from 'react';
import '../FAQ/sectionFAQ.css';
import faqs from '../../jsons/faqs.json';

const SectionFAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <section className="faqSection">
            <div className='faqSectionConatiner'>
                <h1>Perguntas Frequentes</h1>
            <div className="faqList">
                {faqs.map((faq, index) => (
                    <div key={index} className="faqItem">
                        <div 
                            className="faqQuestion" 
                            onClick={() => toggleAnswer(index)}
                        >
                            <span>{index + 1}. {faq.question}</span>
                            <span className={`faqIcon ${activeIndex === index ? 'open' : ''}`}>
                                {activeIndex === index ? '▲' : '▼'}
                            </span>
                        </div>
                        {activeIndex === index && (
                            <div className="faqAnswer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default SectionFAQ;
