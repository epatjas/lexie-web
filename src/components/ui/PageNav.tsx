'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './PageNav.module.css'
import { useLanguage } from '@/contexts/LanguageContext'

export default function PageNav() {
  const pathname = usePathname()
  const { t } = useLanguage()

  return (
    <nav className={styles.nav}>
      <Link 
        href="/terms" 
        className={`${styles.link} ${pathname === '/terms' ? styles.activeLink : ''}`}
      >
        {t('termsOfService')}
      </Link>
      <Link 
        href="/privacy" 
        className={`${styles.link} ${pathname === '/privacy' ? styles.activeLink : ''}`}
      >
        {t('privacyPolicy')}
      </Link>
    </nav>
  )
} 