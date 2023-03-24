import React from 'react';

import Header from '../Components/Header/Header';
import Banner from '../Components/Banner/Banner';
import Posts from '../Components/Posts/Posts';
import BottomBanner from '../Components/Bottom Banner/BottomBanner';
import Footer from '../Components/Footer/Footer';

function Home(props) {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Posts />
      <BottomBanner />
      <Footer />
    </div>
  );
}

export default Home;
 
