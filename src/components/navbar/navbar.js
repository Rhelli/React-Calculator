import React from 'react';
import style from './navbar.module.scss';

function Navbar() {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarTitle}>
        <h1>Math Magicians</h1>
      </div>
      <div className={style.navbarLinks}>
        <a href="/">Home </a>
        <span> | </span>
        <a href="/Calculator">Calculator </a>
        <span> | </span>
        <a href="/Quote">Quote </a>
      </div>
    </div>
  );
}

export default Navbar;
