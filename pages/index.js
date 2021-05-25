import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import sample from '../styles/Sample.module.css';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <section>
          <h1>Hello world</h1>
          <div className={sample.div}>
            <p>Sample paragraph inside div, supposed to be red</p>
            <i className='far fa-heart'></i>
          </div>
        </section>
      </main>

      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
