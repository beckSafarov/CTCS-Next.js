import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ROOT, ABOUT, ACTIVITIES, CONTACT } from '../../config';
import { useRouter } from 'next/router';

const Navbar = ({ minimalNav, navClass }) => {
  const loc = useRouter();
  const [memberPage, setMemberPage] = useState(false);
  const [highlight, setHighlight] = useState(null);

  useEffect(() => {
    setHighlight(getLocation());
    setMemberPage(loc.pathname.includes('members'));
    return () => setMemberPage(false);
  }, [loc.pathname]);

  const getLocation = () => {
    return loc.pathname === '/' ? 'home' : loc.pathname.replace('/', '');
  };

  // className={
  //   minimalNav && !memberPage
  //     ? 'navbar navbar_minimized'
  //     : memberPage
  //     ? 'navbar navbar_remain'
  //     : 'navbar'
  // }
  return (
    <div className={`navbar ${navClass}`}>
      {/* <div className='logo animate__animated animate__fadeIn'>
        <Link href={ROOT}>
          <a href={ROOT}>
            <img src={`${ROOT}/img/logo_main.png`} alt='Logo' />
          </a>
        </Link>
      </div> */}
      {minimalNav ? (
        <div className='logo_link_container'>
          <Link href={ROOT}>
            <a href={ROOT}>CTCS USM</a>
          </Link>
        </div>
      ) : (
        <div className='logo animate__animated animate__fadeIn'>
          <Link href={ROOT}>
            <a href={ROOT}>
              <img src={`${ROOT}/img/logo_main.png`} alt='Logo' />
            </a>
          </Link>
        </div>
      )}

      <div className='menu_items'>
        <ul>
          <li>
            <Link href={ABOUT}>
              <a
                name='about'
                className={
                  highlight === 'about' ? 'active_navLink' : 'hvr_grey_bg'
                }
                href={ABOUT}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href={ACTIVITIES}>
              <a
                name='activities'
                className={
                  highlight === 'activities' ? 'active_navLink' : 'hvr_grey_bg'
                }
                href={ACTIVITIES}
              >
                Activities
              </a>
            </Link>
          </li>
          <li>
            <Link href={CONTACT}>
              <a
                name='contact'
                className={
                  highlight === 'contact' ? 'active_navLink' : 'hvr_grey_bg'
                }
                href={CONTACT}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
