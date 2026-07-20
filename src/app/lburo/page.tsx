import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader, SiteFooter, CookiePanel } from '@/app/components/SiteChrome'
import { CatalogCta } from './components/CatalogCta'

// ============================================================
// Assets & Data (local, no external URLs)
// ============================================================
export const assets = {
  logo: '/assets/ui/logo.svg',
  hero: '/assets/lburo/hero.webp',
  studio: '/assets/lburo/studio.webp',
  bg3: '/assets/lburo/bg3.webp',
  download: '/assets/lburo/download.svg',
  socials: {
    youtube: '/assets/lburo/youtube.svg',
    vkVideo: '/assets/lburo/vk-video.svg',
    vk: '/assets/lburo/vk.svg',
    telegram: '/assets/lburo/telegram.svg',
    instagram: '/assets/lburo/instagram.svg',
    dzen: '/assets/lburo/dzen.svg',
    pinterest: '/assets/lburo/pinterest.svg',
  },
}

const featuredProjects = [
  { title: 'FERMA', place: 'Рязанская область, Россия', image: '/assets/lburo/featured/ferma.webp' },
  { title: 'SYLT', place: 'Тверская область, Россия', image: '/assets/lburo/featured/sylt.webp' },
  { title: 'MAUER', place: 'Ленинградская область, Россия', image: '/assets/lburo/featured/mauer.webp' },
  { title: 'FERRUM', place: 'Московская область, Россия', image: '/assets/lburo/featured/ferrum.webp' },
  { title: 'ЗАМЕДЛЕНИЕ', place: 'Московская область, Россия', image: '/assets/lburo/featured/zamedlenie.webp' },
  { title: 'HUGEL', place: 'Медное озеро, Ленинградская область', image: '/assets/lburo/featured/hugel.webp' },
]

const principles = [
  'Человек в центре',
  'Чувство места',
  'Природная композиция',
  'Сезонная динамика',
  'Климатическая устойчивость',
  'Полный цикл',
]

const portfolio = [
  { title: 'Японская вилла 1905', place: 'Калининград', label: 'IADA', image: '/assets/lburo/portfolio/japanese-villa-1905.webp' },
  { title: 'SLOWDOWN', place: 'Московская область', label: 'IADA', image: '/assets/lburo/portfolio/slowdown.webp' },
  { title: 'SYLT', place: 'Тверская область', label: 'ALAROS', image: '/assets/lburo/portfolio/sylt-alaros.webp' },
  { title: 'FERMA', place: 'Рязанская область', label: 'ЗОЛОТОЙ ДИПЛОМ', image: '/assets/lburo/portfolio/ferma-gold.webp' },
  { title: 'LEVEL UP', place: 'Московская область', label: '', image: '/assets/lburo/portfolio/level-up.webp' },
  { title: 'FERRUM', place: 'Московская область', label: 'СЕРЕБРЯНЫЙ ДИПЛОМ', image: '/assets/lburo/portfolio/ferrum-silver.webp' },
  { title: 'MAUER', place: 'Ленинградская область', label: 'GOLD DIPLOMA', image: '/assets/lburo/portfolio/mauer-gold.webp' },
  { title: 'HUGEL', place: 'Медное озеро', label: 'IADA', image: '/assets/lburo/portfolio/hugel-iada.webp' },
  { title: 'Хрустальное', place: 'Курортный район Санкт-Петербурга', label: 'BLT GOLD', image: '/assets/lburo/portfolio/khrustalnoye.webp' },
  { title: 'HAUS IM WALD', place: 'Московская область', label: '', image: '/assets/lburo/portfolio/haus-im-wald.webp' },
  { title: 'DUBLDOMOVO', place: 'Снегири, Московская область', label: '', image: '/assets/lburo/portfolio/dubldomovo.webp' },
  { title: 'Дивный сад', place: 'Солнечное, Санкт-Петербург', label: 'GRAND PRIX', image: '/assets/lburo/portfolio/divny-sad.webp' },
]

const nav = ['Главная', 'Портфолио', 'Скандинавский сад', 'Услуги', 'Команда', 'Контакты']

