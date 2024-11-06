import React from 'react';

const AdvisorCard = ({ imageSrc }) => {

  const styles = {
    advisorCard: {
      backgroundColor: '#ffffff',
      display: 'flex',
      paddingTop: '116px',
      flexDirection: 'column',
      overflow: 'hidden',
      flexGrow: 1,
      width: '120px',
      margin: 'auto 0',
      transition: 'all 0.3s ease',
    },
    advisorImage: {
      aspectRatio: '0.42',
      objectFit: 'contain',
      objectPosition: 'center',
      width: '150px',
      transition: 'all 0.3s ease',
    },
    advisorCardHover: {
      paddingTop: '0',
      width: '330px',
    },
    advisorImageHover: {
      aspectRatio: '0.76',
      width: '330px',
    },
    '@media (max-width: 991px)': {
      advisorCard: {
        paddingTop: '100px',
      },
    },
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="advisor-card"
      style={{
        ...styles.advisorCard,
        ...(isHovered && styles.advisorCardHover),
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imageSrc}
        alt="Advisor"
        className="advisor-image"
        style={{
          ...styles.advisorImage,
          ...(isHovered && styles.advisorImageHover),
        }}
      />
    </div>
  );
};

export default AdvisorCard;
