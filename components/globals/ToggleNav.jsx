import React from 'react';
import * as links from '../../config';

const ToggleNav = () => {
  const toggle = document.querySelector('#toggle_icon');
  const navigation = document.querySelector('.navigation');

  const toggleClicked = () => {
    toggle.className =
      toggle.classList[1] === 'fa-bars'
        ? 'fas fa-times fa-3x'
        : 'fas fa-bars fa-3x';

    navigation.classList.toggle('active');
  };

  const closeToggleMenu = () => {
    toggle.className = 'fas fa-bars fa-3x';
    document.querySelector('.navigation').classList.remove('active');
  };

  return (
    <>
      <div className='toggle animate__animated animate__fadeIn'>
        <i
          id='toggle_icon'
          className='fas fa-bars fa-3x'
          onClick={toggleClicked}
        ></i>
      </div>

      <div className='navigation'>
        <ul className='toggleNavItems'>
          <li>
            <Link href={links.ROOT} onClick={closeToggleMenu}>
              <a
                name='home'
                id='homeLink'
                onClick={closeToggleMenu}
                href={links.ROOT}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href={links.about}>
              <a
                className='active_toggle_link'
                name='about'
                id='aboutUsLink'
                onClick={closeToggleMenu}
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
                id='activitiesLink'
                onClick={closeToggleMenu}
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
                id='contactLink'
                onClick={closeToggleMenu}
                href={links.contact}
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
