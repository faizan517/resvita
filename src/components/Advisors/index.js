import React from 'react';
import advisro1 from '../../assets/advisor1.png';
import advisro2 from '../../assets/advisor2.png';
import advisro3 from '../../assets/advisor3.png';
import advisro4 from '../../assets/advisor4.png';
import advisro5 from '../../assets/advisor5.png';
import { Fonts } from '../../utils/Fonts';

const AdvisorSection = () => {
  const advisorData = [
    { id: 1, imageSrc: advisro1, name: 'Dr. Lisa Beck, MD' },
    { id: 2, imageSrc: advisro2, name: 'Dr. Eric Simpson, MD, MCR' },
    { id: 3, imageSrc: advisro3, name: 'Dr. Gregory Went, PhD' },
    { id: 4, imageSrc: advisro4, name: 'Dr. Keith Choate, MD, PhD' },
    { id: 5, imageSrc: advisro5, name: 'Steven Lo' }
  ];

  const styles = {
    advisorSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Full viewport height
      paddingBottom: '82px',
      overflow: 'hidden',
    },
    sectionTitle: {
      color: '#fff',
      font: '700 48px Inter, sans-serif',
      textAlign: 'center',
      marginBottom: '36px',
      marginTop:10
    },
    advisorGrid: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '80%',
    },
    advisorCard: {
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '150px',
      height: '30vw',
      paddingTop: '116px',
      cursor: 'pointer',
      transition: 'all 0.75s ease-in-out', // Slow and smooth transition for all properties
      position: 'relative', // For positioning the name at the bottom
      overflow: 'hidden', // Prevent text overflow
    },
    advisorImage: {
      width: '150px',
      aspectRatio: '0.42',
      objectFit: 'cover',
      transition: 'all 0.75s ease-in-out', // Transition on both width and aspectRatio
    },
    advisorName: {
      padding:20,
      position: 'absolute', // Position it at the bottom of the card
      bottom: '0px', // Space from the bottom
      height:'75px',
      width: '100%',
      backgroundColor:'#0099E6',
      textAlign: 'center',
      color: 'white', // Text color
      fontSize: '20px',
      fontWeight: '700',
      opacity: 0, // Hidden by default
      transition: 'opacity 0.3s ease-in-out', // Smooth transition for opacity
      ...Fonts.Inter
    },
  };

  return (
    <section style={styles.advisorSection}>
      <h2 style={styles.sectionTitle}>Meet Our Advisors</h2>
      <div style={styles.advisorGrid}>
        {advisorData.map((advisor) => (
          <div
            key={advisor.id}
            style={styles.advisorCard}
            onMouseEnter={(e) => {
              const card = e.currentTarget;
              const image = card.querySelector('img');
              const name = card.querySelector('.advisor-name');
              card.style.width = '330px';
              card.style.paddingTop = '0';
              image.style.aspectRatio = '0.76';
              image.style.width = '330px';
              name.style.opacity = 1; // Show the name on hover
            }}
            onMouseLeave={(e) => {
              const card = e.currentTarget;
              const image = card.querySelector('img');
              const name = card.querySelector('.advisor-name');
              card.style.width = '150px';
              card.style.paddingTop = '116px';
              image.style.aspectRatio = '0.42';
              image.style.width = '150px';
              name.style.opacity = 0; // Hide the name when not hovered
            }}
          >
            <img src={advisor.imageSrc} alt="Advisor" style={styles.advisorImage} />
            <div className="advisor-name" style={styles.advisorName}>
              {advisor.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvisorSection;
