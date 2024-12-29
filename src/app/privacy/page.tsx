import Container from '@/components/ui/Container'
import Footer from '@/components/sections/Footer'
import PageNav from '@/components/ui/PageNav'
import styles from './styles.module.css'

export default function Privacy() {
  return (
    <main>
      <Container>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <PageNav />
          </aside>
          <div className={styles.content}>
            <h1>LexieLearn-sovelluksen tietosuojaseloste</h1>
            <p>PÄIVITETTY: 29.12.2024</p>
            
            <section>
              <h2>1. Rekisterinpitäjä</h2>
              <p>[Yrityksen nimi]</p>
              <p>[Osoite]</p>
              <p>[Y-tunnus]</p>
              <p>[Yhteyshenkilön tehtävänimike/asema]</p>
              <p>[Sähköposti]</p>
            </section>

            <section>
              <h2>2. Käsiteltävät henkilötiedot</h2>
              <h3>2.1 Sovelluksen käyttöön liittyvät tiedot:</h3>
              <ul>
                <li>Laitteen käyttöjärjestelmä ja versio</li>
                <li>Sovelluksen käyttötapa ja -versio</li>
                <li>Verkkoportti</li>
                <li>Analytiikkatiedot sovelluksen toiminnasta</li>
              </ul>

              <h3>2.2 Ennen versio:</h3>
              <ul>
                <li>Henkilötiedot (nimi, sähköposti, puhelinnumero)</li>
                <li>Käyttäjän yleinen tai kieltämättä osoitettu</li>
                <li>Sovelluksen versio</li>
                <li>Käyttäjän tekemät muut tiedot</li>
              </ul>
            </section>

            <section>
              <h2>3. Tietojen käsittelyn tarkoitus ja oikeusperuste</h2>
              <h3>3.1 Käsittelyn tarkoitus:</h3>
              <ul>
                <li>Sovelluksen toiminnan kehittäminen</li>
                <li>Käyttökokemuksen parantaminen</li>
                <li>Teknisten ongelmien tunnistaminen ja korjaaminen</li>
                <li>Käyttötilastojen analysointi</li>
              </ul>

              <h3>3.2 Käsittelyn oikeusperuste:</h3>
              <ul>
                <li>Oikeutettu etu sovelluksen kehittämiseksi</li>
                <li>Käyttäjän suostumus analytiikan keräämiseen</li>
              </ul>
            </section>

            <section>
              <h2>4. Tietojen säilytys ja suojaus</h2>
              <h3>4.1 Tietojen säilytys:</h3>
              <ul>
                <li>Analytiikkatiedot säilytetään EU/ETA-alueella</li>
                <li>Käyttäjän luoma sisältö säilyy vain käyttäjän omalla laitteella</li>
                <li>Tietoja säilytetään vain niin kauan kuin on välttämätöntä</li>
              </ul>

              <h3>4.2 Tietoturva:</h3>
              <ul>
                <li>Tietoliikenne on salattu</li>
                <li>Pääsy tietoihin on rajattu vain välttämättömille henkilöille</li>
                <li>Järjestelmien suojauksesta huolehditaan asianmukaisesti</li>
              </ul>
            </section>

            <section>
              <h2>5. TIETOJEN LUOVUTUKSET</h2>
              <h3>5.1 Tietoja ei luovuteta kolmansille osapuolille, paitsi:</h3>
              <ul>
                <li>Lain vaatiessa</li>
                <li>Viranomaisten pyynnöstä</li>
                <li>Palveluntarjoajan teknisille kumppaneille sovelluksen ylläpitämiseksi</li>
              </ul>

              <h3>5.2 Tekniset kumppanit:</h3>
              <ul>
                <li>Lista mahdollisista teknisistä kumppaneista</li>
                <li>Kaikki kumppanit ovat sitoutuneet EU:n tietosuoja-asetuksen noudattamiseen</li>
              </ul>
            </section>

            <section>
              <h2>6. Tietojen käsittelyn tarkoitus ja oikeusperuste</h2>
              <h3>6.1 Käyttäjällä on oikeus:</h3>
              <ul>
                <li>Saada tietoa henkilötietojensa käsittelystä</li>
                <li>Pyytää pääsy omiin tietoihinsa</li>
                <li>Pyytää tietojen oikaisemista tai poistamista</li>
                <li>Vastustaa tietojen käsittelyä</li>
                <li>Pyytää tietojen käsittelyn rajoittamista</li>
                <li>Tehdä valitus valvontaviranomaiselle</li>
              </ul>

              <h3>6.2 Oikeuksien käyttäminen:</h3>
              <ul>
                <li>Pyynnöt tulee oheittaa kirjallisesti kohdassa 1 mainittuun osoitteeseen</li>
                <li>Vastaamme pyyntöihin kuukauden kuluessa</li>
                <li>Voimme pyytää lisätietoja henkilöllisyyden varmistamiseksi</li>
              </ul>
            </section>

            <section>
              <h2>7. Evästeet ja vastaavat teknologiat</h2>
              <p>8.1 Sovellus ei käytä evästeitä.</p>
              <p>8.2 Analytiikkatietojen keräämiseen käytetään:</p>
              <p>[Lista käytetyistä teknologioista]</p>
            </section>

            <section>
              <h2>8. Tietosuojaselosteen muutokset</h2>
              <p>8.1 Pidämme oikeuden muuttaa tätä tietosuojaselostetta.</p>
              <h3>8.2 Muutoksista ilmoitetaan:</h3>
              <ul>
                <li>Sovelluksessa</li>
                <li>Verkkosivuillamme</li>
                <li>Sähköpostitse, jos käyttäjä on antanut yhteystietonsa</li>
              </ul>
            </section>

            <section>
              <h2>9. Yhteystiedot</h2>
              <p>Tietosuojaan liittyvissä kysymyksissä:</p>
              <p>[Tietosuojavastaavan nimi]</p>
              <p>[Sähköposti]</p>
              <p>[Puhelinnumero]</p>
              <br />
              <p>[Yrityksen nimi]</p>
              <p>[Osoite]</p>
              <p>[Y-tunnus]</p>
            </section>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
} 