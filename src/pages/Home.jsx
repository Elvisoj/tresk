import React from 'react';
import LandingPage from '../components/home/LandingPage';
import '../styles/Home.css'
import Showcase from '../components/showcase/Showcase';
import Review from '../components/review/Review';
import AboutUs from '../components/about/AboutUs';
import AboutMe from '../components/about/AboutMe';
import UseLocalStorage from '../components/hookes/UseLocalStorage';

function Home() {
  // const postKey = "POSTDATA"
  // const {setData, getData, removeData} = UseLocalStorage(postKey)
  // setData([1, 9, 0, 8])
  // console.log(getData())
  // removeData()
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
