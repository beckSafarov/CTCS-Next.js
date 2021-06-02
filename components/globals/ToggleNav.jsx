import { useState } from 'react';
import Link from 'next/link';
import { ROOT, ABOUT, ACTIVITIES, CONTACT } from '../../config';

const ToggleNav = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const handleToggleClick = () => setSideNavOpen(!sideNavOpen);

  const closeToggleMenu = () => setSideNavOpen(false);

  return (
    <>
      <div className='toggle animate__animated animate__fadeIn'>
        <i
          id='toggle_icon'
          className={sideNavOpen ? 'fas fa-times fa-3x' : 'fas fa-bars fa-3x'}
          onClick={handleToggleClick}
        ></i>
      </div>

      <div className={sideNavOpen ? 'navigation active' : 'navigation'}>
        <ul className='toggleNavItems'>
          <li>
            <Link href={`${process.env.NEXT_PUBLIC_ABOUT}`}>
              <a
                className='active_toggle_link'
                name='about'
                id='aboutUsLink'
                onClick={closeToggleMenu}
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
                id='activitiesLink'
                onClick={closeToggleMenu}
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
                id='contactLink'
                onClick={closeToggleMenu}
                href={`${process.env.NEXT_PUBLIC_CONTACT}`}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>

        <div className='social_bar'>
          <a href='www.facebook.com'>
            <i className='fab fa-facebook-square fa-2x'></i>
          </a>
          <a href='www.twitter.com'>
            <i className='fab fa-twitter-square fa-2x'></i>
          </a>
          <a href='www.linkedin.com'>
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ToggleNav;
