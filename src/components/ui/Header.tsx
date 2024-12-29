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
          <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full">
            <ArrowRight className="w-4 h-4 text-black" strokeWidth={2} />
          </div>
        </Link>
      </div>
    </header>
  )
} 