'use client'
import React from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import styles from './Features.module.css'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Features() {
  const { t } = useLanguage();
  
  return (
    <section className={styles.features}>
      <Container>
        <h2 className={styles.title}>{t('takePicture')}</h2>
        <p className={styles.ingress}>{t('featuresIngress')}</p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/1.png"
                alt="Text editing view"
                width={600}
                height={450}
                className={styles.image}
              />
            </div>
            <h3>{t('adaptiveText')}</h3>
            <p>
              {t('adaptiveTextDesc')}
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/2.png"
                alt="Flashcard view"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
            <h3>{t('effectiveWay')}</h3>
            <p>
              {t('effectiveWayDesc')}
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/3.png"
                alt="Exercise view"
                width={600}
                height={450}
                className={styles.image}
              />
            </div>
            <h3>{t('testYourKnowledge')}</h3>
            <p>
              {t('testYourKnowledgeDesc')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
} 