import React from 'react';
import { ROOT } from '../../config';

const Loader = ({ run = true }) => {
  return (
    // <div className='loader-container'>
    //   <img src={`${ROOT}/img/loading.gif`} />
    // </div>
    run && (
      <div className='progress_container'>
        <div className='progress_bar'> </div>
      </div>
    )
  );
};

export default Loader;
