import React from 'react';
import * as links from '../../config';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className='footer_social'>
        <h2>Follow Us</h2>
        <div className='row'>
          <a href='www.twitter.com'>
            <i className='fab fa-twitter-square fa-2x'></i>
          </a>
          <a href='www.facebook.com'>
            <i className='fab fa-facebook-square fa-2x'></i>
          </a>
          <a href='www.linkedin.com'>
            <i className='fab fa-linkedin fa-2x'></i>
          </a>
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
