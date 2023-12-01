'use client'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import React from 'react'

import Button from '@/components/Button'
import Layout from '@/components/layout/Layout'
import PageHeader from '@/components/PageHeader'

export default function Success() {
  const t = useTranslations('SuccessPage')
  return (
    <Layout title={t('title')}>
      <PageHeader>{t('title')}</PageHeader>
      <div className="container">
        <div className="row h-screen text-center items-center">
          <div className="col-12 my-10">
            <Image
              src="/img/tick-img.png"
              width={300}
              height={300}
              alt="tick-image"
              className="mx-auto"
            />
            <h1 className="mt-7 text-5xl font-bold">Formular erfolgreich abgeschickt!</h1>
            <p className="mt-7 text-xl font-bold">{t('description')}</p>
            <Button islink href="/" className="mt-7">
              {t('buttonMessage')}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
