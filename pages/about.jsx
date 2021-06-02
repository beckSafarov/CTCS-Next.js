import ProjectInfo from '../components/ProjectInfo';
import styles from '../styles/About.module.css';
import Meta from '../components/globals/Meta';
import Img from 'next/image';
import Loader from '../components/globals/Loader';

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
              <a
                href={`${process.env.NEXT_PUBLIC_ROOT}` + '/img/ct.png'}
                target='_blank'
              >
                <div className={styles.about_photo}>
                  <Img
                    src={
                      `${process.env.NEXT_PUBLIC_ROOT}` + '/img/' + about.image
                    }
                    alt='Computational Thinking Program Aspects'
                    height={700}
                    width={1000}
                  ></Img>
                </div>
              </a>
              <p>
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
            {projects.map((project, index) => {
              return (
                <ProjectInfo
                  key={project.id}
                  projectName={project.name}
                  description={project.imgCaption}
                  texts={project.paragraphs}
                  img={`${`${process.env.NEXT_PUBLIC_ROOT}`}/img/${
                    project.image
                  }`}
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
  const aboutRes = await fetch(`${process.env.NEXT_PUBLIC_ROOT}/api/about`);
  const projectsRes = await fetch(
    `${process.env.NEXT_PUBLIC_ROOT}/api/about/projects`
  );

  const about = await aboutRes.json();
  const projects = await projectsRes.json();

  return {
    props: {
      about,
      projects,
    },
  };
}

export default about;
