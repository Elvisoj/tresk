import React, { useEffect, useReducer, useState } from 'react';
import LandingPage from '../components/home/LandingPage';
import '../styles/Home.css'
import Showcase from '../components/showcase/Showcase';
import Review from '../components/review/Review';
import AboutUs from '../components/about/AboutUs';
import AboutMe from '../components/about/AboutMe';

import { UseDashboardContext } from '../dataManagement/dashboardContext';


function Home() {
  const {setPosts, setPostsComments } = UseDashboardContext();
  
  
  return (
    <div className='home'>
        <LandingPage />
      <div className="homeWrapper">
        <Showcase />
        <AboutUs />
        <AboutMe />
        <Review />
      </div>
    </div>
  );
}

export default Home;
