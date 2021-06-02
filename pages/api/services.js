import fs from 'fs';
const dirname = fs
  .realpathSync('./next.config.js')
  .replace('/next.config.js', '');

const handler = (req, res) => {
  const allServices = JSON.parse(
    fs.readFileSync(`${dirname}/data/services.json`, 'utf-8')
  );

  res.status(200).json([...allServices]);
};

export default handler;
