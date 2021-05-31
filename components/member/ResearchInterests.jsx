import React from 'react';

const ResearchInterests = ({ researchInterests = [], styles }) => {
  return (
    <>
      <p className={styles.label}>
        <strong>Research Interests</strong>
      </p>
      <div className={styles.description}>
        <ul>
          {researchInterests.forEach((interest, index) => {
            return <li key={index}>{interest}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default ResearchInterests;
