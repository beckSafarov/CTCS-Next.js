import fs from 'fs';
const dirname = fs
  .realpathSync('./next.config.js')
  .replace('/next.config.js', '');

const handler = (req, res) => {
  const allMembers = JSON.parse(
    fs.readFileSync(`${dirname}/data/members.json`, 'utf-8')
  );

  res.status(200).json([...allMembers]);
};

export default handler;
