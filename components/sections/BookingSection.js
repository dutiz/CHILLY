'use client'
import { useTranslations } from 'next-intl'
import { AnimationOnScroll } from 'react-animation-on-scroll'
export default function BookingSection() {
  const t = useTranslations('BookingSection')
  return (
    <div
      style={{
        background: `url('/img/booktable.png') no-repeat center center / cover`,
      }}
    >
      <div className="container py-20">
        <div className="row justify-center">
          <div className="lg:col-8 col-10 text-center">
            <AnimationOnScroll animateIn="animate__fadeIn">
              <div className="bg-gray-700 lg:p-14 p-8">
                <p className="py-1 inline-block text-white border-y border-yellow-400 uppercase">
                  {t('headerTitle')}
                </p>
                <h1 className="mt-5 md:text-5xl text-xl text-center font-bold text-white">
                  {t('title')}
                </h1>
                <form name="booking" action="/success" method="POST" data-netlify="true">
                  <input type="hidden" name="form-name" value="booking" />
                  <div className="row mt-10">
                    <div className="lg:col-4">
                      <input
                        type="text"
                        name="Name"
                        className="p-5 border border-white rounded-xl bg-gray-700 placeholder-white w-full text-white text-xl"
                        placeholder={t('name')}
                        required
                      />
                    </div>
                    <div className="lg:col-4">
                      <input
                        type="text"
                        name="Email"
                        className="p-5 mt-8 lg:mt-0 border border-white rounded-xl bg-gray-700 placeholder-white w-full text-white text-xl"
                        placeholder={t('email')}
                        required
                      />
                    </div>
                    <div className="lg:col-4">
                      <input
                        type="text"
                        name="Phone"
                        className="p-5 mt-8 lg:mt-0 border border-white rounded-xl bg-gray-700 placeholder-white w-full text-white text-xl"
                        placeholder={t('phone')}
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-8">
                    <div className="lg:col-4">
                      <input
                        name="Persons"
                        type="text"
                        className="p-5 border border-white rounded-xl bg-gray-700 placeholder-white w-full text-white text-xl"
                        placeholder={t('persons')}
                        required
                      />
                    </div>
                    <div className="lg:col-4">
                      <input
                        type="text"
                        onFocus={(e) => (e.target.type = 'time')}
                        name="Time"
                        className="p-5 mt-8 lg:mt-0 border border-white rounded-xl bg-gray-700 placeholder-white w-full text-white text-xl"
                        placeholder={t('time')}
                        required
                      />
                    </div>
                    <div className="lg:col-4">
                      <input
                        type="text"
                        onFocus={(e) => (e.target.type = 'date')}
                        name="Date"
                        className="p-5 mt-8 lg:mt-0 border border-white rounded-xl bg-gray-700 placeholder-white w-full text-white text-xl"
                        placeholder={t('date')}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="mt-8 px-12 py-5 bg-white rounded-3xl text-gray-700"
                      >
                        {t('buttonMessage')}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </div>
  )
}
