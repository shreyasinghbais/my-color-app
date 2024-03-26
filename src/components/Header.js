import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header className='site-header'>
      <h1>My App</h1>  
      <nav>
         <Link to="/">Home</Link>
         <Link to="/search">Search</Link>
      </nav>
    </header>
  );
}
export default Header;