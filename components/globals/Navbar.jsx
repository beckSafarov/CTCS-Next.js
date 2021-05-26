import React from 'react';
import * as links from '../../config';
import Link from 'next/link';

const Navbar = () => {
  return (
    <navbar>
      <div className='logo animate__animated animate__fadeIn'>
        <Link href={links.ROOT}>
          <a href={links.ROOT}>
            <img
              src={links.ROOT + '/img/logo_main.png'}
              alt='Computational Thinking'
            />
          </a>
        </Link>
      </div>

      <div className='menu_items'>
        <ul>
          <li id='homeLinkItem'>
            <Link href={links.ROOT}>
              <a id='homeLink' className='hvr_grey_bg' href={links.ROOT}>
                Home
              </a>
            </Link>
          </li>
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
