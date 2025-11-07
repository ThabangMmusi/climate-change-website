import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to the Climate Change Education Hub</h1>
      <p style={{ fontSize: '1.2em', maxWidth: '800px', margin: '20px auto' }}>
        This platform is dedicated to providing engaging and interactive educational resources about Environmental Education, based on the Life Sciences CAPS document.
      </p>
      <p style={{ fontSize: '1.2em', maxWidth: '800px', margin: '20px auto' }}>
        Our goal is to combine scientific knowledge, creativity, and technology to address real-world environmental issues through education.
      </p>
      
      <h2>Explore the Sections</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <Link to="/lessons"><button>View Lessons</button></Link>
        <Link to="/interactives"><button>Try Interactives</button></Link>
        <Link to="/challenge"><button>Take the Challenge</button></Link>
      </div>
    </div>
  );
};

export default HomePage;
