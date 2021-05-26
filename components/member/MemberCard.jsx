import React from 'react';

const MemberCard = ({ memberName }) => {
  return (
    <div data-aos='fade-up' data-aos-duration='2000' className='card'>
      <div className='card_photo'></div>
      <div className='card_description'>
        <p>
          <strong>{memberName}</strong>
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
