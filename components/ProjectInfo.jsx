import React from 'react';
import * as links from '../config';
import Link from 'next/head';
import Img from 'next/image';

const ProjectInfo = ({ projectName, description, texts, img, styles }) => {
  return (
    <div className={styles.project}>
      <h3>{projectName}</h3>
      <p>{texts[0]}</p>
      <div className={styles.centered_column}>
        <a href={img} target='_blank' className='center_align'>
          <Img
            className={styles.project_photo}
            src={img}
            alt={description}
            height={500}
            width={700}
          ></Img>
        </a>
        <p>{description}</p>
      </div>
      <p>{texts[1] && texts[1]}</p>
    </div>
  );
};

export default ProjectInfo;
