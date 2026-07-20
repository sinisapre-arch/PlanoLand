'use client'

import Image from 'next/image'
import { assets } from '../page'

export function CatalogCta() {
  return (
    <section id="Услуги" className="bg-graphite px-4 py-16 text-cream sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-[1760px] gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
        <div>
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.28em] text-cream/55">Каталог частных садов</p>
          <h2 className="font-expanded max-w-5xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Получите подборку проектов L.BURO
          </h2>
        </div>
        <form className="grid gap-3 border border-cream/30 p-4 sm:p-6" onSubmit={(e) => e.preventDefault()}>
          <input className="h-12 border border-cream/30 bg-transparent px-4 text-sm uppercase tracking-[0.12em] outline-none placeholder:text-cream/45" placeholder="Ваше имя" />
          <input className="h-12 border border-cream/30 bg-transparent px-4 text-sm uppercase tracking-[0.12em] outline-none placeholder:text-cream/45" placeholder="Телефон или email" />
          <button className="mt-2 flex h-14 items-center justify-between bg-cream px-5 text-[11px] font-black uppercase tracking-[0.22em] text-graphite transition hover:bg-moss hover:text-cream">
            Скачать каталог
            <Image src={assets.download} alt="" className="h-5 w-5" />
          </button>
          <p className="text-[10px] leading-relaxed text-cream/50">Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</p>
        </form>
      </div>
    </section>
  )
}