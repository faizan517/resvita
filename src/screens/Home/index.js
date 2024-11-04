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
import Career from '../../components/Career'

function Home() {
  return (
    <div>
        <DrawerAppBar/>
         {/* <Slider/> */}
        <Start/>
        <Career/>
        <SkinTreatmentBanner/>
        {/* <ProteinTherapy/> */}
        <HealthcareNews/>
        <MeetOurTeam/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home