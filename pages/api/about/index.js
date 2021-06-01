import fs from 'fs';
import { DIRNAME } from '../../../config';

const handler = (req, res) => {
  const aboutSectionData = JSON.parse(
    fs.readFileSync(`${DIRNAME}/data/about.json`, 'utf-8')
  );

  res.status(200).json(aboutSectionData);
};

export default handler;
