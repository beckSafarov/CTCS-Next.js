import fs from 'fs';

const memberHandler = (req, res) => {
  const dirname = fs
    .realpathSync('./next.config.js')
    .replace('/next.config.js', '');

  const allProjects = JSON.parse(
    fs.readFileSync(`${dirname}/data/projects.json`, 'utf-8')
  );

  res.status(200).json([...allProjects]);
};

export default memberHandler;
