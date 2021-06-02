import React from 'react';
import Link from 'next/link';
import Loader from '../globals/Loader';
import { ROOT } from '../../config';

const MemberCard = ({ member, styles, handleLoading }) => {
  // data-aos='fade-up' data-aos-duration='2000'
  const link = `${ROOT}/members/${member.id}`;

  return (
    <Link href={link}>
      <a
        data-aos='fade-up'
        data-aos-duration='2000'
        className={styles.card}
        href={link}
        onClick={handleLoading}
      >
        <div className={styles.card_photo}></div>
        <div className={styles.card_description}>
          <p>
            <strong>{member.name}</strong>
          </p>
        </div>
      </a>
    </Link>
  );
};

export default MemberCard;
