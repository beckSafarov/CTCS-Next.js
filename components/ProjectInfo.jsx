import React from 'react';
import * as links from '../config';
import Link from 'next/head';

const ProjectInfo = ({ projectName, description, texts, img, styles }) => {
  console.log(img);
  return (
    <div className={styles.project}>
      <h3>{projectName}</h3>
      <p>{texts[0]}</p>
      <div className={styles.centered_column}>
        <Link href={img}>
          <a className={styles.center_align} href={img} target='_blank'>
            <img className={styles.project_photo} src={img} alt={description} />
            feef
          </a>
        </Link>
        <p>{description}</p>
      </div>
      <p>{texts[1] && texts[1]}</p>
    </div>
  );
};

export default ProjectInfo;
