'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import styles from './LanguageSwitcher.module.css'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button 
        className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
        onClick={() => setLanguage('en')}
      >
        En
      </button>
      <button 
        className={`${styles.button} ${language === 'fi' ? styles.active : ''}`}
        onClick={() => setLanguage('fi')}
      >
        Fi
      </button>
    </div>
  )
} 