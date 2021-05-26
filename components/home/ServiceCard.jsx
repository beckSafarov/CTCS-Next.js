import React from 'react';
import * as links from '../config';

const ServiceCard = ({ img, serviceName, serviceDesc }) => {
  return (
    <div className='serviceCard' data-aos='fade-up' data-aos-duration='2000'>
      <div className='icon'>
        <img src={links.ROOT + '/public/img/' + img} alt='Service Card' />
      </div>
      <h3>{serviceName}</h3>
      {serviceDesc}
    </div>
  );
};

export default ServiceCard;
