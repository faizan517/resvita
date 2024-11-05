import React from 'react'
import DrawerAppBar from '../../components/Header'
import SkinTreatmentBanner from '../../components/AboutUS'
import Slider from '../../components/Slider'
import Start from '../../components/Start'
import ProteinTherapy from '../../components/ProtienTherapy'
import Footer from '../../components/Footer'
import HealthcareNews from '../../components/News'
import MeetOurTeam from '../../components/Team'
import Contact from '../../Contact'

import Header from '../../components/Header'
import Advisors from '../../components/Advisors'

function Home() {
  return (
    <div>
        <Header/>
        <Start/>
        {/* <Career/> */}
        <SkinTreatmentBanner/>
        {/* <ProteinTherapy/> */}
        <HealthcareNews/>
         <Slider/>
        <MeetOurTeam/>
        {/* <Advisors/> */}
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home