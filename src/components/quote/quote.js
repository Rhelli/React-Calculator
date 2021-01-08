import React from 'react';
import Navbar from '../navbar/Navbar';
import style from './quote.module.scss';

function Quote() {
  return (
    <div className={style.quotePage}>
      <Navbar />
      <div className={style.quoteContainer}>
        <h3>&quot;They don&apos;t think it be like it is, but it do&quot;</h3>
        <h4>Oscar Gamble</h4>
      </div>
    </div>
  );
}

export default Quote;
