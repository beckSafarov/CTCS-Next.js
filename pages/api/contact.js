import fs from 'fs';

const handler = (req, res) => {
  const contactData = JSON.parse(
    fs.readFileSync(
      `${process.env.NEXT_PUBLIC_DIRNAME}/data/contact.json`,
      'utf-8'
    )
  );

  res.status(200).json(contactData);
};

export default handler;
