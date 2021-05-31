import { useState, useEffect } from 'react';
import * as links from '../../config';
import Link from 'next/link';
import Img from 'next/image';

const Navbar = ({ navVisibility }) => {
  // const [page, setPage] = useState(null);
  // let currLocation = process.browser ? window.location.href : null;

  // const getLocation = (url) => {
  //   const urlValues = url.split('/');
  //   return urlValues[3] === '' ? 'home' : urlValues[3];
  // };

  // useEffect(() => {
  //   setPage(getLocation(window.location.href));
  // }, [currLocation]);

  return (
    <navbar className={navVisibility ? 'navbar' : 'navbar_hidden'}>
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
              <a name='about' className='hvr_grey_bg' href={links.about}>
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href={links.activities}>
              <a
                name='activities'
                className='hvr_grey_bg'
                href={links.activities}
              >
                Activities
              </a>
            </Link>
          </li>
          <li>
            <Link href={links.services}>
              <a name='services' className='hvr_grey_bg' href={links.services}>
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href={links.contact}>
              <a name='contact' className='hvr_grey_bg' href={links.contact}>
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
