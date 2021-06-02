import { useEffect, useState } from 'react';
import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';
import ToggleNav from './ToggleNav';

const Layout = ({ children }) => {
  const [prevScrollpos, setPrevScrollpos] = useState(null);
  const [navVisibility, setNavVisibility] = useState(true);

  const navVisibilityHandler = () => {
    let currentScrollPos = window.pageYOffset;
    setNavVisibility(prevScrollpos > currentScrollPos ? true : false);
    setPrevScrollpos(currentScrollPos);
  };

  useEffect(() => {
    setPrevScrollpos(window.pageYOffset);

    window.addEventListener('scroll', navVisibilityHandler);

    return () => window.removeEventListener('scroll', navVisibilityHandler);
  }, [prevScrollpos]);

  return (
    <>
      <Meta />
      <Navbar navVisibility={navVisibility} />
      <ToggleNav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
