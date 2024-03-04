// HomePage.styles.js

const styles = {
  homepage: {
    background: 'linear-gradient(rgba(170, 173, 255, 0.7), rgba(68, 71, 255, 0.7)), url("../../../Assets/088.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '80rem',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '-15rem',
  },
  welcomeCard: {
    marginTop: '20rem',
    height: '25rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 8rem 0 8rem',
    backgroundImage: 'linear-gradient(rgba(12, 12, 12, 0.671), rgba(0, 11, 59, 0.808))',
    maxWidth: '800px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  },
  welcomeCardH2: {
    margin: '0',
    fontSize: '2rem',
    color: '#ffffff',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '100',
  },
  welcomeCardP: {
    color: '#64b4ff',
    fontFamily: 'Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif',
  },
  carouselContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: '40rem',
    width: '60rem', // Set the width as needed
    marginTop: '20rem',
  },
  carouselInner: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  },
  carouselItem: {
    width: '100%',
    flex: '0 0 auto',
  },
  carouselItemImage: {
    width: '100%',
  },
  carouselControl: {
    position: 'absolute',
    top: '45%',
    transform: 'translateY(-50%)',
    fontSize: '2em',
    color: '#fff',
    backgroundColor: '#000000',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out',
  },
  carouselControlHover: {
    backgroundColor: '#0056b3',
  },
  prev: {
    left: '10px',
  },
  next: {
    right: '10px',
  },
};

export default styles;
