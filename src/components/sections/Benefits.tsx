import React from 'react'
import Container from '@/components/ui/Container'
import { 
  GraduationCap, 
  BookCheck, 
  ScanText, 
  Languages, 
  HeartHandshake, 
  PersonStanding 
} from 'lucide-react'
import styles from './Benefits.module.css'

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <Container>
        <h2 className={styles.title}>Tukena jokaisen lapsen oppimisessa.</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <GraduationCap size={24} strokeWidth={1.5} />
            </div>
            <h3>Tukea kotitehtävien tekoon</h3>
            <p>
              Lexie toimii kuin henkilökohtainen apuopettaja läksyjen teossa. Se selittää vaikeat asiat ymmärrettävästi ja ohjaa askel askeleelta eteenpäin.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <BookCheck size={24} strokeWidth={1.5} />
            </div>
            <h3>Helpottaa kokeisiin valmistautumista</h3>
            <p>
              Muistikortit ja harjoitustehtävät tekevät kokeisiin valmistautumisesta tehokkaampaa. Näet heti, mitkä asiat osaat jo hyvin ja mitä pitää vielä kerrata.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <ScanText size={24} strokeWidth={1.5} />
            </div>
            <h3>Opiskele missä vain</h3>
            <p>
              Poissaolojen aikana voit kuvata materiaalit Lexieen. Kaikki säilyy tallessa ja pysyt mukana opinnoissa, vaikka et pääsisi kouluun.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <Languages size={24} strokeWidth={1.5} />
            </div>
            <h3>Opiskele omalla kielelläsi</h3>
            <p>
              Jos suomi ei ole äidinkielesi, Lexie on korvaamaton apu. Se kääntää vaikeat sanat 
              ja käsitteet omalle kielellesi ja selittää ne selkeästi. Näin opit samalla sekä 
              oppiaineen sisällön että suomen kieltä.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <HeartHandshake size={24} strokeWidth={1.5} />
            </div>
            <h3>Auttaa ymmärtämään opeteltavat asiat</h3>
            <p>
              Lexie auttaa hahmottamaan oppimateriaalin keskeiset asiat ja selittää vaikeat kohdat ymmärrettävästi.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <PersonStanding size={24} strokeWidth={1.5} />
            </div>
            <h3>Muokkaa oppimateriaali itsellesi sopivaksi</h3>
            <p>
              Voit vaihtaa fonttia, suurentaa tekstiä tai kuunnella sen ääneen luettuna. Näin jokainen löytää itselleen sopivan tavan opiskella
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
} 