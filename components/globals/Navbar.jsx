import { useState, useEffect } from 'react';
import * as links from '../../config';
import Link from 'next/link';
import Img from 'next/image';
import { useRouter } from 'next/router';

const Navbar = ({ navVisibility }) => {
  const [highlight, setHighlight] = useState(null);
  const loc = useRouter();

  useEffect(() => {
    setHighlight(getLocation());
  }, [loc.pathname]);

  const getLocation = () => {
    return loc.pathname === '/' ? 'home' : loc.pathname.replace('/', '');
  };

  return (
    <navbar className={navVisibility ? 'navbar' : 'navbar navbar_hidden'}>
      <div className='logo animate__animated animate__fadeIn'>
        <Link href={links.ROOT}>
          <a href={links.ROOT}>
            <Img
              src={links.ROOT + '/img/logo_main.png'}
              alt='Computational Thinking'
              width={80}
              height={80}
            ></Img>
          </a>
        </Link>
      </div>

      <div className='menu_items'>
        <ul>
          <li>
            <Link href={links.about}>
              <a
                name='about'
                className={
                  highlight === 'about' ? 'active_navLink' : 'hvr_grey_bg'
                }
                href={links.about}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href={links.activities}>
              <a
                name='activities'
                className={
                  highlight === 'activities' ? 'active_navLink' : 'hvr_grey_bg'
                }
                href={links.activities}
              >
                Activities
              </a>
            </Link>
          </li>
          <li>
            <Link href={links.contact}>
              <a
                name='contact'
                className={
                  highlight === 'contact' ? 'active_navLink' : 'hvr_grey_bg'
                }
                href={links.contact}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </navbar>
  );
};

export default Navbar;
