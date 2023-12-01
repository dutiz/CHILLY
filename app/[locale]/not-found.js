'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Button from '@/components/Button'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/PageHeader'

export default function NotFound() {
  const t = useTranslations('ErrorPage')
  return (
    <Layout title="Error 404">
      <PageHeader>{t('title')}</PageHeader>
      <div className="container">
        <div className="row justify-center my-20">
          <div className="lg:col-8 col-10 text-center">
            <Image
              src="/img/404-bg.png"
              width={1000}
              height={480}
              className="w-full h-auto"
              alt="404-bg"
            />
            <h1 className="mt-10 lg:text-5xl text-xl font-bold">{t('header')}</h1>
            <p
              className="mt-6 lg:text-2xl text-base text-gray-500"
              dangerouslySetInnerHTML={{
                __html: t('description'),
              }}
            ></p>
            <Button isLink href="/" className="mt-10">
              {t('buttonMessage')}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
