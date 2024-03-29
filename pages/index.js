import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import AOS from 'aos';
import Link from 'next/link';
import Meta from '../components/globals/Meta';
import MemberCard from '../components/member/MemberCard';
import ServiceCard from '../components/home/ServiceCard';
import Iframe from 'react-iframe';
import Loader from '../components/globals/Loader';
import { ROOT } from '../config';
import fs from 'fs';

export default function Home({ members, services }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => AOS.init(), []);

  const runLoading = () => setLoading(true);
  return (
    <>
      <Loader />
      {loading && <Loader />}
      <Meta
        title={'CT USM'}
        keywords={'computational thinking, computer science, usm'}
        description={'Computational Thinking Research Team in USM'}
      />
      {/* ctcs logo for mobile screens */}
      <div className={styles.mobile_logo}>
        <img src={`${ROOT}/img/logo_main.png`} alt='Logo' />
      </div>

      <main className={styles.main}>
        {/* landing section */}
        <section id='landing_page' className={styles.landing_page_section}>
          <div className={styles.body}>
            <h1 className='animate__animated animate__fadeInDown'>
              Computational Thinking
            </h1>
            <p className='animate__animated animate__fadeInLeft'>
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <button className='animate__animated animate__fadeInUp hvr-glow'>
              <Link href={ROOT + '/about'}>
                <a href={ROOT + '/about'}>Learn More</a>
              </Link>
            </button>
          </div>
          <div className={styles.video + ' animate__animated animate__zoomIn'}>
            <Iframe
              url='https://www.youtube.com/embed/klXzntaBZ3c'
              className={styles.iframe}
            ></Iframe>
          </div>
        </section>
        <section id='team_members' className={styles.team_members_section}>
          <h1 data-aos='fade-in' data-aos-duration='2000'>
            Team Members
          </h1>
          <div className={styles.cards_container}>
            {members.map((member) => {
              return (
                <MemberCard
                  key={member.id}
                  member={member}
                  styles={styles}
                  handleLoading={runLoading}
                />
              );
            })}
          </div>
        </section>
        <section id='services' className={styles.services_section}>
          <h1 data-aos='fade-up' data-aos-duration='2000'>
            Our Services
          </h1>
          <div className={styles.serviceCards}>
            {[...Array(6).keys()].map((service, index) => {
              return (
                <ServiceCard
                  key={index}
                  img={services[index].image}
                  serviceName={services[index].name}
                  serviceDesc={services[index].description}
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

export async function getStaticProps() {
  const dirname = fs
    .realpathSync('./next.config.js')
    .replace('/next.config.js', '');

  const members = JSON.parse(
    fs.readFileSync(`${dirname}/data/members.json`, 'utf-8')
  );
  const services = JSON.parse(
    fs.readFileSync(`${dirname}/data/services.json`, 'utf-8')
  );

  return {
    props: {
      members,
      services,
    },
  };
}
