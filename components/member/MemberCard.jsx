import React from 'react';

const MemberCard = ({ memberName, styles }) => {
  // data-aos='fade-up' data-aos-duration='2000'
  return (
    <div className={styles.card}>
      <div className={styles.card_photo}></div>
      <div className={styles.card_description}>
        <p>
          <strong>{memberName}</strong>
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
