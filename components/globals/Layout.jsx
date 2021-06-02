import { useEffect, useState } from 'react';
import Footer from './Footer';
import Meta from './Meta';
import Navbar from './Navbar';
import ToggleNav from './ToggleNav';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const loc = useRouter();
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
  }, [prevScrollpos, loc.pathname]);

  return (
    <>
      <Meta />
      <Navbar navVisibility={navVisibility} loc={loc} />
      <ToggleNav />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
