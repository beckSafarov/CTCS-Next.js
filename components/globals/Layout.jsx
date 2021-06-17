import { useEffect, useState } from 'react';
import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';
import ToggleNav from './ToggleNav';

const Layout = ({ children }) => {
  const [navClass, setNavClass] = useState('');
  const [minimalNav, setMinimalNav] = useState(false);
  const [prevScroll, setPrevScroll] = useState(null);
  const [curScroll, setCurScroll] = useState(null);
  const [direction, setDirection] = useState(0);
  const [prevDirection, setPrevDirection] = useState(0);
  let sideEffects = process.browser ? [window.scrollY, document.scrollTop] : [];

  const navMinimzer = () => setMinimalNav(window.pageYOffset >= 100);

  const checkScroll = () => {
    setCurScroll(window.scrollY || document.scrollTop);

    setDirection(
      curScroll > prevScroll ? 2 : prevScroll > curScroll ? 1 : direction
    );

    if (direction !== prevDirection) {
      setNavClass(
        direction === 2 && curScroll > 30
          ? 'navbar_hidden'
          : direction === 1
          ? ''
          : navClass
      );
      setPrevDirection(direction);
    }

    setPrevScroll(curScroll);
  };

  const navScrollHandler = () => {
    checkScroll();
    navMinimzer();
  };

  useEffect(() => {
    window.addEventListener('scroll', navScrollHandler);
    return () => window.removeEventListener('scroll', navScrollHandler);
  }, [...sideEffects]);

  return (
    <>
      <Meta />
      <Navbar minimalNav={minimalNav} navClass={navClass} />
      <ToggleNav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
