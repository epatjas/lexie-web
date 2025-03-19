'use client'
import Container from '@/components/ui/Container'
import Footer from '@/components/sections/Footer'
import PageNav from '@/components/ui/PageNav'
import styles from '../privacy/styles.module.css'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Terms() {
  const { t, language } = useLanguage();
  
  return (
    <main>
      <Container>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <PageNav />
          </aside>
          <div className={styles.content}>
            <h1>{language === 'fi' ? 'LexieLearn-sovelluksen käyttöehdot' : 'LexieLearn App Terms of Service'}</h1>
            <p>{language === 'fi' ? 'PÄIVITETTY: 29.12.2024' : 'UPDATED: 12/29/2024'}</p>

            <section>
              <h2>1. Yleistä</h2>
              <p>1.1 LexieLearn ("Sovellus") on AIOYn ("Palveluntarjoaja") tarjoama oppimistyökalu, joka muuntaa tekstiä oppimismateriaaliksi.</p>
              <p>1.2 Nämä käyttöehdot määrittelevät Sovelluksen käyttöön liittyvät ehdot käyttäjän ("Käyttäjä") ja Palveluntarjoajan välillä.</p>
              <p>1.3 Käyttämällä Sovellusta Käyttäjä hyväksyy nämä käyttöehdot ja sitoutuu noudattamaan niitä.</p>
            </section>

            <section>
              <h2>2. Käyttöoikeus</h2>
              <p>2.1 Palveluntarjoaja myöntää Käyttäjälle rajoitetun, henkilökohtaisen, ei-siirrettävän oikeuden käyttää Sovellusta näiden käyttöehtojen mukaisesti.</p>
              <p>2.2 Käyttöoikeus on voimassa toistaiseksi ja Palveluntarjoaja voi peruuttaa sen, jos Käyttäjä rikkoo näitä käyttöehtoja.</p>
            </section>

            <section>
              <h2>3. Sovelluksen käyttö</h2>
              <p>3.1 Sovellus on tarkoitettu vain henkilökohtaiseen oppimiskäyttöön.</p>
              <p>3.2 Sovelluksen käyttö edellyttää:</p>
              <ul>
                <li>Mobiililaitetta ja internet-yhteyttä</li>
                <li>Kameran käyttöoikeutta</li>
                <li>Laitteen tallennustilan käyttöoikeutta</li>
              </ul>
            </section>

            <section>
              <h2>4. Käyttäjän vastuu</h2>
              <p>4.1 Käyttäjä on yksin vastuussa:</p>
              <ul>
                <li>Sovelluksella käsittelemästään sisällöstä</li>
                <li>Tekijänoikeuslakien ja muiden sovellettavien lakien noudattamisesta</li>
                <li>Laitteensa ja internet-yhteytensä toimivuudesta</li>
              </ul>

              <p>4.2 Käyttäjä sitoutuu olemaan:</p>
              <ul>
                <li>Jakamatta Sovelluksen tuottamaa sisältöä</li>
                <li>Käyttämättä Sovellusta kaupallisiin tarkoituksiin</li>
                <li>Yrittämättä kiertää Sovelluksen teknisiä rajoituksia</li>
              </ul>
            </section>

            <section>
              <h2>5. Sisällön käsittely ja yksityisyys</h2>
              <p>5.1 Kaikki Sovelluksella käsitelty sisältö:</p>
              <ul>
                <li>Tallennetaan vain Käyttäjän omalle laitteelle</li>
                <li>Ei siirry Palveluntarjoajan palvelimille</li>
                <li>On vain Käyttäjän käytettävissä</li>
              </ul>

              <p>5.2 Palveluntarjoaja kerää vain Sovelluksen toiminnan kannalta välttämättömiä analytiikkatietoja.</p>
            </section>

            <section>
              <h2>6. Immateriaalioikeudet</h2>
              <p>6.1 Kaikki Sovellukseen liittyvät immateriaalioikeudet kuuluvat Palveluntarjoajalle.</p>
              <p>6.2 Käyttäjä saa käyttää kaikkia oikeuksia sähköisessä muodossa olevaan:</p>
            </section>

            <section>
              <h2>7. Vastuunrajoitukset</h2>
              <p>7.1 Sovellus tarjotaan "sellaisena kuin se on".</p>
              <p>7.2 Palveluntarjoaja ei vastaa:</p>
              <ul>
                <li>Sovelluksen keskeytymättömästä toiminnasta</li>
                <li>Sovelluksen virheettömyydestä</li>
                <li>Käyttäjän sisällön säilymisestä</li>
                <li>Välillisistä tai välittömistä vahingoista</li>
              </ul>
            </section>

            <section>
              <h2>8. Muutokset</h2>
              <p>8.1 Palveluntarjoaja pidättää oikeuden:</p>
              <ul>
                <li>Muuttaa näitä käyttöehtoja</li>
                <li>Muuttaa Sovelluksen ominaisuuksia</li>
                <li>Lopettaa Sovelluksen tarjoamisen</li>
              </ul>

              <p>8.2 Muutoksista ilmoitetaan Sovelluksessa tai Palveluntarjoajan verkkosivuilla.</p>
            </section>

            <section>
              <h2>9. Sovellettava laki ja riitoja ratkaisu</h2>
              <p>9.1 Näihin käyttöehtoihin sovelletaan Suomen lakia.</p>
              <p>9.2 Mahdolliset riidat pyritään ensisijaisesti ratkaisemaan neuvotteluteitse.</p>
            </section>

            <section>
              <h2>10. Yhteystiedot</h2>
              <p>10.1 Kysymykset ja yhteystiedot:</p>
              <p>AIOY</p>
              <p>Albertinkatu 26-28</p>
              <p>hello@lexielearn.com</p>
              <p>[Y-tunnus]</p>
              <br />
              <p>Thank you for choosing LexieLearn. We love you.</p>
            </section>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
} 