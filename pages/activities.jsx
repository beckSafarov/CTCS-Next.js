import { useEffect, useState } from 'react';
import styles from '../styles/Activities.module.css';
import AOS from 'aos';
import Link from 'next/link';
import * as links from '../config';
import Meta from '../components/globals/Meta';
import Img from 'next/image';
import Loader from '../components/globals/Loader';
import ActivityRow from '../components/ActivityRow';

const activityTitles = ['2019: Cobot 1', '2020: Cobot 2', '2021: Cobot 3'];
const images = ['dog.jpg', 'public-speaking-1.jpg', 'public-speaking-2.jpg'];
const captions = ['Dog Reading', 'Awesome Presentation', 'Boring Presentation'];

const acitivityBodies = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima, alias harum laborum ipsum quasi nisi, quisquam esse amet reiciendis aspernatur corrupti quis odio minus dolorum! Pariatur, architecto temporibus asperiores qui, saepe earum a sed libero nam laboriosam corrupti aut odio fugiat quos porro animi quibusdam deleniti consectetur similique corporis.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima, alias harum laborum ipsum quasi nisi, quisquam esse amet reiciendis aspernatur corrupti quis odio minus dolorum! Pariatur, architecto temporibus asperiores qui, saepe earum a sed libero nam laboriosam corrupti aut odio fugiat quos porro animi quibusdam deleniti consectetur similique corporis.',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores minima, alias harum laborum ipsum quasi nisi, quisquam esse amet reiciendis aspernatur corrupti quis odio minus dolorum! Pariatur, architecto temporibus asperiores qui, saepe earum a sed libero nam laboriosam corrupti aut odio fugiat quos porro animi quibusdam deleniti consectetur similique corporis.',
];

const activities = () => {
  const [modal, setModal] = useState({
    display: false,
    img: null,
    caption: null,
  });

  const showModalImg = (e) => {
    setModal({
      display: true,
      img: e.target.src,
      caption: e.target.alt,
    });
  };

  const closeModalImg = () => {
    if (modal.display) {
      setModal({
        display: false,
        img: null,
        caption: null,
      });
    }
  };

  return (
    <>
      <Loader />
      <Meta
        title={'Activities | CT USM'}
        keywords={'computational thinking, computer science, usm'}
        description={'Computational Thinking Research Team in USM'}
      />

      <main className={styles.main}>
        <section className={styles.activities_section}>
          <h1>Activities</h1>
          {/* activity bodies or sections */}
          <div className={styles.activity_infoboxes}>
            {activityTitles.map((activity, index) => {
              return (
                <ActivityRow
                  key={index + 1}
                  activityName={activity}
                  image={images[index]}
                  body={acitivityBodies[index]}
                  modalImgClicked={showModalImg}
                  caption={captions[index]}
                  styles={styles}
                />
              );
            })}
          </div>

          {/* modal to be shown when an image is zoomed */}
          <div
            id='modal'
            className={modal.display ? styles.modal : 'hidden'}
            onClick={closeModalImg}
          >
            <img
              src={modal.img || ''}
              alt='Image'
              className={styles.modal_content}
            />
            <br />
            <div className={styles.caption}>{modal.caption || ''}</div>
          </div>
        </section>
      </main>
    </>
  );
};

export default activities;
