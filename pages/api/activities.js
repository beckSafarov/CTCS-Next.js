import fs from 'fs';
const dirname = fs
  .realpathSync('./next.config.js')
  .replace('/next.config.js', '');

const handler = (req, res) => {
  const activitiesData = JSON.parse(
    fs.readFileSync(`${dirname}/data/activities.json`, 'utf-8')
  );

  res.status(200).json([...activitiesData]);
};

export default handler;
