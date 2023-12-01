'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import SVG from 'react-inlinesvg'
const NavItem = ({ children, href }) => {
  return (
    <li className="w-full md:w-auto md:mr-6">
      <Link
        className="block py-4 md:mx-6 mx-0 md:py-0 border-b border-gray-200 md:border-b-0 md:border-transparent uppercase text-white"
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}

export default function Navigation() {
  const [location, setLocation] = useState(false)
  const [menu, setMenu] = useState(false)
  const t = useTranslations('Navigation')
  return (
    <div className="bg-gray-700">
      <div className="container lg:py-16 py-5">
        <div className="row justify-between items-center">
          <div className="col-4 hidden md:block">
            <a className="px-9 py-5 inline-block text-white border-2 rounded-lg border-yellow-400 font-bold uppercase">
              {t('call')} +06802380599
            </a>
          </div>
          <div className="col-6 md:col-4">
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="logo"
                width={207}
                height={214}
                className="md:mx-auto mx-0 lg:w-[207px] lg:h-[214px] w-14 h-14"
              />
            </Link>
          </div>
          <div className="col-2 md:hidden block text-center">
            <button
              type="button"
              onClick={() => setLocation(!location)}
              className="inline-flex justify-end"
              id="location-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              <SVG src="/svg/de-flag.svg" className="w-7 h-7" />
              <svg
                className="-mr-1 h-7 w-7 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              className={`absolute z-[999] mt-2 p-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                location ? 'flex' : 'hidden'
              }`}
              role="menu"
            >
              <ul className="flex w-full z-[9999] p-5 flex-col md:w-auto items-center">
                <li className="w-full text-center mb-2">
                  <Link locale="de" href="/de" className="inline-flex items-center">
                    <SVG src="/svg/de-flag.svg" className="w-7 h-7" />
                    <p className="ml-2">Deutch</p>
                  </Link>
                </li>
                <li className="w-full text-center">
                  <Link locale="en" href="/en" className="inline-flex items-center">
                    <SVG src="/svg/en-flag.svg" className="w-7 h-7" />
                    <p className="ml-2">English</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 md:hidden block">
            <label htmlFor="menu-toggle" className="cursor-pointer">
              <SVG
                src="../svg/menu.svg"
                className="fill-current w-6 h-6"
                onClick={() => setMenu(!menu)}
              />
            </label>
          </div>
          <div
            className={`md:col-4 md:hidden block justify-center md:justify-center bg-gray-700 md:bg-transparent ${
              menu ? 'flex' : 'hidden'
            }`}
          >
            <ul className="flex w-full p-5 flex-col md:w-auto md:p-0 md:flex-row items-center">
              <NavItem href="/">{t('home')}</NavItem>
              <NavItem href="/about">{t('about')}</NavItem>
              <NavItem href="/menu">{t('menu')}</NavItem>
              <NavItem href="/reservation">{t('reservation')}</NavItem>
              <NavItem href="/gallery">{t('gallery')}</NavItem>
              <NavItem href="/contact">{t('contact')}</NavItem>
            </ul>
          </div>
          <div className="col-4 hidden md:block text-end">
            <Link legacyBehavior href="/reservation">
              <a className="inline-block px-14 py-5 rounded-lg bg-yellow-400 font-bold uppercase">
                {t('reservation')}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:block border-y border-gray-200 border-opacity-25">
        <div className="container">
          <div className="row content-center py-7">
            <div className="col-8">
              <ul className="flex w-full p-5 flex-col md:w-auto md:p-0 md:flex-row items-center">
                <NavItem href="/">{t('home')}</NavItem>
                <NavItem href="/about">{t('about')}</NavItem>
                <NavItem href="/menu">{t('menu')}</NavItem>
                <NavItem href="/reservation">{t('reservation')}</NavItem>
                <NavItem href="/gallery">{t('gallery')}</NavItem>
                <NavItem href="/contact">{t('contact')}</NavItem>
              </ul>
            </div>
            <div className="col-2 space-x-5 text-end">
              <a className="inline-block">
                <SVG src="./svg/insta.svg" className="fill-current w-7 h-7" />
              </a>
              <a className="inline-block">
                <SVG src="./svg/fb.svg" className="fill-current w-7 h-7" />
              </a>
            </div>
            <div className="col-2 text-center">
              <button
                type="button"
                onClick={() => setLocation(!location)}
                className="inline-flex justify-end"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <SVG src="/svg/de-flag.svg" className="w-7 h-7 rounded-full" />
                <svg
                  className="-mr-1 h-7 w-7 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`absolute z-[999] mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                  location ? 'flex' : 'hidden'
                }`}
                role="menu"
              >
                <ul className="flex w-full z-[9999] p-5 flex-col md:w-auto items-center">
                  <li className="w-full text-center mb-2">
                    <Link locale="de" href="/de" className="inline-flex items-center">
                      <SVG src="/svg/de-flag.svg" className="w-7 h-7 rounded-full" />
                      <p className="ml-2">Deutch</p>
                    </Link>
                  </li>
                  <li className="w-full text-center">
                    <Link locale="en" href="/en" className="inline-flex items-center">
                      <SVG src="/svg/en-flag.svg" className="w-7 h-7 rounded-full" />
                      <p className="ml-2">English</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
