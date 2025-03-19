'use client'
import React from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import styles from './CTA.module.css'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTA() {
  const { t } = useLanguage();
  
  return (
    <section className={styles.cta} id="cta">
      <Container>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/4.png"
              alt="Lexie app interface"
              width={600}
              height={800}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <Image
              src="/images/logo.png"
              alt="Lexie logo"
              width={133}
              height={40}
              className={styles.logo}
            />
            <h2>{t('comeTest')}</h2>
            <p>
              {t('ctaDescription')}
            </p>
            <div className={styles.download} style={{ backgroundColor: '#17181A', border: '1px solid #22242B' }}>
              <p>{t('scanDownload')}</p>
              <div className={styles.qrContainer} style={{ backgroundColor: '#17181A', border: 'none' }}>
                <Image
                  src="/images/qr.png"
                  alt="QR code"
                  width={120}
                  height={120}
                  className={styles.qr}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 