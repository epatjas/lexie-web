'use client'
import React, { useState } from 'react'
import Container from '@/components/ui/Container'
import { ChevronDown } from 'lucide-react'
import styles from './FAQ.module.css'
import { useLanguage } from '@/contexts/LanguageContext'

// Accordion component
const Accordion = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion} style={{ backgroundColor: '#17181A', border: '1px solid #22242B' }}>
      <button 
        className={styles.accordionHeader} 
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: '#17181A' }}
      >
        <span style={{ color: 'var(--text-primary)' }}>{title}</span>
        <ChevronDown 
          size={20} 
          style={{ 
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', 
            transition: 'transform 0.3s ease',
            color: 'var(--text-primary)'
          }} 
        />
      </button>
      {isOpen && (
        <div className={styles.accordionContent} style={{ backgroundColor: '#17181A' }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  const { t } = useLanguage();
  
  return (
    <section className={styles.faq}>
      <Container>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('faq')}</h2>
          <div className={styles.grid}>
            <Accordion title={t('howLexieWorks')}>
              <p>{t('howLexieWorksAnswer')}</p>
            </Accordion>
            <Accordion title={t('whatCanLearn')}>
              <p>{t('whatCanLearnAnswer')}</p>
            </Accordion>
            <Accordion title={t('whyDifferent')}>
              <p>{t('whyDifferentAnswer')}</p>
            </Accordion>
            <Accordion title={t('howToUse')}>
              <p>{t('howToUseAnswer')}</p>
            </Accordion>
            <Accordion title={t('materialsStored')}>
              <p>{t('materialsStoredAnswer')}</p>
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  )
} 