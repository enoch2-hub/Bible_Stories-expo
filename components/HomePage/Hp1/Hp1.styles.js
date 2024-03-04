// Hp1.styles.js

const styles = {
    hpSection1: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      padding: '10rem',
      backgroundImage: 'linear-gradient(rgb(26, 26, 26), rgb(49, 49, 49))',
      /* Uncomment the following line and update the URL accordingly if you want to include a background image */
      // background: 'linear-gradient(rgba(97, 0, 100, 0.7), rgba(68, 71, 255, 0.7)), url(\'../../../Assets/003.jpg\')',
    },
    hpSection1H1: {
      color: '#d5faff',
      fontSize: '4rem',
      marginTop: '13rem',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '20px',
      width: '100rem',
      textAlign: 'center',
    },
    card: {
      width: '10rem',
      height: '8rem',
      margin: '10px',
      padding: '5rem',
      paddingTop: '3rem',
      borderRadius: '2rem',
      cursor: 'pointer',
      transition: 'transform 0.1s ease',
      backdropFilter: 'blur(5px)',
      background: 'linear-gradient(rgb(195, 246, 255), rgb(0, 0, 24))',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
    },
    cardHover: {
      backgroundColor: 'rgba(240, 240, 240, 0.9)',
      transform: 'scale(1.05)',
    },
    cardH2: {
      margin: '0',
      fontWeight: '100',
      fontSize: '1.2rem',
      color: '#d5faff',
    },
    cardA: {
      textDecoration: 'none',
    },
    cardP: {
      margin: '0',
      color: '#666',
    },
    cardImg: {
      width: '200px',
      height: '150px',
      borderRadius: '2rem',
    },
    hidden: {
      opacity: '0',
      transform: 'translateX(-70%)',
      transition: 'opacity 1s ease, transform 1s ease, filter 1s ease',
      filter: 'blur(5px)',
    },
    show: {
      opacity: '1',
      transform: 'translateX(0)',
      filter: 'blur(0)',
    },
    hpBtn: {
      backgroundColor: '#b5c6ff',
      color: '#000000',
    },
    mediaQuery: {
      '@media (max-width: 600px)': {
        card: {
          width: '100%',
        },
      },
    },
  };
  
  export default styles;
  