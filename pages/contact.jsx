import { useEffect, useState } from 'react';
import styles from '../styles/Contact.module.css';
import AOS from 'aos';
import Link from 'next/link';
import * as links from '../config';
import Meta from '../components/globals/Meta';
import Img from 'next/image';
import Loader from '../components/globals/Loader';
import ActivityRow from '../components/ActivityRow';

const contact = ({ contact }) => {
  return (
    <>
      <Meta
        title={'Contact | CT USM'}
        keywords={
          'contact CT USM, contact computational thinking usm, contact usm, contact cs usm'
        }
        description={'Contact with USM Computational Thinking Team'}
      />
      <Loader />
      <main className={styles.main}>
        <section className={styles.contact_section}>
          <div className='text_center'>
            <h1>Contact</h1>
          </div>

          <div className={styles.contact}>
            <div className={styles.contact_form}>
              <form>
                <div className={styles.row}>
                  <div className={styles.input50}>
                    <input
                      type='text'
                      name='firstName'
                      id='firstName'
                      placeholder='First Name'
                    />
                  </div>
                  <div className={styles.input50}>
                    <input
                      type='text'
                      name='lastName'
                      id='lastName'
                      placeholder='Last Name'
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.input50}>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Email'
                    />
                  </div>
                  <div className={styles.input50}>
                    <input
                      type='text'
                      name='subject'
                      id='subject'
                      placeholder='Subject'
                    />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.input100}>
                    <textarea
                      placeholder='Message'
                      name='message'
                      id='message'
                    ></textarea>
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.input100}>
                    <input type='submit' value='Send' />
                  </div>
                </div>
              </form>
            </div>

            {/* contact info */}
            <div className={styles.contact_info}>
              <div className={styles.info_box}>
                <i className='fas fa-map-marker-alt'></i>
                <div className={styles.details}>
                  <h4>Address</h4>
                  <p className={styles.unspaced}>{contact.address}</p>
                </div>
              </div>
              <div className={styles.info_box}>
                <i className='fas fa-envelope'></i>
                <div className={styles.details}>
                  <h4>Email</h4>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
              <div className={styles.info_box}>
                <i className='fas fa-phone-alt'></i>
                <div className={styles.details}>
                  <h4>Phone</h4>
                  <p>{contact.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const contactRes = await fetch(`${links.ROOT}/api/contact`);

  const contact = await contactRes.json();

  return {
    props: {
      contact,
    },
  };
}

export default contact;
