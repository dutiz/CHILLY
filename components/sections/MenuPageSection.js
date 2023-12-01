import { useTranslations } from 'next-intl'
import { useState } from 'react'

import MenuButton from '../MenuButton'
import MenuItem from '../MenuItem'

export default function MenuPageSection() {
  const keys = []
  for (var i = 1; i <= 30; i++) {
    keys.push(i)
  }
  const [category, setCategory] = useState('Caffee')
  const m = useTranslations(category)
  const mc = useTranslations('MenuCategory')
  return (
    <div className="row justify-center my-20">
      <div className="flex flex-row space-x-2">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2">
          <MenuButton onClick={() => setCategory('Caffee')}>{mc('Caffee')}</MenuButton>
          <MenuButton onClick={() => setCategory('Beer')}>{mc('Beer')}</MenuButton>
          <MenuButton onClick={() => setCategory('Aperitif')}>{mc('Aperitif')}</MenuButton>
          <MenuButton onClick={() => setCategory('Rotwein')}>{mc('Rotwein')}</MenuButton>
          <MenuButton onClick={() => setCategory('Weissweine')}>{mc('Weissweine')}</MenuButton>
          <MenuButton onClick={() => setCategory('CilliBreakfast')}>
            {mc('CilliBreakfast')}
          </MenuButton>
          <MenuButton onClick={() => setCategory('Salads')}>{mc('Salads')}</MenuButton>
          <MenuButton onClick={() => setCategory('PizzaBread')}>{mc('PizzaBread')}</MenuButton>
          <MenuButton onClick={() => setCategory('Burger')}>{mc('Burger')}</MenuButton>
          <MenuButton onClick={() => setCategory('Pizza')}>{mc('Pizza')}</MenuButton>
          <MenuButton onClick={() => setCategory('CilliClassic')}>{mc('CilliClassic')}</MenuButton>
          <MenuButton onClick={() => setCategory('Fish')}>{mc('Fish')}</MenuButton>
          <MenuButton onClick={() => setCategory('Dessert')}>{mc('Dessert')}</MenuButton>
          <MenuButton onClick={() => setCategory('PizzaExtras')}>{mc('PizzaExtras')}</MenuButton>
        </div>
      </div>
      <div className="row">
        <div className="md:col-8 col-10 mt-12">
          <h1 className="lg:text-5xl text-4xl text-gray-700 font-bold uppercase">{m('title')}</h1>
          <div className="mt-11">
            <div className="row">
              {keys.map((key) =>
                m(`item${key}`) == `${category}.item${key}` ? (
                  <MenuItem
                    className="hidden"
                    key={key}
                    title={m(`item${key}`)}
                    price={m(`price${key}`)}
                    delay="100"
                  />
                ) : m(`desc${key}`) == `${category}.desc${key}` ? (
                  <MenuItem
                    key={key}
                    title={m(`item${key}`)}
                    price={m(`price${key}`)}
                    delay="100"
                  />
                ) : (
                  <MenuItem key={key} title={m(`item${key}`)} price={m(`price${key}`)} delay="100">
                    {m(`desc${key}`)}
                  </MenuItem>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
