import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import AOS from 'aos';
import Link from 'next/link';
import * as links from '../config';
import Meta from '../components/globals/Meta';
import MemberCard from '../components/member/MemberCard';
import ServiceCard from '../components/home/ServiceCard';
import Iframe from 'react-iframe';
import Img from 'next/image';
import Loader from '../components/globals/Loader';

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
        <Img
          src={links.ROOT + '/img/logo_main.png'}
          alt='CT USM'
          height={60}
          width={60}
        ></Img>
      </div>

      <main className={styles.main}>
        {/* landing section */}
        <section id='landing_page' className={styles.landing_page_section}>
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
        <section id='team_members' className={styles.team_members_section}>
          {/* data-aos='fade-in' data-aos-duration='2000' */}
          <h1>Team Members</h1>
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
          <h1>Our Services</h1>
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
  const membersRes = await fetch(`${links.ROOT}/api/members`);
  const servicesRes = await fetch(`${links.ROOT}/api/services`);

  const members = await membersRes.json();
  const services = await servicesRes.json();

  return {
    props: {
      members,
      services,
    },
  };
}
