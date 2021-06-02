import { useState, useEffect } from 'react';
import styles from '../styles/Activities.module.css';
import AOS from 'aos';
import Meta from '../components/globals/Meta';
import Loader from '../components/globals/Loader';

import ActivityRow from '../components/ActivityRow';

const activities = ({ activities }) => {
  const [modal, setModal] = useState({
    display: false,
    img: null,
    caption: null,
  });

  useEffect(() => AOS.init(), []);

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
            {activities.map((activity, index) => {
              return (
                <ActivityRow
                  key={activity.id}
                  activityName={activity.title}
                  image={activity.image}
                  body={activity.body}
                  modalImgClicked={showModalImg}
                  caption={activity.caption}
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

export async function getStaticProps() {
  const activitiesRes = await fetch(
    `${`${process.env.NEXT_PUBLIC_ROOT}`}/api/activities`
  );

  const activities = await activitiesRes.json();

  return {
    props: {
      activities,
    },
  };
}

export default activities;
