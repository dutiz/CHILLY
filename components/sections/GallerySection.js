'use client'
import Image from 'next/image'

export default function GallerySection() {
  return (
    <div className="container py-20">
      <div className="row">
        <div className="col-12 text-center">
          <p className="py-1 inline-block text-gray-700 border-y border-yellow-400 uppercase">
            Gallery
          </p>
          <h1 className="mt-5 text-4xl text-gray-700 font-bold">Was wir Machen</h1>
        </div>
      </div>
      <div className="row justify-center mt-10">
        <div className="col-10">
          <div className="lg:flex hidden flex-row items-center">
            <div className="flex flex-col col-3">
              <Image
                src="/img/8.jpg"
                width={283}
                height={314}
                alt="gallery-1"
                className="w-full h-full"
              />
              <Image
                src="/img/2.jpg"
                width={283}
                height={314}
                alt="gallery-2"
                className="mt-4 w-full h-auto"
              />
            </div>
            <div className="flex flex-col px-[14px] col-6">
              <Image
                src="/img/4.jpg"
                width={780}
                height={622}
                alt="gallery-3"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col col-3">
              <Image
                src="/img/11.jpg"
                width={283}
                height={345}
                alt="gallery-4"
                className="w-full h-auto"
              />
              <Image
                src="/img/5.jpg"
                width={283}
                height={261}
                alt="gallery-5"
                className="mt-4 w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="col-10 lg:hidden block">
          <div className="row">
            <div className="col-6">
              <Image
                src="/img/8.jpg"
                width={283}
                height={304}
                alt="gallery-1"
                className="w-full h-auto"
              />
              <Image
                src="/img/2.jpg"
                width={283}
                height={303}
                alt="gallery-2"
                className="mt-4 w-full h-auto"
              />
            </div>
            <div className="col-6">
              <Image
                src="/img/4.jpg"
                width={283}
                height={345}
                alt="gallery-4"
                className="w-full h-auto"
              />
              <Image
                src="/img/11.jpg"
                width={283}
                height={261}
                alt="gallery-5"
                className="mt-4 w-full h-auto"
              />
            </div>
            <div className="col-12 mt-8">
              <Image
                src="/img/5.jpg"
                width={780}
                height={622}
                alt="gallery-3"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
