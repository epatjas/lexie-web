import React from 'react'
import Container from '@/components/ui/Container'
import Accordion from '@/components/ui/Accordion'
import styles from './FAQ.module.css'

export default function FAQ() {
  return (
    <section className={styles.faq}>
      <Container>
        <div className={styles.container}>
          <h2 className={styles.title}>Usein kysyttyä</h2>
          <div className={styles.grid}>
            <Accordion title="Miten Lexie toimii?">
            Lexie muuntaa kuvaamasi tekstin oppimismateriaaleiksi. Se luo tekoälyn avulla automaattisesti muistikortteja kertaamiseen ja tehtäviä osaamisen testaamiseen. Sovellus toimii täysin laitteellasi, joten tietosi pysyvät turvassa.
            </Accordion>

            <Accordion title="Mitä kaikkea Lexien avulla voi oppia?">
            Lexie soveltuu kaikkeen oppimiseen. Se pilkkoo tiedot sopivan kokoisiin osiin ja auttaa sinua ymmärtämään asian syvällisesti.
            </Accordion>

            <Accordion title="Miksi LexieLearn on erilainen kuin muut oppimissovellukset?">
            Lexie antaa sinun luoda oppimateriaalia juuri sinulle tärkeistä aiheista. Se mukautuu oppimistyyliisi ja auttaa ymmärtämään vaikeatkin asiat selkeästi.
            </Accordion>

            <Accordion title="Millä eri tavoilla voin käyttää sovellusta?">
            Voit käyttää muistikortteja kertaamiseen, testata osaamistasi tehtävillä ja opiskella haluamallasi kielellä. Sisältöä voi myös kuunnella ääneenluettuna.
            </Accordion>

            <Accordion title="Säilyvätkö materiaalini Lexiessä?">
            Kaikki luomasi materiaalit tallentuvat laitteellesi ja ovat aina käytettävissäsi. Voit palata niihin milloin tahansa ja jatkaa siitä, mihin jäit.
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  )
} 