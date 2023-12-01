'use client'
import { useTranslations } from 'next-intl'

import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/PageHeader'
import AboutHeaderSection from '@/components/sections/AboutHeaderSection'
import AboutServiceSection from '@/components/sections/AboutServiceSection'
import BookingSection from '@/components/sections/BookingSection'
import GallerySection from '@/components/sections/GallerySection'
// import TestimonialsSection from '@/components/sections/TestimonialsSection'

export default function About() {
  const t = useTranslations('AboutPage')
  return (
    <Layout title={t('pageTitle')}>
      <PageHeader>{t('headerTitle')}</PageHeader>
      <AboutHeaderSection t={t} />
      <AboutServiceSection />
      {/* <TestimonialsSection /> */}
      <GallerySection />
      <BookingSection />
    </Layout>
  )
}
