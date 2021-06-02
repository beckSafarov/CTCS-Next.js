import fs from 'fs';
const dirname = fs
  .realpathSync('./next.config.js')
  .replace('/next.config.js', '');

const handler = (req, res) => {
  const contactData = JSON.parse(
    fs.readFileSync(`${dirname}/data/contact.json`, 'utf-8')
  );

  res.status(200).json(contactData);
};

export default handler;
