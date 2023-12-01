'use client'
import { useTranslations } from 'next-intl'

import ContactFormCard from '@/components/ContactFormCard'
import ContactHeaderCard from '@/components/ContactHeaderCard'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/PageHeader'

export default function Contact() {
  const t = useTranslations('ContactPage')
  return (
    <Layout title={t('title')}>
      <PageHeader>{t('title')}</PageHeader>
      <div className="container">
        <div className="row justify-center my-20">
          <ContactHeaderCard t={t} />
          <ContactFormCard t={t} />
        </div>
      </div>
    </Layout>
  )
}
