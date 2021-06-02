import { useState, useEffect } from 'react';
import Link from 'next/link';
import Img from 'next/image';

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
        <Link href={`${process.env.NEXT_PUBLIC_ROOT}`}>
          <a href={`${process.env.NEXT_PUBLIC_ROOT}`}>
            <Img
              src={`${process.env.NEXT_PUBLIC_ROOT}` + '/img/logo_main.png'}
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
            <Link href={`${process.env.NEXT_PUBLIC_ABOUT}`}>
              <a
                name='about'
                className={
                  highlight === 'about' ? 'active_navLink' : 'hvr_grey_bg'
                }
                href={`${process.env.NEXT_PUBLIC_ABOUT}`}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${process.env.NEXT_PUBLIC_ACTIVITIES}`}>
              <a
                name='activities'
                className={
                  highlight === 'activities' ? 'active_navLink' : 'hvr_grey_bg'
                }
                href={`${process.env.NEXT_PUBLIC_ACTIVITIES}`}
              >
                Activities
              </a>
            </Link>
          </li>
          <li>
            <Link href={`${process.env.NEXT_PUBLIC_CONTACT}`}>
              <a
                name='contact'
                className={
                  highlight === 'contact' ? 'active_navLink' : 'hvr_grey_bg'
                }
                href={`${process.env.NEXT_PUBLIC_CONTACT}`}
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
