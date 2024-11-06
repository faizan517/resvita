import React from "react";
import DrawerAppBar from "../../components/Header";
import SkinTreatmentBanner from "../../components/AboutUS";
import Slider from "../../components/Slider";
import Start from "../../components/Start";
import ProteinTherapy from "../../components/ProtienTherapy";
import Footer from "../../components/Footer";
import HealthcareNews from "../../components/News";
import MeetOurTeam from "../../components/Team";
import Contact from "../../Contact";

import Header from "../../components/Header";
import Advisors from "../../components/Advisors";

function Home() {
  return (
    <div>
      <Header />
      <Start />
      {/* <Career/> */}
      <SkinTreatmentBanner />
      <div
        style={{
          background:
            "linear-gradient(135deg, #005F99, #033451, #131126, #1E1E1E)",
        }}
      >
        {" "}
        {/* Set your desired color */}
        <Slider />
        <MeetOurTeam />
        <Advisors />
      <ProteinTherapy />
      </div>
      {/* <Contact /> */}
      <HealthcareNews />
      <Footer />
    </div>
  );
}

export default Home;
