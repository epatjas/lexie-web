import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} LexieLearn
        </div>
      </div>
    </footer>
  );
};

export default Footer; 