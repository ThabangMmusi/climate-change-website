import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Climate Change Education</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/lessons">Lessons</Link></li>
          <li><Link to="/interactives">Interactives</Link></li>
          <li><Link to="/challenge">Challenge</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/progress">My Progress</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
