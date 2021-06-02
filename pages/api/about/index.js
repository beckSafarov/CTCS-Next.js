import fs from 'fs';

const handler = (req, res) => {
  const aboutSectionData = JSON.parse(
    fs.readFileSync(
      `${process.env.NEXT_PUBLIC_DIRNAME}/data/about.json`,
      'utf-8'
    )
  );

  res.status(200).json(aboutSectionData);
};

export default handler;
