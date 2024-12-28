import React from 'react'
import Image from 'next/image'
import Container from '@/components/ui/Container'
import styles from './Features.module.css'

export default function Features() {
  return (
    <section className={styles.features}>
      <Container>
        <h2 className={styles.title}>Ota kuva, Lexie hoitaa loput</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/1.png"
                alt="Tekstin muokkaus näkymä"
                width={600}
                height={450}
                className={styles.image}
              />
            </div>
            <h3>Mukautuva teksti oppimisen tueksi</h3>
            <p>
            Muokkaa tekstin kokoa, fonttia ja kieltä tarpeisiisi sopivaksi. Jokainen oppii omalla tavallaan.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/2.png"
                alt="Muistikortti näkymä"
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
            <h3>Tehokas tapa oppia keskeisiä käsitteitä</h3>
            <p>
              Muistikortit pilkkovat laajat kokonaisuudet helposti opittaviin osiin. 
              Kertaamalla kortteja opit tärkeitä käsitteitä ja ymmärrät niiden merkityksen.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/3.png"
                alt="Harjoitustehtävä näkymä"
                width={600}
                height={450}
                className={styles.image}
              />
            </div>
            <h3>Testaa ja vahvista osaamistasi</h3>
            <p>
              Monipuoliset tehtävät auttavat kertaamaan opittua ja näyttävät, 
              mitkä asiat osaat jo hyvin.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
} 