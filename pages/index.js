import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import AOS from 'aos';
import Link from 'next/link';
import * as links from '../config';
import Meta from '../components/globals/Meta';
import Navbar from '../components/globals/Navbar';
import ToggleNav from '../components/globals/ToggleNav';
import MemberCard from '../components/member/MemberCard';
import ServiceCard from '../components/home/ServiceCard';
import Iframe from 'react-iframe';

const images = [
  '001.png',
  '002.png',
  '003.png',
  '004.png',
  '005.png',
  '006.png',
];

const sampleDesc =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, iure.';

export default function Home() {
  useEffect(() => {
    AOS.init();
    // document.querySelector('#homeLinkItem').style.display = 'none';
  }, []);

  return (
    <>
      <Meta
        title={'CT USM'}
        keywords={'computational thinking, computer science, usm'}
        description={'Computational Thinking Research Team in USM'}
      />
      {/* ctcs logo for mobile screens */}
      <div className={styles.mobile_logo}>
        <img src={links.ROOT + '/img/logo_main.png'} alt='CT USM' />
      </div>

      <main className={styles.main}>
        {/* landing section */}
        <section className={styles.landing_page_section}>
          <div className={styles.body}>
            <h1>Computational Thinking</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <button>
              <Link href={links.ROOT + '/about'}>
                <a href={links.ROOT + '/about'}>Learn More</a>
              </Link>
            </button>
          </div>
          <div className={styles.video}>
            <Iframe
              url='https://www.youtube.com/embed/klXzntaBZ3c'
              className={styles.iframe}
            ></Iframe>
          </div>
        </section>
        <section className={styles.team_members_section}>
          {/* data-aos='fade-in' data-aos-duration='2000' */}
          <h1>Team Members</h1>
          <div className={styles.cards_container}>
            {[...Array(6).keys()].map((card, index) => {
              return (
                <MemberCard
                  key={index}
                  memberName={'Member N '}
                  styles={styles}
                />
              );
            })}
          </div>
        </section>
        <section className={styles.services_section}>
          <h1>Our Services</h1>
          <div className={styles.serviceCards}>
            {[...Array(6).keys()].map((card, index) => {
              return (
                <ServiceCard
                  key={index}
                  img={images[index]}
                  serviceName={'Service ' + index}
                  serviceDesc={sampleDesc}
                  styles={styles}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
