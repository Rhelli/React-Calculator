import React from 'react';
import style from './home.module.scss';
import Navbar from './navbar';

function Home() {
  return (
    <div className={style.homeContainer}>
      <Navbar />
      <div className={style.homeTextContainer}>
        <h2>Welcome to Our Page!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie nunc non blandit massa. Elit pellentesque habitant morbi tristique senectus et netus et. Velit euismod in pellentesque massa placerat duis. Non tellus orci ac auctor augue maurisaugue neque. Nulla pharetra diam sit amet. Sed vulputate mi sit amet mauris commodo quis. Vestibulum mattis ullamcorper velit sed ullamcorper. In nulla posuere sollicitudin aliquam ultrices sagittis. Praesent tristique magna sit amet purus. Sed vulputate mi sit amet. Interdum velit laoreet id donec. Viverra adipiscing at in tellus integer. Est sit amet facilisis magna etiam tempor. Diam quam nulla porttitor massa id neque. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Arcu non sodales neque sodales ut etiam sit amet nisl. Urna neque viverra justo nec ultrices dui sapien eget mi.</p>
      </div>
    </div>
  );
}

export default Home;
