import fs from 'fs';

const handler = (req, res) => {
  const allMembers = JSON.parse(
    fs.readFileSync(
      `${process.env.NEXT_PUBLIC_DIRNAME}/data/members.json`,
      'utf-8'
    )
  );

  res.status(200).json([...allMembers]);
};

export default handler;
