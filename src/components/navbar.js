import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  <div>
    <div>
      <h1>Math Magicians</h1>
    </div>
    <div>
      <Link to="/">Home </Link>
      <span> | </span>
      <Link to="/Calculator">Calculator </Link>
      <span> | </span>
      <Link to="/Quote">Quote </Link>
    </div>
  </div>
};

export default Navbar;
