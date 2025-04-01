'use client'
import Container from '@/components/ui/Container'
import Footer from '@/components/sections/Footer'
import PageNav from '@/components/ui/PageNav'
import styles from './styles.module.css'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Privacy() {
  const { t } = useLanguage();
  
  return (
    <main>
      <Container>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <PageNav />
          </aside>
          <div className={styles.content}>
            <h1>{t('privacyPage.title')}</h1>
            <p>{t('privacyPage.lastUpdated')}</p>
            <div dangerouslySetInnerHTML={{ __html: t('privacyPage.content').split('\n').join('<br/>') }} />
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
} 