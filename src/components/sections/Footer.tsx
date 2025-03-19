'use client'
import styles from './Footer.module.css';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="/privacy">{t('privacy')}</a>
          <a href="/terms">{t('terms')}</a>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} LexieLearn
        </div>
      </div>
    </footer>
  );
};

export default Footer; 