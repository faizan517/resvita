import React, { useState } from 'react';
import advisro1 from '../../assets/advisor1.png'
import advisro2 from '../../assets/advisor2.png'
import advisro3 from '../../assets/advisor3.png'
import advisro4 from '../../assets/advisor4.png'
import advisro5 from '../../assets/advisor5.png'

 const AdvisorSection = () => {
  const advisorData = [
    { id: 1, imageSrc: advisro1 },
    { id: 2, imageSrc: advisro2 },
    { id: 3, imageSrc: advisro3 },
    { id: 4, imageSrc: advisro4 },
    { id: 5, imageSrc: advisro5 }
  ];

  const styles = {
    advisorSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      // backgroundColor: 'black',
      height: '100vh', // Full viewport height
      paddingBottom: '82px',
      overflow: 'hidden',
    },
    sectionTitle: {
      color: '#fff',
      font: '700 48px Inter, sans-serif',
      textAlign: 'center',
      marginBottom: '36px',
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
      height: 'auto',
      paddingTop: '116px',
      transition: 'all 0.5s ease',
      cursor: 'pointer',
    },
    advisorImage: {
      width: '150px',
      aspectRatio: '0.42',
      objectFit: 'cover',
      // positin:'fixed'
      // objectPosition: 'center',
      // transition: 'all 0.5s ease',
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
              e.currentTarget.style.width = '330px';
              e.currentTarget.style.paddingTop = '0';
              e.currentTarget.querySelector('img').style.aspectRatio = '0.76';
              e.currentTarget.querySelector('img').style.width = '330px';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.width = '150px';
              e.currentTarget.style.paddingTop = '116px';
              e.currentTarget.querySelector('img').style.aspectRatio = '0.42';
              e.currentTarget.querySelector('img').style.width = '150px';
            }}
          >
            <img src={advisor.imageSrc} alt="Advisor" style={styles.advisorImage} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvisorSection;
