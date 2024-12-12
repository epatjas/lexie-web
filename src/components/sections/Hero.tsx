'use client'
import React from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import styles from './Hero.module.css'

export default function Hero() {
  const scrollToDownload = () => {
    const element = document.getElementById('download-app')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={styles.hero}>
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
            <h1>Parempi tapa harjoitella.</h1>
            <p className={styles.ingress}>
              Lexie auttaa sinua harjoittelemaan kokeisiin ja tekemään läksyjä. 
              Oppimateriaalista syntyy automaattisesti muistikortteja kertaamiseen 
              ja tehtäviä osaamisen testaamiseen.
            </p>
            <button 
              className={styles.button}
              onClick={scrollToDownload}
              aria-label="Lataa sovellus"
            >
              Kokeile ilmaiseksi
            </button>
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