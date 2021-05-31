import fs from 'fs';
import { DIRNAME } from '../../../config';

const handler = (req, res) => {
  const allMembers = JSON.parse(
    fs.readFileSync(`${DIRNAME}/data/members.json`, 'utf-8')
  );

  res.status(200).json([...allMembers]);
};

export default handler;
