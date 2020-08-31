import React from 'react';
import buildClient from '../api/build-client';

import Head from '../components/Head';
import Footer from '../components/Footer';
import Javascript from '../components/Javascript';
import Header from '../components/Header';
import PreLoader from '../components/Preloader';

import HeroHome from '../components/home/HeroHome';
import Categories from '../components/home/Categories';
import Featured from '../components/home/Featured';
import Banner from '../components/home/Banner';
import Latest from '../components/home/Latest';
import FromBlog from '../components/home/FromBlog';




const Home = ({ currentUser }) => {
  return (
    
      <div>
        
      <Head/>
      
      <Header currentUser={currentUser} />
      <HeroHome />
      <Categories />
      <Featured />
      <Banner />
      <Latest />
      <FromBlog />
      <Footer />
      <Javascript />
      </div> 
  );
};

Home.getInitialProps = async context => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/currentuser');

  return data;
};

export default Home;
