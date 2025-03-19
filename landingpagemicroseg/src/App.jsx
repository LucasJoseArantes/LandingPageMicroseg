import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Header from './components/header/header';
import SectionOne from './components/sectionOne/sectionOne';
import SectionFAQ from './components/FAQ/sectionFAQ';
import WhyChooseUs from './components/US/sectionUs';
import SectionContact from './components/contact/sectionContact';
import Footer from './components/footer/footer';
import SectionCampaign from './components/sectionCampaign/sectionCampaign';
import Ratings from "./components/ratings/ratrings";


import HeroSection from './components/heroSection/heroSection';

import './app.css';

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.5,    // Aumenta a duração da animação
        ease: [1, 1, 1, 1],  // Usando easeInOut para uma transição suave (Bezier curve)
      }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <HeroSection />

      <AnimatedSection>
        <SectionCampaign />
      </AnimatedSection>

      <AnimatedSection>
        <WhyChooseUs />
      </AnimatedSection>

      <AnimatedSection >
        <Ratings /> 
      </AnimatedSection>
      <AnimatedSection>
        <SectionFAQ />
      </AnimatedSection>

      <AnimatedSection>
        <SectionContact />
      </AnimatedSection>

      <Footer />
    </div>
  );
}

export default App;
