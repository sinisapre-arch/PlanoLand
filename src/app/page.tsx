import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader, SiteFooter, CookiePanel, PageLayout, ContactForm } from './components/SiteChrome'

// ============================================================
// Assets & Data
// ============================================================
const assets = {
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
  { title: 'Человек в центре', desc: 'Сад проектируется не вокруг растений, а вокруг состояния человека, который в нём живёт.' },
  { title: 'Чувство места', desc: 'Каждый сад рождается из климата, рельефа и света конкретной территории — без шаблонов.' },
  { title: 'Природная композиция', desc: 'Скандинавская палитра растений: долговечность, сдержанность и спокойная гармония.' },
  { title: 'Сезонная динамика', desc: 'Сад живёт круглый год: цветение сменяется текстурой, зима не менее красива, чем лето.' },
  { title: 'Климатическая устойчивость', desc: 'Подбор видов для всех климатических зон — от Калининграда до Сочи и Владивостока.' },
  { title: 'Полный цикл', desc: 'От первой идеи до ухода: проектирование, реализация и сопровождение в одной команде.' },
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

// ============================================================
// Components
// ============================================================
function Hero() {
  return (
    <section className="hero section" aria-labelledby="hero-heading">
      <div className="background-wrap">
        <div className="background" style={{ backgroundImage: `url(${assets.hero})` }} />
      </div>
      <div className="container">
        <span className="hero-award uppercase">
          <Image src={assets.socials.instagram} alt="" width={16} height={16} />
          Лучшая ландшафтная студия 2025 · АЛАРОС
        </span>

        <h1 id="hero-heading" className="hero-title uppercase">
          Сад
          <br />
          как
          <br />
          состояние
        </h1>

        <div className="hero-features">
          {[
            { num: '2014', text: 'Работаем с этого года' },
            { num: '300+', text: 'Садов в активе команды' },
            { num: '7', text: 'Стран мира' },
            { num: '5-й', text: 'Сад — победитель премий' },
          ].map((f) => (
            <div key={f.num} className="hero-feature">
              <span className="hero-feature-num">{f.num}</span>
              <span className="hero-feature-text">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedProjects() {
  return (
    <section className="section no-scrollbar" aria-labelledby="featured-heading">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Портфолио</span>
            <h2 id="featured-heading" className="section-heading uppercase">
              Избранные проекты
            </h2>
          </div>
          <Link href="/portfolio/" className="section-header__link uppercase">
            Все проекты
            <Image src={assets.socials.telegram} alt="" width={16} height={16} />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="gallery">
          <div className="gallery__track">
            {featuredProjects.map((p, index) => (
              <Link key={p.title} href="/portfolio/" className="gallery__card link">
                <div className="gallery__cover">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 1200px) 80vw, 30vw" />
                </div>
                <div className="gallery__meta">
                  <span className="gallery__title uppercase">{p.title}</span>
                  <span className="gallery__subtitle">{p.place}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Studio() {
  return (
    <section className="studio section" aria-labelledby="studio-heading">
      <div className="container">
        <div className="studio__media">
          <Image
            src={assets.studio}
            alt="Основатели студии PlanoLand"
            fill
            sizes="(max-width: 1200px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="studio__body">
          <span className="section-eyebrow">Студия</span>
          <h2 id="studio-heading" className="section-heading uppercase">
            Полный цикл
            <br />
            ландшафтного дизайна
          </h2>
          <blockquote className="studio__quote uppercase">
            Создаём легендарные сады, где в центре — человек и его состояние
          </blockquote>
          <p className="studio__desc">
            PlanoLand — студия ландшафтного дизайна полного цикла. Мы проектируем Скандинавские
            сады® во всех климатических зонах — от Калининграда до Владивостока и Сочи, а также в 7
            странах мира. Каждая работа начинается с разговора о человеке и заканчивается садом,
            который живёт и развивается.
          </p>
          <Link href="/team/" className="section-header__link uppercase">
            Команда студии
            <Image src={assets.socials.telegram} alt="" width={16} height={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function Principles() {
  return (
    <section className="philosophy section" aria-labelledby="philosophy-heading">
      <div className="container-narrow">
        <span className="section-eyebrow text-center">Философия</span>
        <p id="philosophy-heading" className="philosophy__statement">
          «Не «у меня есть сад»,
          <br />
          а «я есть в саду»»
        </p>
        <span className="philosophy__author uppercase">Скандинавские сады®</span>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">Подход</span>
              <h2 className="section-heading uppercase">Принципы Скандинавского сада®</h2>
            </div>
            <Link href="/scandinavian-garden/" className="section-header__link uppercase">
              Подробнее о стиле
              <Image src={assets.socials.telegram} alt="" width={16} height={16} />
            </Link>
          </div>

          <div className="principles__grid">
            {principles.map((p, i) => (
              <article key={p.title} className="principle-card">
                <span className="principle-card__num">0{i + 1}</span>
                <h3 className="principle-card__title uppercase">{p.title}</h3>
                <p className="principle-card__desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

function PortfolioGrid() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-eyebrow">Портфолио</span>
            <h2 className="section-heading uppercase">Портфолио</h2>
          </div>
          <Link href="/portfolio/" className="section-header__link uppercase">
            Все проекты
            <Image src={assets.socials.telegram} alt="" width={16} height={16} />
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="portfolio-page__grid">
          {portfolio.map((p) => (
            <Link key={p.title} href="/portfolio/" className="gallery__card link">
              <div className="gallery__cover">
                <Image src={p.image} alt={p.title} fill sizes="(max-width: 1200px) 100vw, 33vw" />
              </div>
              <div className="gallery__meta">
                <span className="gallery__title uppercase">{p.title}</span>
                <span className="gallery__subtitle">{p.place}</span>
                {p.label && (
                  <div className="gallery__awards">
                    <span className="gallery__award-badge uppercase">
                      <Image src={assets.socials.instagram} alt="" width={12} height={12} />
                      {p.label}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function CatalogCta() {
  return (
    <section className="form-container section" aria-labelledby="form-heading">
      <div className="container">
        <div className="section__item empty-wrap" />
        <div className="section__item block-wrap">
          <div className="section__subitem heading-wrap">
            <h2 className="h5 heading heading-flex uppercase" id="form-heading">
              Заказать проектирование <span className="nowrap">Скандинавского сада</span>
            </h2>
          </div>
          <div className="section__subitem form-wrap">
            <form className="form-callback" action="/api/consultation" method="POST">
              <div className="form-callback__container">
                <div className="form-callback__item input-phone">
                  <input
                    type="tel"
                    className="phone required"
                    name="phone"
                    placeholder="+7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                    required
                  />
                </div>
                <div className="form-callback__item input-name">
                  <input type="text" name="name" placeholder="Ваше имя" className="required" required />
                </div>
                <div className="form-callback__item input-square">
                  <input
                    type="text"
                    name="square"
                    placeholder="Площадь участка"
                    className="required"
                    required
                  />
                </div>
                <div className="form-callback__item input-policy">
                  <label className="form-callback__custom-checkbox">
                    <input type="checkbox" name="policy" className="form-callback__checkbox" required />
                    <span className="form-callback__checkmark" />
                    <span className="form-callback__placeholder uppercase">Принять конфиденциальность</span>
                  </label>
                </div>
                <div className="form-callback__item input-hidden">
                  <input type="hidden" name="current_url" value="" />
                </div>
                <div className="form-callback__item button-wrap">
                  <button
                    className="button button-sm button-outline-color-fg button-animated animation-shift uppercase link wide wide"
                    type="submit"
                  >
                    Получить консультацию
                  </button>
                </div>
                <div className="form-callback__item rules-wrap">
                  <span className="form-callback__rules">
                    Нажимая на кнопку, вы даете согласие на обработку персональных данных.
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="section__subitem buttons-wrap">
            <Link
              href="/assets/catalogs/private-gardens-catalog.pdf"
              className="button button-sm button-outline-color-fg button-animated animation-shift uppercase link button-catalog wide wide"
              download
            >
              <span className="button__subitem icon-wrap animation-icon-up">
                <Image src={assets.download} alt="" className="button__icon" width={20} height={20} />
              </span>
              Каталог частных садов
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <SiteHeader activePath="/" />
      <main>
        <Hero />
        <FeaturedProjects />
        <Studio />
        <Principles />
        <PortfolioGrid />
        <CatalogCta />
      </main>
      <SiteFooter />
      <CookiePanel />
    </>
  )
}