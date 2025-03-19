'use client'
import React from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import styles from './Hero.module.css'
import ParticleBackground from '@/components/ui/ParticleBackground'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <ParticleBackground />
      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <Image
              src="/images/logo.png"
              alt="Lexie logo"
              width={133}
              height={40}
              className={styles.logo}
            />
            <h1 className={styles.title}>{t('betterWayToLearn')}</h1>
            <p className={styles.ingress}>
              {t('heroDescription')}
            </p>
            <div className={styles.emailFormContainer}>
              <div className={styles.emailForm}>
                <input 
                  type="email" 
                  placeholder={t('insertEmail')} 
                  className={styles.emailInput}
                />
                <button className={styles.emailButton}>
                  {t('getEarlyAccess')}
                </button>
              </div>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/Hero.png"
              alt="Lexie app interface"
              width={750}
              height={1624}
              priority
              className={styles.image}
            />
          </div>
        </div>
      </Container>
    </section>
  )
} 