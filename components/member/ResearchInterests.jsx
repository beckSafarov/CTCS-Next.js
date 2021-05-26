import React from 'react';

const ResearchInterests = ({ researchInterests = [] }) => {
  return (
    <>
      <p className='label'>
        <strong>Research Interests</strong>
      </p>
      <div className='description'>
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
