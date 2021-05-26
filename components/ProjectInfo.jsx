import React from 'react';
import * as links from '../config';

const ProjectInfo = ({ projectName, description, text1, text2, img }) => {
  return (
    <div className='project'>
      <h3>{projectName}</h3>
      <p>{text1} text2,</p>
      <div className='centered_column'>
        <Link href={links.ROOT + '/public/img/' + img}>
          <a className='center_align' href='public/img/ct.png' target='_blank'>
            <img
              className='project_photo'
              src={links.ROOT + '/public/img/' + img}
              alt={description}
            />
            feef
          </a>
        </Link>
        <p>{description}</p>
      </div>
      <p>{text2 && text2}</p>
    </div>
  );
};

export default ProjectInfo;
