import { useEffect, useState } from 'react';
import Meta from '../../components/globals/Meta';
import { contact, ROOT } from '../../config';
import styles from '../../styles/Member.module.css';
import { useRouter } from 'next/router';
import MemberInfoList from '../../components/member/MemberInfoList';

const memberHandler = ({ member }) => {
  const nameList = member.name.split(' ');
  let shortName = `${nameList[0]} ${nameList[1]}`;
  shortName = shortName.replace(',', '');
  const id = useRouter().query.id;
  const [photoClass, setPhotoClass] = useState(null);
  const [infoSectionVisibility, setInfoSectionVisibility] = useState(true);
  const [contactVisibility, setContactVisibility] = useState(false);

  useEffect(() => {
    setPhotoClass(findPersonName());
  }, []);

  const findPersonName = () => {
    switch (id) {
      case '1':
        return styles.zarul;
      case '2':
        return styles.sufril;
      case '3':
        return styles.adib;
      case '4':
        return styles.manmeet;
      case '5':
        return styles.maziani;
      case '6':
        return styles.azlan;
      default:
        return styles.zarul;
    }
  };

  const showContact = () => {
    if (!contactVisibility) {
      setContactVisibility(true);
      setInfoSectionVisibility(false);
    }
  };

  const showInfoSection = () => {
    if (!infoSectionVisibility) {
      setContactVisibility(false);
      setInfoSectionVisibility(true);
    }
  };

  return (
    <>
      <Meta
        title={shortName}
        keywords={`${member.name}, Computational Thinking`}
        description={`${member.name} as part of Computational Thinking Team in USM`}
      />

      <main className={styles.main}>
        <section className={styles.member_section}>
          {/* member card containing photo */}
          <div id='member' className={styles.member}>
            <div
              id='memberPhoto'
              className={styles.member_photo + ` ${photoClass}`}
            ></div>
            <h3>{member.name}</h3>
          </div>

          {/* tab menu */}
          <div className={styles.tab}>
            <div>
              <button
                onClick={showInfoSection}
                id='infoBtn'
                className={infoSectionVisibility ? styles.active : undefined}
              >
                General Info
              </button>
            </div>
            <div>
              <button
                id='contactBtn'
                onClick={showContact}
                className={contactVisibility ? styles.active : undefined}
              >
                Contact
              </button>
            </div>
          </div>

          {/* flex container */}
          <div
            className={
              (styles.flex_container, infoSectionVisibility ? '' : 'hidden')
            }
          >
            <div className={styles.grid_container}>
              <p className={styles.label}>
                <strong>Title</strong>
              </p>
              <p className={styles.description}>Senior Lecturer</p>
              <p className={styles.label}>
                <strong>Qualifications</strong>
              </p>
              <div className={styles.description}>
                <MemberInfoList list={member.qualifications} />
              </div>
              <p className={styles.label}>
                <strong>Specializations</strong>
              </p>
              <div className={styles.description}>
                <MemberInfoList list={member.specializations} />
              </div>
              {member.researchInterests && (
                <>
                  <p className={styles.label}>
                    <strong>Research Interests</strong>
                  </p>
                  <div className={styles.description}>
                    <MemberInfoList list={member.researchInterests} />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* contact section */}
          <div
            className={
              (styles.contact_section, contactVisibility ? '' : 'hidden')
            }
          >
            <div className={styles.info_box}>
              <i className='fas fa-map-marker-alt fa-2x'></i>
              <div className={styles.details}>
                <h4>Address</h4>
                <p>{member.address}</p>
              </div>
            </div>
            <div className={styles.info_box}>
              <i className='fas fa-envelope fa-2x'></i>
              <div className={styles.details}>
                <h4>Email</h4>
                <a href={`mailto:${member.email}`}>{member.email}</a>
              </div>
            </div>
            <div className={styles.info_box}>
              <i className='fas fa-phone-alt fa-2x'></i>
              <div className={styles.details}>
                <h4>Phone</h4>
                <p>{member.call}</p>
              </div>
            </div>
            <div className={styles.info_box}>
              <i className={'fas fa-fax fa-2x'}></i>
              <div className={styles.details}>
                <h4>Fax</h4>
                <p>{member.fax}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getStaticProps({ params }) {
  const res = await fetch(`${ROOT}/api/members/${params.id}`);

  const member = await res.json();

  return {
    props: {
      member,
    },
  };
}

export async function getStaticPaths(context) {
  const res = await fetch(`${ROOT}/api/members`);
  const members = await res.json();

  const ids = members.map((member) => member.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: false };
}

export default memberHandler;
