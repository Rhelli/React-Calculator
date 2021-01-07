import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.scss';

function Navbar() {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarTitle}>
        <h1>Math Magicians</h1>
      </div>
      <div className={style.navbarLinks}>
        <Link to="/">Home </Link>
        <span> | </span>
        <Link to="/Calculator">Calculator </Link>
        <span> | </span>
        <Link to="/Quote">Quote </Link>
      </div>
    </div>
  );
}

export default Navbar;
