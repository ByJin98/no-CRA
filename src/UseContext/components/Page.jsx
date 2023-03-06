import React, { useContext } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Index = () => {
  return (
    <div className='page'>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Index;
