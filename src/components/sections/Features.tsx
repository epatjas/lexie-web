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
            <h3>Tallentaa tekstit digitaaliseen muotoon</h3>
            <p>
              Lexie skannaa oppimateriaalin sovellukseen, jossa tekstiä voi kuunnella tai kääntää 
              toiselle kielelle. Teksti on aina mukana, vaikka kirja jäisi kouluun.
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
            <h3>Harjoitustehtävien avulla voit kerrata ja testata osaamistasi</h3>
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