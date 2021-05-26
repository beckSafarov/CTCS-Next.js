import Layout from '../components/globals/Layout';
import Meta from '../components/globals/Meta';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
