import React from 'react';
import links from '../config';

const ActivityRow = ({
  cobotNumber,
  image,
  imgDescription,
  yearNumber,
  body,
}) => {
  // const cobotNumber = 0;
  // const image = 'undefined';
  const modalImgClicked = (image, imgDescription) => {
    console.log(`img: ${image} and description: ${imgDescription}`);
  };
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='2000'
      className='cobot'
      id={'cobot' + cobotNumber}
    >
      <div className='activity_row'>
        <h2 className='headline_over_image'>Year {yearNumber}</h2>
        <div className='activity_img'>
          <img
            onClick={modalImgClicked}
            className='img'
            src={links.ROOT + '/public/img/' + image}
            alt='Activity Image'
          />
        </div>
        <div className='activity_body'>
          <h2 className='headline_over_body'>
            Year {yearNumber}. Cobot {cobotNumber}
          </h2>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityRow;
