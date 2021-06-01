import { useState } from 'react';
import ProjectInfo from '../components/ProjectInfo';
import styles from '../styles/About.module.css';
import * as links from '../config';
import Meta from '../components/globals/Meta';
import Img from 'next/image';
import Loader from '../components/globals/Loader';

const dummyText =
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, consequuntur repellendus. Expedita, temporibus excepturi. Hic numquam optio cum possimus omnis perferendis a. Quasi, laborum? Cupiditate possimus vero eveniet pariatur provident voluptate fugit. Inventore, iusto mollitia quasi deserunt quia dignissimos, officiis cumque aperiam ipsa, natus tenetur asperiores velit magni a nihil!';

const texts = [
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, consequuntur repellendus. Expedita, temporibus excepturi. Hic numquam optio cum possimus omnis perferendis a. Quasi, laborum? Cupiditate possimus vero eveniet pariatur provident voluptate fugit. Inventore, iusto mollitia quasi deserunt quia dignissimos, officiis cumque aperiam ipsa, natus tenetur asperiores velit magni a nihil!',
  'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, consequuntur repellendus. Expedita, temporibus excepturi. Hic numquam optio cum possimus omnis perferendis a. Quasi, laborum? Cupiditate possimus vero eveniet pariatur provident voluptate fugit. Inventore, iusto mollitia quasi deserunt quia dignissimos, officiis cumque aperiam ipsa, natus tenetur asperiores velit magni a nihil!',
];

const projectNames = ['Project 1', 'Project 2', 'Project 3'];

const descriptions = [
  'Project 1 description',
  'Project 2 description',
  'Project 3 description',
];

const images = [
  `${links.ROOT}/img/p5.jpg`,
  `${links.ROOT}/img/p1.jpg`,
  `${links.ROOT}/img/p2.jpg`,
];

const about = () => {
  // const pageVisited = true;

  return (
    <>
      <Meta
        title={'About | CTCS USM'}
        keywords={'computational thinking, computer science, usm'}
        description={'Computational Thinking Research Team in USM'}
      />

      <main className={styles.main}>
        <Loader />
        <section className={styles.section}>
          <div className={styles.about}>
            <h1 className={styles.about_title}>
              Computational Thinking And Computer Science Teaching Certificate
              Programme{' '}
            </h1>
            <p>{dummyText}</p>
            <div className={styles.centered_column}>
              <a href={links.ROOT + '/img/ct.png'} target='_blank'>
                <div className={styles.about_photo}>
                  <Img
                    src={links.ROOT + '/img/ct.png'}
                    alt='Computational Thinking Program Aspects'
                    height={700}
                    width={1000}
                  ></Img>
                </div>
              </a>
              <p>
                Icons made by{' '}
                <a href='https://www.freepik.com' title='Freepik'>
                  Freepik
                </a>{' '}
                from{' '}
                <a href='https://www.flaticon.com/' title='Flaticon'>
                  www.flaticon.com
                </a>
              </p>
            </div>
            <p>{dummyText}</p>
          </div>
          <div className={styles.projects}>
            <h1>Our Projects</h1>
            {projectNames.map((card, index) => {
              return (
                <ProjectInfo
                  key={index}
                  projectName={projectNames[index]}
                  description={descriptions[index]}
                  texts={texts}
                  img={images[index]}
                  styles={styles}
                />
              );
            })}
          </div>
          {/* <img src={images[0]} alt='Img here' width={700} height={500} /> */}
        </section>
      </main>
    </>
  );
};

export default about;
