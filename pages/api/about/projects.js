import fs from 'fs';

const memberHandler = (req, res) => {
  const allProjects = JSON.parse(
    fs.readFileSync(
      `${process.env.NEXT_PUBLIC_DIRNAME}/data/projects.json`,
      'utf-8'
    )
  );

  res.status(200).json([...allProjects]);
};

export default memberHandler;
