import fs from 'fs';
import { DIRNAME } from '../../config';

const handler = (req, res) => {
  const contactData = JSON.parse(
    fs.readFileSync(`${DIRNAME}/data/contact.json`, 'utf-8')
  );

  res.status(200).json(contactData);
};

export default handler;
