import fs from 'fs';

const handler = (req, res) => {
  const dirname = fs
    .realpathSync('./next.config.js')
    .replace('/next.config.js', '');
  const aboutSectionData = JSON.parse(
    fs.readFileSync(`${dirname}/data/about.json`, 'utf-8')
  );

  res.status(200).json(aboutSectionData);
};

export default handler;
