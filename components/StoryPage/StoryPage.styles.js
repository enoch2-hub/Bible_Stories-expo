// StoryPage.styles.js

const styles = {
  storyContainer: {
    background: 'linear-gradient(rgb(0, 0, 0), rgba(68, 71, 255, 0.7))',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '-15rem',
    padding: '0 5rem 20rem 5rem',
  },
  storyPage: {
    background: 'linear-gradient(rgba(255, 255, 255, 0.911), rgba(255, 255, 255, 0.863)), url("../../Assets/089.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    maxWidth: '80rem',
    margin: '0 auto',
    marginTop: '20rem',
    padding: '50px',
    paddingBottom: '10rem',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'left',
  },
  storyPageH1: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#333',
  },
  storyPageH2: {
    fontSize: '28px',
    marginBottom: '15px',
    color: '#007bff',
  },
  storyPageP: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
  },
  storyPageFirstP: {
    marginTop: '0',
  },
  storyPageA: {
    color: '#007bff',
    textDecoration: 'underline',
    transition: 'color 0.3s ease',
  },
  storyPageAHover: {
    color: '#0056b3',
  },
};

export default styles;
