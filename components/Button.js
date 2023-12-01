import Link from 'next/link'

export default function Button({ children, isLink, href, className }) {
  return isLink ? (
    <Link href={href} legacyBehavior>
      <a className={` bg-yellow-400 inline-block ${className} px-10 rounded-3xl py-5`}>
        {children}
      </a>
    </Link>
  ) : (
    <button type="submit" className="mt-10 bg-yellow-400 px-10 rounded-3xl py-5">
      {children}
    </button>
  )
}
