import React from 'react';

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
            src={process.env.NEXT_PUBLIC_ROOT + '/img/' + image}
            alt={caption}
          />
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
