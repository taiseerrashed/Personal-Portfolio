import React from 'react';
import Banner from '../../components/Banner/Banner';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Banner />
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;