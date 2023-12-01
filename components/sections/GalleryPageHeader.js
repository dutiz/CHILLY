import Image from 'next/image'
import React from 'react'

import GalleryImage from '@/components/GalleryImage'
export default function GalleryPageHeader() {
  return (
    <>
      <div className="lg:block hidden container my-20">
        <div className="row">
          <GalleryImage large img="8" />
          <GalleryImage img="4" />
          <GalleryImage img="5" />
        </div>
        <div className="row mt-8">
          <GalleryImage img="2" />
          <GalleryImage img="11" />
        </div>
      </div>
      <div className="lg:hidden block container my-20">
        <div className="row">
          <div className="col-12 relative">
            <Image
              src="/img/8.jpg"
              width={500}
              height={300}
              className="w-full h-full object-cover"
              alt="dish1"
            />
          </div>
        </div>
        <div className="row g-2  mt-8">
          <div className="col-6 relative">
            <Image
              src="/img/4.jpg"
              width={100}
              height={350}
              className="object-cover w-full h-full"
              alt="dish1"
            />
          </div>
          <div className="col-6 relative">
            <Image
              src="/img/5.jpg"
              width={672}
              height={300}
              className="w-full h-[165px]"
              alt="dish1"
            />
          </div>
        </div>
      </div>
      {/* <div className="row mt-7">
          <div className="col-6 relative">
          <div className="col-6 relative">
            <Image
              src="/img/dish1.png"
              width={672}
              height={428}
              className="w-full h-full object-cover"
              alt="dish1"
            />
          </div>
        </div>
      </div> */}
    </>
  )
}
