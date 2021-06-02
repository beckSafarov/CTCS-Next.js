import React from 'react';
import Img from 'next/image';

const ProjectInfo = ({ projectName, description, texts, img, styles }) => {
  return (
    <div className={styles.project}>
      <h2>{projectName}</h2>
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
      {texts.map((current, index) => {
        return <p key={index}>{current}</p>;
      })}
    </div>
  );
};

export default ProjectInfo;
