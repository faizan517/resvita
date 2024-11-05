import React from 'react'
import Footer from '../../components/Footer'
import Contact from '../../Contact'
import Career from '../../components/Career'
import HealthcareNews from '../../components/News'
import DrawerAppBar from '../../components/Header'

function ContactUs() {
  return (
    <div>
        <DrawerAppBar/>
         {/* <Slider/> */}  
        {/* <Start/> */}
        <Career/>
        {/* <SkinTreatmentBanner/> */}
        {/* <ProteinTherapy/> */}
        {/* <MeetOurTeam/> */}
        <Contact/>
        <HealthcareNews/>
        <Footer isActive/>
    </div>
  )
}

export default ContactUs