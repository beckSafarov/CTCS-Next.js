import React from 'react';
import * as links from '../../config';

const ServiceCard = ({ img, serviceName, serviceDesc, styles }) => {
  // data-aos='fade-up'
  // data-aos-duration='2000'
  return (
    <div className={styles.serviceCard}>
      <div className={styles.icon}>
        <img src={links.ROOT + '/img/' + img} alt='Service Card' />
      </div>
      <h3>{serviceName}</h3>
      {serviceDesc}
    </div>
  );
};

export default ServiceCard;
