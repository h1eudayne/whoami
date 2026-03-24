import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'voduchieu42@gmail.com',
    href: 'mailto:voduchieu42@gmail.com',
  },
  {
    social: 'github',
    link: 'h1eudayne',
    href: 'https://github.com/h1eudayne',
  },
  {
    social: 'phone',
    link: '+84 915106276',
    href: 'tel:+84915106276',
  },
  {
    social: 'location',
    link: 'Ho Chi Minh City, Vietnam',
    href: 'https://maps.google.com/?q=Ho+Chi+Minh+City',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
