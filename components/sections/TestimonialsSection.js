'use client'
import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

import TestimonialCard from '../TestimonialCard'

export default function TestimonialsSection() {
  return (
    <div className="bg-gray-700">
      <div className="container py-20">
        <div className="row justify-center">
          <div className="lg:col-12 col-10 ">
            <AnimationOnScroll animateIn="animate__fadeIn">
              <p className="py-1 inline-block text-white border-y border-yellow-400 uppercase">
                Zeugnis
              </p>
              <h1 className="mt-5 text-4xl text-white font-bold">Was unsere Kunden sagen</h1>
              <p className="mt-5 text-2xl text-white">
                Wir freuen uns, von Kunden zu hören. Hinterlassen Sie also bitte einen Kommentar
                oder sagen Sie „Hallo“ in einer E-Mail.
              </p>
            </AnimationOnScroll>
          </div>
        </div>
        <div className="row justify-center mt-12">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  )
}
