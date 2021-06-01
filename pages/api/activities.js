import fs from 'fs';
import { DIRNAME } from '../../config';

const handler = (req, res) => {
  const activitiesData = JSON.parse(
    fs.readFileSync(`${DIRNAME}/data/activities.json`, 'utf-8')
  );

  res.status(200).json([...activitiesData]);
};

export default handler;
