import ProjectInfo from '../components/ProjectInfo';
import styles from '../styles/About.module.css';
import Meta from '../components/globals/Meta';
import Loader from '../components/globals/Loader';
import { ROOT } from '../config';
import Image from 'next/image';
import fs from 'fs';

const about = ({ about, projects }) => {
  return (
    <>
      <Meta
        title={'About | CTCS USM'}
        keywords={'computational thinking, computer science, usm'}
        description={'Computational Thinking Research Team in USM'}
      />

      <main className={styles.main}>
        <Loader />
        <section className={styles.section}>
          <div className={styles.about}>
            <h1 className={styles.about_title}>
              Computational Thinking And Computer Science Teaching Certificate
              Programme{' '}
            </h1>

            <div className={styles.centered_column}>
              <a href={`${ROOT}/img/ct.png`} target='_blank'>
                <div className={styles.about_photo}>
                  {/* <img
                    src={`${ROOT}/img/${about.image}`}
                    alt='Computational Thinking Program Aspects'
                  /> */}
                  <div className='bordered rounded'>
                    <Image
                      src={`${ROOT}/img/${about.image}`}
                      alt='Computational Thinking Program Aspects'
                      width={750}
                      height={600}
                    ></Image>
                  </div>
                </div>
              </a>
              <p className={styles.caption}>
                Icons made by{' '}
                <a href='https://www.freepik.com' title='Freepik'>
                  Freepik
                </a>{' '}
                from{' '}
                <a href='https://www.flaticon.com/' title='Flaticon'>
                  www.flaticon.com
                </a>
              </p>
            </div>
            {about.paragraphs.map((current, index) => {
              return <p key={index}>{current}</p>;
            })}
          </div>

          <div className={styles.projects}>
            <h1>Our Projects</h1>
            {projects.map((project) => {
              return (
                <ProjectInfo
                  key={project.id}
                  projectName={project.name}
                  description={project.imgCaption}
                  texts={project.paragraphs}
                  img={`${`${ROOT}`}/img/${project.image}`}
                  styles={styles}
                />
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const dirname = fs
    .realpathSync('./next.config.js')
    .replace('/next.config.js', '');

  const about = JSON.parse(
    fs.readFileSync(`${dirname}/data/about.json`, 'utf-8')
  );

  const projects = JSON.parse(
    fs.readFileSync(`${dirname}/data/projects.json`, 'utf-8')
  );

  return {
    props: {
      about,
      projects,
    },
  };
}

export default about;
