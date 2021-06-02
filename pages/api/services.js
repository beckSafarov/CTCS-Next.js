import fs from 'fs';

const handler = (req, res) => {
  const allServices = JSON.parse(
    fs.readFileSync(
      `${process.env.NEXT_PUBLIC_DIRNAME}/data/services.json`,
      'utf-8'
    )
  );

  res.status(200).json([...allServices]);
};

export default handler;
