/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
'use client'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function ContactFormCard({ t }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    const myForm = event.target
    const formData = new FormData(myForm)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate('/success/'))
      .catch((error) => alert(error))
  }

  return (
    <div className="lg:col-5 col-10 mt-8 lg:mt-0 lg:text-start text-center">
      <AnimationOnScroll animateIn="animate__fadeInRight" delay={500}>
        <p className="py-1 inline-block text-gray-700 border-y border-yellow-400 uppercase">
          {t('formTitle')}
        </p>
        <h1 className="mt-5 text-4xl text-gray-700  font-bold">{t('formSubtitle')}</h1>
        <form data-netlify="true" name="contactForm" method="post" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contactForm" />
          <div className="row mt-10">
            <div className="lg:col-6">
              <input
                type="text"
                name="Name"
                placeholder={t('name')}
                className="border-2 border-yellow-400 p-5 rounded-3xl w-full placeholder-black font-bold"
              />
            </div>
            <div className="lg:col-6 lg:mt-0 mt-8">
              <input
                type="text"
                name="Email"
                placeholder={t('email')}
                className="border-2 border-yellow-400 p-5 rounded-3xl w-full placeholder-black font-bold"
              />
            </div>
            <div className="lg:col-6 mt-8">
              <input
                type="text"
                name="Subject"
                placeholder={t('subject')}
                className="border-2 border-yellow-400 p-5 rounded-3xl w-full placeholder-black font-bold"
                require
              />
            </div>
            <div className="lg:col-6 mt-8">
              <input
                type="text"
                name="Phone"
                placeholder={t('phone')}
                className="border-2 border-yellow-400 p-5 rounded-3xl w-full placeholder-black font-bold"
              />
            </div>
            <div className="col-12">
              <textarea
                name="Message"
                id=""
                cols="30"
                rows="10"
                placeholder={t('message')}
                className="mt-8 p-5 border-2 border-yellow-400 rounded-3xl w-full placeholder-black font-bold"
              />
              <input type="submit" className="mt-10 bg-yellow-400 px-10 rounded-3xl py-5">
                {t('buttonMessage')}
              </input>
            </div>
          </div>
        </form>
      </AnimationOnScroll>
    </div>
  )
}
