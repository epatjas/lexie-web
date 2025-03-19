"use client"

import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { t } = useLanguage();
  
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/images/app_logo.png"
            alt="LexieLearn" 
            width={48} 
            height={48} 
          />
          <span>LexieLearn</span>
        </Link>
        
        <div className={styles.rightSection}>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
} 