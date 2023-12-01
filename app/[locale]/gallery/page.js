'use client'
import { useTranslations } from 'next-intl'

import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/PageHeader'
import FeatureSection from '@/components/sections/FeatureSection'
import GalleryPageHeader from '@/components/sections/GalleryPageHeader'
import GalleryReservationSection from '@/components/sections/GalleryReservationSection'

export default function Gallery() {
  const t = useTranslations('GalleryPage')
  return (
    <Layout title={t('pageTitle')}>
      <PageHeader>{t('pageTitle')}</PageHeader>
      <GalleryPageHeader t={t} />
      <GalleryReservationSection t={t} />
      <FeatureSection />
    </Layout>
  )
}
