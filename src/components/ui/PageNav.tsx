'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './PageNav.module.css'

const PageNav = () => {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link 
        href="/terms" 
        className={`${styles.link} ${pathname === '/terms' ? styles.active : ''}`}
      >
        Käyttöehdot
      </Link>
      <Link 
        href="/privacy" 
        className={`${styles.link} ${pathname === '/privacy' ? styles.active : ''}`}
      >
        Tietosuoja
      </Link>
    </nav>
  )
}

export default PageNav 