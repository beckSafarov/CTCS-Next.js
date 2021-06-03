import React from 'react';
import { ROOT } from '../../config';

const ServiceCard = ({ img, serviceName, serviceDesc, styles }) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='2000'
      className={styles.serviceCard}
    >
      <div className={styles.icon}>
        <img src={`${ROOT}/img/${img}`} alt='Service Card' />
      </div>
      <h3>{serviceName}</h3>
      {serviceDesc}
    </div>
  );
};

export default ServiceCard;
