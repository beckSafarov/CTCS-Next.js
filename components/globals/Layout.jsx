import { useEffect, useState } from 'react';
import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';
import ToggleNav from './ToggleNav';

const Layout = ({ children }) => {
  const [prevScrollpos, setPrevScrollpos] = useState(null);
  const [navVisibility, setNavVisibility] = useState(true);
  const [minimalNav, setMinimalNav] = useState(false);

  let sideEffects = process.browser ? [window.pageYOffset] : [];

  const navVisibilityHandler = () => {
    let currentScrollPos = window.pageYOffset;
    setNavVisibility(prevScrollpos > currentScrollPos ? true : false);
    setPrevScrollpos(currentScrollPos);
  };

  const navMinimizeHandler = () => {
    window.pageYOffset >= 100 ? setMinimalNav(true) : setMinimalNav(false);
  };

  useEffect(() => {
    // setPrevScrollpos(window.pageYOffset);

    window.addEventListener('scroll', navMinimizeHandler);

    return () => window.removeEventListener('scroll', navMinimizeHandler);
  }, [...sideEffects]);

  return (
    <>
      <Meta />
      <Navbar minimalNav={minimalNav} />
      <ToggleNav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
