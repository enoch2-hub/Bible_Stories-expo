// Navbar.styles.js

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '13rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    /* Uncomment the following lines and update the gradient or background color if needed */
    // background: 'linear-gradient(rgba(0, 0, 0, 0.9), rgb(0, 0, 0))',
    // background: 'linear-gradient(rgba(255, 255, 255, 0.9), rgb(199, 199, 199))',
  },
  navLinks: {
    display: 'flex',
    gap: '5rem',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    fontSize: '1.4rem',
  },
  navLinksLi: {
    display: 'inline-block',
    marginRight: '15px',
  },
  navLinksA: {
    textDecoration: 'none',
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif',
    color: '#1d1d1d',
    position: 'relative',
    fontSize: '1.2rem',
  },
  navLinksAHoverAfter: {
    content: '',
    display: 'block',
    height: '2px',
    width: '100%',
    marginBottom: '2rem',
    backgroundColor: '#64b4ff',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
  },
  logoContainerH1: {
    color: 'aliceblue',
    fontFamily: '"Barriecito", system-ui',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  logoContainerImg: {
    width: '18rem',
    height: '10rem',
    marginTop: '-4rem',
  },
};

export default styles;
