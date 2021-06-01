import fs from 'fs';
import { DIRNAME } from '../../config';

const handler = (req, res) => {
  const allServices = JSON.parse(
    fs.readFileSync(`${DIRNAME}/data/services.json`, 'utf-8')
  );

  res.status(200).json([...allServices]);
};

export default handler;
