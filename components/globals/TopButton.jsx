import React from 'react';

const TopButton = ({ active = false, onClick, link = `#landing_page` }) => {
  return (
    <div className={active ? 'go_to_top active' : 'go_to_top'}>
      <a href={link} onClick={onClick}>
        <i className='fas fa-chevron-up fa-2x'></i>
      </a>
    </div>
  );
};

export default TopButton;
