import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ROOT, ABOUT, ACTIVITIES, CONTACT } from '../../config';

const Navbar = ({ navVisibility, loc }) => {
  const [highlight, setHighlight] = useState(null);

  useEffect(() => {
    setHighlight(getLocation());
  }, [loc]);

  const getLocation = () => {
    return loc.pathname === '/' ? 'home' : loc.pathname.replace('/', '');
  };

  return (
    <div className={navVisibility ? 'navbar' : 'navbar navbar_hidden'}>
      <div className='logo animate__animated animate__fadeIn'>
        <Link href={`${ROOT}`}>
          <a href={`${ROOT}`}>
            <img src={`${ROOT}/img/logo_main.png`} alt='Logo' />
          </a>
        </Link>
      </div>

      <div className='menu_items'>
        <ul>
          <li>
            <Link href={`${ABOUT}`}>
              <a
                name='about'
                className={
                  highlight === 'about' ? 'active_navLink' : 'hvr_grey_bg'
                }
                href={`${ABOUT}`}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${ACTIVITIES}`}>
              <a
                name='activities'
                className={
                  highlight === 'activities' ? 'active_navLink' : 'hvr_grey_bg'
                }
                href={`${ACTIVITIES}`}
              >
                Activities
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${CONTACT}`}>
              <a
                name='contact'
                className={
                  highlight === 'contact' ? 'active_navLink' : 'hvr_grey_bg'
                }
                href={`${CONTACT}`}
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
