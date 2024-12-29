"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import styles from './Header.module.css'

export default function Header() {
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
        
        <Link href="/#cta" className={styles.button}>
          Kokeile ilmaiseksi
          <div className={styles.iconWrapper}>
            <ArrowRight className={styles.icon} strokeWidth={2} />
          </div>
        </Link>
      </div>
    </header>
  )
} 