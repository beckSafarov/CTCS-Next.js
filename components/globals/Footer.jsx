import React from 'react';
import * as links from '../../config';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className='horizontal_wrap'>
        <div className='footer_navigation'>
          <h4>Navigation</h4>
          <div className='column'>
            <Link href={links.ROOT}>
              <a href={links.ROOT}>Back to top</a>
            </Link>
            <Link href={links.about}>
              <a href={links.about}>About us</a>
            </Link>
            <Link href={links.activities}>
              <a href={links.activities}>Activities</a>
            </Link>
            <Link href={links.contact}>
              <a href={links.contact}>Contact</a>
            </Link>
          </div>
        </div>
        <div className='footer_social'>
          <h4>Follow Us</h4>
          <div className='row'>
            <a href='www.twitter.com'>
              <i className='fab fa-twitter-square'></i>
            </a>
            <a href='www.facebook.com'>
              <i className='fab fa-facebook-square'></i>
            </a>
            <a href='www.linkedin.com'>
              <i className='fab fa-linkedin'></i>
            </a>
          </div>
        </div>
      </div>
      <div className='copyright center_align'>
        <p className='copyright_text'>
          Copyright © {new Date().getFullYear()} CTCS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
