import fs from 'fs';
import { DIRNAME } from '../../../config';
const allMembers = JSON.parse(
  fs.readFileSync(`${DIRNAME}/data/members.json`, 'utf-8')
);

const memberHandler = (req, res) => {
  const { memberId } = req.query;
  let status = 200;
  let success = true;
  const member = allMembers.find((curr) => curr.id == memberId);

  if (!member) {
    status = 404;
    success = false;
  }
  res.status(status).json(member ? member : { error: 'Not found' });
};

export default memberHandler;
