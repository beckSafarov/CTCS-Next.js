import React from 'react';
import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
