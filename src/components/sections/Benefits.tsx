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
            <h3>Henkilökohtainen oppimisen tuki</h3>
            <p>
            Lexie toimii kuin henkilökohtainen apuopettaja. Se selittää vaikeat asiat ymmärrettävästi ja ohjaa askel askeleelta eteenpäin
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <BookCheck size={24} strokeWidth={1.5} />
            </div>
            <h3>Tehosta oppimistasi</h3>
            <p>
            Muistikortit ja harjoitustehtävät tekevät oppimisesta tehokkaampaa. Näet heti, mitkä asiat osaat jo hyvin ja mitä pitää vielä kerrata.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <ScanText size={24} strokeWidth={1.5} />
            </div>
            <h3>Opi missä vain</h3>
            <p>
            Tallenna ja käytä sisältöä missä ja milloin haluat. Joustava oppiminen omaan tahtiisi.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <Languages size={24} strokeWidth={1.5} />
            </div>
            <h3>Opiskele omalla kielelläsi</h3>
            <p>
            Lexie kääntää sisällön haluamallesi kielelle ja selittää vaikeat käsitteet selkeästi. Näin opit samalla sekä sisällön että kielen
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <HeartHandshake size={24} strokeWidth={1.5} />
            </div>
            <h3>Auttaa ymmärtämään opeteltavat asiat</h3>
            <p>
            Lexie auttaa hahmottamaan keskeiset asiat ja selittää vaikeat kohdat ymmärrettävästi.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>
              <PersonStanding size={24} strokeWidth={1.5} />
            </div>
            <h3>Mukautuva oppimiskokemus</h3>
            <p>
            Muokkaa fonttia, tekstin kokoa ja kuuntele sisältö ääneenluettuna. Näin löydät itsellesi sopivan tavan oppia
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
} 