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
            <Accordion title="Miten aloitan Lexien käytön?">
              Lataa sovellus ja ota kuva oppikirjan sivusta tai monisteesta. Voit heti kysyä Lexieltä, jos 
              jokin asia mietityttää.
            </Accordion>

            <Accordion title="Mihin kaikkeen Lexiestä on apua?">
              Lexie auttaa sinua ymmärtämään vaikeita käsitteitä, tekemään muistiinpanoja ja harjoittelemaan 
              kokeisiin. Se on kuin henkilökohtainen apuopettaja taskussasi.
            </Accordion>

            <Accordion title="Miten Lexie auttaa, jos suomi ei ole äidinkieleni?">
              Lexie kääntää tekstit ja tehtävät omalle äidinkielellesi. Se selittää vaikeat käsitteet 
              selkeästi ja auttaa sinua oppimaan samalla suomen kieltä.
            </Accordion>

            <Accordion title="Toimiiko Lexie kaikissa oppiaineissa?">
              Kyllä, Lexie toimii kaikissa oppiaineissa. Se osaa auttaa niin matematiikassa, historiassa 
              kuin biologiassakin.
            </Accordion>

            <Accordion title="Maksaako Lexien käyttö?">
              Voit kokeilla Lexieä ilmaiseksi. Täyden version käyttö maksaa 9,90€/kk, ja siihen sisältyy 
              kaikki ominaisuudet rajoituksetta.
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  )
} 