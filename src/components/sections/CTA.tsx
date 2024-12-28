import React from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.cta}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/4.png"
              alt="Student using Lexie"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <Image
              src="/images/logo.png"
              alt="Lexie logo"
              width={80}
              height={24}
              className={styles.logo}
            />
            <h2>Tule testaamaan</h2>
            <p>
            Etsimme testaajia Lexielle. Kerro meille miten käytät sovellusta ja millaiseen oppimiseen se soveltuu parhaiten. 
            Palautteesi avulla kehitämme Lexiestä entistä paremman oppimisen työkalun. Tule mukaan kehittämään tulevaisuuden oppimisratkaisua.
            </p>
            <div className={styles.download} id="download-app">
              <p>Skannaa ja lataa LexieLearn</p>
              <Image
                src="/images/qr.png"
                alt="QR code to download Lexie"
                width={120}
                height={120}
                className={styles.qr}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 