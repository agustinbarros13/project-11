import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <h1>Project Title</h1>
    <nav>
    <Link to="/" className="home-link">Home</Link>
    <Link to="/about" className="about-link">About</Link>
    </nav>
  </header>
);

export default Header;
