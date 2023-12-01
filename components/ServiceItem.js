'use client'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import SVG from 'react-inlinesvg'

export default function ServiceItem({ svg, title, children }) {
  return (
    <div className="lg:col-4 col-10 mt-10 lg:mt-0">
      <AnimationOnScroll animateIn="animate__flipInX">
        <div className="flex flex-row items-center">
          <div className="flex flex-col">
            <SVG src={`./svg/${svg}.svg`} className="w-20 h-20" />
          </div>
          <div className="ml-4 flex flex-col">
            <h2 className="text-3xl text-gray-900 mt-3">{title}</h2>
            <p className="mt-4 text-sm text-gray-500">{children}</p>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  )
}
