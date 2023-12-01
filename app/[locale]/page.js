'use client'
import Layout from '@/components/layout/Layout'
import AboutSection from '@/components/sections/AboutSection'
import BookingSection from '@/components/sections/BookingSection'
import HeaderSection from '@/components/sections/HeaderSection'
import MenuSection from '@/components/sections/MenuSection'
import OfferSection from '@/components/sections/OfferSection'
import ServiceSection from '@/components/sections/ServiceSection'
import SlideSection from '@/components/sections/SlideSection'
// import TestimonialsSection from '@/components/sections/TestimonialsSection'
import WeeklySection from '@/components/sections/WeeklySection'

export default function Index() {
  return (
    <Layout title="Home">
      {/* Header Section Example */}
      <HeaderSection />
      {/* Service Section */}
      <ServiceSection />
      {/* About Section */}
      <AboutSection />
      {/* Weekly Holidays Section */}
      <WeeklySection />
      {/* Menu Section */}
      <MenuSection />
      {/* Testimonal Section */}
      {/* <TestimonialsSection /> */}
      {/* Slide Section */}
      <SlideSection />
      {/* Offer Section */}
      <OfferSection />
      {/* Booking Section */}
      <BookingSection />
    </Layout>
  )
}
