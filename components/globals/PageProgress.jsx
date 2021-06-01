import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const PageProgress = ({ now }) => {
  return <ProgressBar now={now} label={`${now}`} srOnly />;
};

export default PageProgress;
