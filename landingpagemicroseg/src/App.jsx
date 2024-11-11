import React from 'react'
import Header from './components/header/header'
import SectionOne from './components/sectionOne/sectionOne'
import SectionFAQ from './components/FAQ/sectionFAQ'
import WhyChooseUs from './components/US/sectionUs'
import SectionContact from './components/contact/sectionContact'
import Footer from './components/footer/footer'
import SectionCampaign from "./components/sectionCampaign/sectionCampaign";
import './app.css'

function App() {

  return (
      <div>
          <Header />
          <SectionOne />
          <SectionCampaign />
          <WhyChooseUs />
          <SectionFAQ />
          <SectionContact />
          <Footer />
      </div>
  )
}

export default App
