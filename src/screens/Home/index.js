import React from 'react'
import DrawerAppBar from '../../components/Header'
import SkinTreatmentBanner from '../../components/AboutUS'
import Slider from '../../components/Slider'
import Start from '../../components/Start'
import ProteinTherapy from '../../components/ProtienTherapy'

function Home() {
  return (
    <div>
        <DrawerAppBar/>
         {/* <Slider/> */}
        {/* <Start/> */}
        {/* <SkinTreatmentBanner/> */}
        <ProteinTherapy/>
    </div>
  )
}

export default Home