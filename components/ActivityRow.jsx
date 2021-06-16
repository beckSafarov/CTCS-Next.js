import React from 'react';
import { ROOT } from '../config';
import Image from 'next/image';

const ActivityRow = ({
  activityName,
  image,
  body,
  modalImgClicked,
  caption,
  styles,
}) => {
  return (
    <div data-aos='fade-up' data-aos-duration='2000' className={styles.cobot}>
      <div className={styles.activity_row}>
        <h2 className={styles.headline_over_image}>{activityName}</h2>
        <div className={styles.activity_img}>
          <img
            onClick={modalImgClicked}
            className='img'
            src={ROOT + '/img/' + image}
            alt={caption}
          />
          {/* <Image
            onClick={modalImgClicked}
            src={ROOT + '/img/' + image}
            alt={caption}
            width={500}
            height={350}
          ></Image> */}
        </div>
        <div className={styles.activity_body}>
          <h2 className={styles.headline_over_body}>{activityName}</h2>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityRow;