// ============================================================
// Components
// ============================================================
function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone/20 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1760px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">
        <div className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-graphite/70 lg:flex">
          <a className="border-b border-graphite pb-1" href="#private">Частные сады</a>
          <a className="pb-1" href="#public">Общественные пространства</a>
        </div>
        <Link href="#top" className="shrink-0" aria-label="L.BURO home">
          <Image src={assets.logo} alt="Logo L.BURO" className="h-9 w-auto sm:h-11" priority />
        </Link>
        <nav className="hidden flex-1 justify-center gap-5 xl:flex">
          {nav.map((item) => (
            <Link
              key={item}
              href={`#nav-${item}`}
              className="text-[11px] font-semibold uppercase tracking-[0.18em] text-graphite/80 transition hover:text-graphite"
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-graphite/80">
          <div className="hidden gap-3 lg:flex">
            <a href="tel:+749****6655">+7 (495) 822-66-55</a>
            <a href="tel:+781****6655">+7 (812) 507-66-55</a>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span>ru</span>
            <span className="text-graphite/35">en</span>
            <span className="text-graphite/35">de</span>
            <span className="text-graphite/35">ar</span>
          </div>
          <button className="grid h-9 w-9 place-items-center border border-graphite/35 xl:hidden" aria-label="Open menu">
            <span className="h-px w-5 bg-graphite shadow-[0_6px_0_#33372f,0_-6px_0_#33372f]" />
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-cream pt-24 text-graphite">
      <div className="absolute inset-0 opacity-[0.18] mix-blend-multiply" style={{ backgroundImage: `url(${assets.hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-cream via-cream/70 to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-[1760px] grid-cols-1 content-end gap-10 px-4 pb-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-16">
        <div className="max-w-5xl">
          <p className="mb-8 max-w-xl text-[11px] font-semibold uppercase leading-relaxed tracking-[0.26em] text-graphite/70">
            Ассоциация АЛАРОС признала L.BURO лучшей ландшафтной студией России в 2025 году.
          </p>
          <h1 className="font-expanded text-[18vw] font-black uppercase leading-[0.78] tracking-[-0.075em] sm:text-[13vw] lg:text-[9.4vw]">
            Сад
            <br />
            как
            <br />
            состояние
          </h1>
        </div>
        <div className="flex flex-col justify-end gap-10 lg:items-end">
          <p className="max-w-xl text-base leading-relaxed text-graphite/85 sm:text-xl lg:text-2xl lg:leading-snug">
            Мы — ландшафтная студия полного цикла. Создаём скандинавские сады в любых климатических зонах: от Калининграда до Владивостока и Сочи, а также за пределами России.
          </p>
          <dl className="grid w-full max-w-2xl grid-cols-2 gap-px overflow-hidden border border-graphite/20 bg-graphite/20 sm:grid-cols-4">
            {[
              ['с 2014', 'года работаем'],
              ['300+', 'садов в портфолио'],
              ['7', 'стран мира'],
              ['каждый 5-й', 'сад отмечен премиями'],
            ].map(([value, label]) => (
              <div key={value} className="bg-cream/85 p-4 sm:p-5">
                <dt className="font-expanded text-2xl font-black uppercase tracking-[-0.04em] sm:text-3xl">{value}</dt>
                <dd className="mt-3 text-[10px] font-semibold uppercase leading-snug tracking-[0.16em] text-graphite/65">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

function FeaturedProjects() {
  return (
    <section id="Портфолио" className="bg-graphite py-6 text-cream sm:py-10">
      <div className="no-scrollbar flex snap-x gap-3 overflow-x-auto px-4 sm:px-6 lg:px-10">
        {featuredProjects.map((project, index) => (
          <Link key={project.title} href="#portfolio" className="group relative h-[62vh] min-h-[480px] w-[78vw] max-w-[560px] shrink-0 snap-center overflow-hidden bg-black sm:w-[44vw] lg:w-[29vw]">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
              sizes="(max-width: 1200px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute left-5 right-5 top-5 flex justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/75">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>проект</span>
            </div>
            <div className="absolute inset-x-5 bottom-6">
              <h2 className="font-expanded text-4xl font-black uppercase leading-none tracking-[-0.05em] sm:text-5xl">{project.title}</h2>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-cream/75">{project.place}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

function Studio() {
  return (
    <section id="Команда" className="bg-cream px-4 py-20 text-graphite sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1760px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative min-h-[520px] overflow-hidden lg:min-h-[760px]">
          <Image
            src={assets.studio}
            alt="Peter Lari and Valery Fedotov"
            fill
            className="h-full w-full object-cover"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-6 text-cream">
            <p className="max-w-xs text-xs font-semibold uppercase leading-relaxed tracking-[0.18em]">Пётр Лари и Валерий Федотов — основатели L.BURO</p>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-16">
          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-graphite/55">Студия ландшафтного дизайна L.BURO</p>
            <h2 className="font-expanded text-5xl font-black uppercase leading-[0.86] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
              Создаём среду, где рождаются новые сценарии жизни
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <blockquote className="border-l border-graphite pl-5 text-xl uppercase leading-tight tracking-[-0.02em] sm:text-2xl">
              Не «у меня есть сад», а «я нахожусь в саду».
            </blockquote>
            <div className="space-y-5 text-base leading-relaxed text-graphite/80 sm:text-lg">
              <p>
                Сад — это способ быть здесь и сейчас. Пространство, которое меняет образ мыслей и жизни, где человек чувствует опору, связь с собой и миром.
              </p>
              <p>
                Скандинавский сад — фирменный стиль L.BURO. Это философия ощущения, состояния и мысли, созданная главным архитектором Петром Лари.
              </p>
              <Link href="#team" className="inline-flex border-b border-graphite pb-1 text-[11px] font-bold uppercase tracking-[0.2em]">Подробнее о нас</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Principles() {
  return (
    <section className="relative overflow-hidden bg-sage px-4 py-20 text-cream sm:px-6 lg:px-10 lg:py-28">
      <div className="absolute inset-0 opacity-20 mix-blend-multiply" style={{ backgroundImage: `url(${assets.bg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="relative mx-auto max-w-[1760px]">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="font-expanded text-5xl font-black uppercase leading-[0.84] tracking-[-0.06em] sm:text-7xl lg:text-8xl">Принципы скандинавского сада</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-cream/85 lg:pt-4">
            Гармония и спокойствие. Уверенность и безопасность. Взрыв эмоций и вдохновение. Такой сад становится настоящей инвестицией в состояние человека.
          </p>
        </div>
        <div className="grid border-y border-cream/35 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <Link key={principle} href="#portfolio" className="group flex min-h-[180px] flex-col justify-between border-b border-cream/30 p-5 transition hover:bg-cream hover:text-graphite md:border-r lg:min-h-[240px]">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] opacity-70">0{index + 1}</span>
              <span className="max-w-xs text-2xl uppercase leading-none tracking-[-0.04em] sm:text-3xl">{principle}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioGrid() {
  return (
    <section id="portfolio" className="bg-cream px-4 py-20 text-graphite sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1760px]">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-graphite/25 pb-5">
          <h2 className="font-expanded text-6xl font-black uppercase leading-none tracking-[-0.07em] sm:text-8xl lg:text-9xl">Портфолио</h2>
          <Link href="#all" className="hidden border-b border-graphite pb-1 text-[11px] font-bold uppercase tracking-[0.2em] sm:inline-flex">Все проекты</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.map((item, index) => (
            <Link
              key={item.title}
              href="#project"
              className={`group relative overflow-hidden bg-graphite ${index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="aspect-[4/3] h-full min-h-[300px] w-full object-cover opacity-90 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                sizes="(max-width: 1200px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              {item.label && (
                <span className="absolute left-4 top-4 max-w-[10rem] text-[9px] font-bold uppercase leading-tight tracking-[0.18em] text-cream/80">{item.label}</span>
              )}
              <div className="absolute inset-x-4 bottom-4 text-cream">
                <h3 className="font-expanded text-3xl font-black uppercase leading-none tracking-[-0.05em]">{item.title}</h3>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/75">{item.place}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="Контакты" className="bg-cream px-4 py-10 text-graphite sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-[1760px] gap-10 border-t border-graphite/25 pt-10 lg:grid-cols-[0.8fr_1.2fr_1fr]">
        <div>
          <Image src={assets.logo} alt="Logo L.BURO" className="h-12 w-auto" />
          <div className="mt-8 flex flex-col gap-2 text-sm font-semibold uppercase tracking-[0.12em]">
            <a href="tel:+74958226655">+7 (495) 822-66-55</a>
            <a href="tel:+78125076655">+7 (812) 507-66-55</a>
            <a href="mailto:lb@lburo.ru">lb@lburo.ru</a>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <address className="not-italic text-sm uppercase leading-relaxed tracking-[0.1em] text-graphite/75">
            Москва, ул. Саврасова, д. 7, помещ. 2
          </address>
          <address className="not-italic text-sm uppercase leading-relaxed tracking-[0.1em] text-graphite/75">
            Санкт-Петербург, Большой Сампсониевский пр., 28 корп. 2, БЦ Mezon Plaza, офис 643
          </address>
        </div>
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-wrap gap-3">
            {Object.entries(assets.socials).map(([name, src]) => (
              <a key={name} href="#social" className="grid h-10 w-10 place-items-center border border-graphite/25 transition hover:bg-graphite hover:invert" aria-label={name}>
                <Image src={src} alt="" className="h-5 w-5" />
              </a>
            ))}
          </div>
          <p className="text-[10px] uppercase leading-relaxed tracking-[0.16em] text-graphite/50">2020–2026. Материалы сайта могут быть использованы только с разрешения ООО «Л-Бюро».</p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1760px] flex-wrap gap-x-6 gap-y-2 border-t border-graphite/15 pt-5 text-[10px] uppercase tracking-[0.14em] text-graphite/55">
        <a href="#policy">Политика обработки персональных данных</a>
        <a href="#agree">Пользовательское соглашение</a>
        <a href="#documents">Документы</a>
      </div>
    </footer>
  )
}

function CookieAndChat() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-graphite/20 bg-cream/95 px-4 py-3 text-graphite shadow-2xl backdrop-blur sm:left-6 sm:right-auto sm:bottom-6 sm:max-w-xl sm:border">
        <div className="flex items-start gap-4">
          <p className="text-[10px] uppercase leading-relaxed tracking-[0.13em] text-graphite/70">
            Наш сайт использует cookies для улучшения работы. Сервис Яндекс.Метрика также использует cookies.
          </p>
          <button className="shrink-0 border border-graphite px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em]">OK</button>
        </div>
      </div>
      <button className="fixed bottom-24 right-4 z-40 grid h-16 w-16 place-items-center rounded-full bg-graphite text-[10px] font-black uppercase tracking-[0.18em] text-cream shadow-2xl sm:bottom-8 sm:right-8" aria-label="Open chat">
        чат
      </button>
    </>
  )
}

// ============================================================
// Page
// ============================================================
export default function LburoPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <Studio />
        <Principles />
        <PortfolioGrid />
        <CatalogCta />
      </main>
      <Footer />
      <CookieAndChat />
    </>
  )
}