'use client'
import React from 'react'
import Container from '@/components/ui/Container'
import { 
  GraduationCap, 
  BookCheck, 
  ScanText, 
  Languages, 
  HeartHandshake, 
  PersonStanding 
} from 'lucide-react'
import styles from './Benefits.module.css'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Benefits() {
  const { t } = useLanguage();
  
  return (
    <section className={styles.benefits}>
      <Container>
        <h2 className={styles.title}>{t('supportingEveryChild')}</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <GraduationCap size={24} strokeWidth={1.5} />
            </div>
            <h3>{t('personalLearningSupport')}</h3>
            <p>
              {t('personalLearningDesc')}
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <BookCheck size={24} strokeWidth={1.5} />
            </div>
            <h3>{t('enhanceLearning')}</h3>
            <p>
              {t('enhanceLearningDesc')}
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <ScanText size={24} strokeWidth={1.5} />
            </div>
            <h3>{t('learnAnywhere')}</h3>
            <p>
              {t('learnAnywhereDesc')}
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <Languages size={24} strokeWidth={1.5} />
            </div>
            <h3>{t('learnInYourLanguage')}</h3>
            <p>
              {t('learnInYourLanguageDesc')}
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <HeartHandshake size={24} strokeWidth={1.5} />
            </div>
            <h3>{t('buildConfidence')}</h3>
            <p>
              {t('buildConfidenceDesc')}
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <PersonStanding size={24} strokeWidth={1.5} />
            </div>
            <h3>{t('adaptiveLearning')}</h3>
            <p>
              {t('adaptiveLearningDesc')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
} 