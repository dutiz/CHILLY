import Image from 'next/image'

export default function GalleryImage({ img, large }) {
  return large ? (
    <div className="col-6 relative">
      <Image
        src={`/img/${img}.jpg`}
        width={672}
        height={428}
        className="w-full h-full object-cover"
        alt={img}
      />
    </div>
  ) : (
    <div className="col-3  relative">
      <Image
        src={`/img/${img}.jpg`}
        width={672}
        height={428}
        className="w-full h-full object-cover"
        alt={img}
      />
    </div>
  )
}
