import fs from 'fs';

const handler = (req, res) => {
  const activitiesData = JSON.parse(
    fs.readFileSync(
      `${process.env.NEXT_PUBLIC_DIRNAME}/data/activities.json`,
      'utf-8'
    )
  );

  res.status(200).json([...activitiesData]);
};

export default handler;
