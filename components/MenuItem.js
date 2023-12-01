'use client'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function MenuItem({ title, className, children, price, delay, right }) {
  return right ? (
    <AnimationOnScroll animateIn="animate__fadeInRightBig" animateOnce={true} delay={delay}>
      <div className={`mb-8 flex flex-row lg:items-end items-center ${className}`}>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-gray-500">{children}</p>
        </div>
        <div className="flex flex-1 flex-col my-2 border-b border-dashed border-gray-400 mx-3"></div>
        <div className="flex flex-col text-gray-500 text-2xl">€{price}</div>
      </div>
    </AnimationOnScroll>
  ) : (
    <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true} delay={delay}>
      <div className={`mb-8 flex flex-row lg:items-end items-center ${className}`}>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-gray-500">{children}</p>
        </div>
        <div className="flex flex-1 flex-col my-2 border-b border-dashed border-gray-400 mx-3"></div>
        <div className="flex flex-col text-gray-500 text-2xl">€{price}</div>
      </div>
    </AnimationOnScroll>
  )
}
