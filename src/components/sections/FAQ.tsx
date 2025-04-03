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

// Function to format text with line breaks and preserve formatting
const FormattedText = ({ text }: { text: string }) => {
  return (
    <div className={styles.formattedText}>
      {text.split('\n').map((line, index) => (
        line ? <p key={index}>{line}</p> : <br key={index} />
      ))}
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
              <FormattedText text={t('howLexieWorksAnswer')} />
            </Accordion>
            <Accordion title={t('whatCanLearn')}>
              <FormattedText text={t('whatCanLearnAnswer')} />
            </Accordion>
            <Accordion title={t('whyDifferent')}>
              <FormattedText text={t('whyDifferentAnswer')} />
            </Accordion>
            <Accordion title={t('howToUse')}>
              <FormattedText text={t('howToUseAnswer')} />
            </Accordion>
            <Accordion title={t('materialsStored')}>
              <FormattedText text={t('materialsStoredAnswer')} />
            </Accordion>
            <Accordion title={t('howDesignedForKids')}>
              <FormattedText text={t('howDesignedForKidsAnswer')} />
            </Accordion>
            <Accordion title={t('helpWithLanguageBarriers')}>
              <FormattedText text={t('helpWithLanguageBarriersAnswer')} />
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  )
} 