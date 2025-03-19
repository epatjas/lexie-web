'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './PageNav.module.css'
import { useLanguage } from '@/contexts/LanguageContext'

const PageNav = () => {
  const { t } = useLanguage()
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link 
        href="/terms" 
        className={`${styles.link} ${pathname === '/terms' ? styles.active : ''}`}
      >
        {t('termsOfService')}
      </Link>
      <Link 
        href="/privacy" 
        className={`${styles.link} ${pathname === '/privacy' ? styles.active : ''}`}
      >
        {t('privacyPolicy')}
      </Link>
    </nav>
  )
}

export default PageNav 