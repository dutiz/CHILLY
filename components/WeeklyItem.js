'use client'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function WeeklyItem({ date, children }) {
  return (
    <div className="lg:col-3 col-8 mt-12 md:mt-0">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <h2 className="text-6xl text-gray-900 font-bold text-center">{date}</h2>
        <p className="mt-3 text-gray-500">{children}</p>
      </AnimationOnScroll>
    </div>
  )
}
