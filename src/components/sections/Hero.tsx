'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import styles from './Hero.module.css'
import ParticleBackground from '@/components/ui/ParticleBackground'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
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
          _subject: 'New Lexie early access signup from Hero section',
          message: `Please add ${email} to the early access list.`
        }),
      });

      if (!response.ok) {
        throw new Error('There was an error submitting your email. Please try again.');
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
              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <p>{t('formSubmitSuccess')}</p>
                </div>
              ) : (
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
              )}
              {error && <p className={styles.errorMessage}>{error}</p>}
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