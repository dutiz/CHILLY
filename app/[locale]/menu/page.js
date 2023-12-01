'use client'
import { useTranslations } from 'next-intl'

import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/PageHeader'
import BookingSection from '@/components/sections/BookingSection'
import MenuPageSection from '@/components/sections/MenuPageSection'

export default function Menu() {
  const t = useTranslations('MenuPage')
  return (
    <Layout title={t('pageTitle')}>
      <PageHeader>{t('headerTitle')}</PageHeader>
      <div className="container">
        <MenuPageSection />
      </div>
      <BookingSection />
    </Layout>
  )
}
