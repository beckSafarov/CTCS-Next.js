import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import AOS from 'aos';
import Link from 'next/link';
import * as links from '../config';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const changesHandler = () => {
    console.log('you clicked the btn');
  };
  return (
    <main>
      <section className='regular_section'></section>
    </main>
  );
}
