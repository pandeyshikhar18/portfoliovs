import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  { social: 'website', link: 'shikhars-portfolio.vercel.app', href: 'https://shikhars-portfolio.vercel.app/' },
  { social: 'email', link: 'pandeyshikhar07@gmail.com', href: 'mailto:pandeyshikhar07@gmail.com' },
  { social: 'github', link: 'pandeyshikhar18', href: 'https://github.com/pandeyshikhar18' },
  { social: 'linkedin', link: 'shikharpandey', href: 'https://www.linkedin.com/in/shikhar-pandey-a54442222/' },
  { social: 'twitter', link: 'shikharp18', href: 'https://www.twitter.com/shikharp18' },
  { social: 'instagram', link: 'shikharp18', href: 'https://www.instagram.com/shikharp18' },
  { social: 'resume', link: 'View Resume', href: 'https://drive.google.com/file/d/1TZvo6uZt0IsQkiUsuCMFYoeYSQjxzeu5/view?usp=sharing' }, // added
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      {/* Social Links */}
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener noreferrer">{item.link}</a>;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
