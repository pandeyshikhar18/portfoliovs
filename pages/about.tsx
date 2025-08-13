import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.nameBlue}>Shikhar</span>{' '}
          <span className={styles.nameWhite}>Pandey</span>
        </h1>
        <div className={styles.subtitle}>
          Aspiring Software Engineer | ML, Data Science & Full Stack Dev Enthusiast
        </div>

        <div className={styles.aboutContent}>
          {/* About Me Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software engineer from Chandrapur, Maharashtra, with a strong foundation in 
              <span className={styles.highlight}> Machine Learning and Data Science</span>, and a growing passion 
              for <span className={styles.highlight}>Full Stack Web Development</span>. I’m driven by problem-solving 
              and love applying technology to create impactful solutions through intelligent systems, interactive web apps, and data-driven insights.
            </p>
            <p className={styles.paragraph}>
              I&apos;m currently honing my skills in frontend development with <span className={styles.highlight}>React</span>, 
              while also working with <span className={styles.highlight}>Node.js, Express, and MongoDB</span> to build 
              robust backend systems for my personal projects.
            </p>
          </section>

          {/* Experience Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>

            <div className={styles.experienceItem}>
              <h3 className={styles.experienceRole}>Summer Intern</h3>
              <p className={styles.experienceCompany}>
                <span className={styles.highlight}>Steel Authority of India (SAIL)</span> — Bhilai, India
              </p>
              <p className={styles.experienceDuration}>Apr – May 2024</p>
              <ul className={styles.experienceDetails}>
                <li>Developed the CIT department website with modern UI and functional design.</li>
                <li>Fixed Joomla language-switching issues to enhance user experience.</li>
                <li>Built a Java/SQL budget management tool in a single-page layout.</li>
                <li>Collaborated with cross-functional teams to gather requirements and deliver solutions efficiently.</li>
              </ul>
            </div>
          </section>

          {/* Publication Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Publication</h2>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Published IEEE Conference Paper</span> — &quot;Optimizing Resource 
              Efficiency in Smart Greenhouses through IoT&quot;. Designed a system integrating IoT sensors for real-time monitoring and predictive control to improve water, light, and temperature management.
            </p>
          </section>

          {/* Beyond Code Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Outside of tech, I enjoy writing and reading poetry, exploring literature, and keeping myself updated with the latest tech trends. 
              I believe in <span className={styles.highlight}>continuous learning</span> and staying curious.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
