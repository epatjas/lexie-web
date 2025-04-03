'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import styles from './CTA.module.css'
import { useLanguage } from '@/contexts/LanguageContext'

export default function CTA() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Simple email validation
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        throw new Error(t('formInvalidEmail'));
      }

      // Using fetch to submit to Formspree
      const response = await fetch('https://formspree.io/f/xjkyarvo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          _replyto: email,
          _subject: 'New Lexie early access signup',
          message: `Please add ${email} to the early access list.`
        }),
      });

      if (!response.ok) {
        throw new Error(t('formSubmitError'));
      }
      
      setIsSubmitted(true);
      setEmail('');
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error instanceof Error ? error.message : t('formSubmitError'));
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
            <div className={styles.emailFormContainer}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className={styles.emailForm}>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('insertEmail')} 
                    className={styles.emailInput}
                    required
                  />
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={styles.emailButton}
                  >
                    {isSubmitting ? '...' : t('getEarlyAccess')}
                  </button>
                </form>
              ) : (
                <div className={styles.successMessage}>
                  <p>{t('formSubmitSuccess')}</p>
                </div>
              )}
              {error && <p className={styles.errorMessage}>{error}</p>}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 