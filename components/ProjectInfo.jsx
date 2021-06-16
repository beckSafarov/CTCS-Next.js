import React from 'react';
import Image from 'next/image';

const ProjectInfo = ({ projectName, description, texts, img, styles }) => {
  return (
    <div className={styles.project}>
      <h2>{projectName}</h2>
      <div className={styles.centered_column}>
        <a href={img} target='_blank' className='center_align'>
          {/* <img className={styles.project_photo} src={img} alt={description} /> */}
          <Image src={img} alt={description} width={570} height={400}></Image>
        </a>
        <p className={styles.caption}>{description}</p>
      </div>
      {texts.map((current, index) => {
        return <p key={index}>{current}</p>;
      })}
    </div>
  );
};

export default ProjectInfo;
