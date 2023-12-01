'use client'
import Image from 'next/image'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import SVG from 'react-inlinesvg'

export default function TestimonialCard() {
  return (
    <div className="lg:col-4 col-10 mt-5">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="bg-gray-800 p-10">
          <div className="flex flex-row border-b border-gray-200 border-opacity-20 pb-8 items-center">
            <div className="flex flex-col">
              <div className="w-8 h-8 bg-yellow-400 border-2 border-black text-black rounded-full -mb-8 z-10 text-center font-bold">
                <SVG src="./svg/quotes.svg" className="m-2" />
              </div>
              <Image
                src="/img/person-1.jpg"
                width={112}
                height={112}
                alt="person-1"
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col ml-6">
              <p className="text-xl text-white">Nino S0pra</p>
              <p className="mt-2 text-yellow-400 text-sm">New York</p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="mt-6 italic text-white">
                It is professional, considers everyones time, can think about the There are many
                variations of passages whole probls small niche, friendly.
              </p>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  )
}
