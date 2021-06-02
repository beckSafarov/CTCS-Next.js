import React from 'react';
import Img from 'next/image';

const ServiceCard = ({ img, serviceName, serviceDesc, styles }) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='2000'
      className={styles.serviceCard}
    >
      <div className={styles.icon}>
        <Img
          src={`${process.env.NEXT_PUBLIC_ROOT}` + '/img/' + img}
          alt='Service Card'
          height={60}
          width={60}
        ></Img>
      </div>
      <h3>{serviceName}</h3>
      {serviceDesc}
    </div>
  );
};

export default ServiceCard;
