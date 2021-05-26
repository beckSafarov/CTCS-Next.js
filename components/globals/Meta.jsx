import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      {/* font awesome */}
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
        integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
        crossorigin='anonymous'
      />

      {/* animate.css for animations */}
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
      />

      {/* animate on scroll */}
      <link
        href='https://unpkg.com/aos@2.3.1/dist/aos.css'
        rel='stylesheet'
      ></link>
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'WebDev Newz',
  keywords: 'web development, programming',
  description: 'Get the latest news in web dev',
};

export default Meta;
