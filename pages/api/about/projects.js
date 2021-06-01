import fs from 'fs';
import { DIRNAME } from '../../../config';

const memberHandler = (req, res) => {
  const allProjects = JSON.parse(
    fs.readFileSync(`${DIRNAME}/data/projects.json`, 'utf-8')
  );

  res.status(200).json([...allProjects]);
};

export default memberHandler;
