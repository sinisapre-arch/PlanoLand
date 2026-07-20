import Link from 'next/link'
import Image from 'next/image'
import { SiteHeader, SiteFooter, CookiePanel, ContactForm } from './components/SiteChrome'

export default function HomePage() {
  const heroFeatures = [
    { num: '2014', text: 'Работаем с этого года' },
    { num: '300+', text: 'Садов в активе команды' },
    { num: '7', text: 'Стран мира' },
    { num: '5-й', text: 'Сад — победитель премий' },
  ]

  const credentials = [
    { title: 'АЛАРОС', sub: 'Член ассоциации' },
    { title: 'Лицензия Минкультуры', sub: 'Проектирование ОКН' },
    { title: 'СРО', sub: 'Допуск на работы' },
    { title: 'Союз Архитекторов', sub: 'Действующий член' },
  ]

  // Portfolio projects from /assets/portfolio/projects/ (7 projects with galleries)
  const portfolioProjects = [
    { slug: 'project-01', title: 'Проект 01', sub: 'Частный сад', image: '/assets/portfolio/projects/project-01.webp', awards: [] },
    { slug: 'project-02', title: 'Проект 02', sub: 'Частный сад', image: '/assets/portfolio/projects/project-02.webp', awards: [] },
    { slug: 'project-03', title: 'Проект 03', sub: 'Частный сад', image: '/assets/portfolio/projects/project-03.webp', awards: [] },
    { slug: 'project-04', title: 'Проект 04', sub: 'До и после', image: '/assets/portfolio/projects/project-04.webp', awards: [] },
    { slug: 'project-05', title: 'Проект 05', sub: 'Частный сад', image: '/assets/portfolio/projects/project-05.webp', awards: [] },
    { slug: 'project-06', title: 'Проект 06', sub: 'Частный сад', image: '/assets/portfolio/projects/project-06.webp', awards: [] },
    { slug: 'project-07', title: 'Проект 07', sub: 'Частный сад', image: '/assets/portfolio/projects/project-07.webp', awards: [] },
  ]

  // Split for display: first 4 as public spaces, rest as private gardens
  const publicProjects = portfolioProjects.slice(0, 4)
  const privateProjects = portfolioProjects.slice(4)

  const principles = [
    { num: '01', title: 'Человек в центре', desc: 'Сад проектируется не вокруг растений, а вокруг состояния человека, который в нём живёт.' },
    { num: '02', title: 'Чувство места', desc: 'Каждый сад рождается из климата, рельефа и света конкретной территории — без шаблонов.' },
    { num: '03', title: 'Природная композиция', desc: 'Скандинавская палитра растений: долговечность, сдержанность и спокойная гармония.' },
    { num: '04', title: 'Сезонная динамика', desc: 'Сад живёт круглый год: цветение сменяется текстурой, зима не менее красива, чем лето.' },
    { num: '05', title: 'Климатическая устойчивость', desc: 'Подбор видов для всех климатических зон — от Калининграда до Сочи и Владивостока.' },
    { num: '06', title: 'Полный цикл', desc: 'От первой идеи до ухода: проектирование, реализация и сопровождение в одной команде.' },
  ]

  return (
    <>
      <SiteHeader activePath="/" />

      <main>
        {/* HERO */}
        <section className="hero section" aria-labelledby="hero-heading">
          <div className="background-wrap">
            <div
              className="background"
              style={{ backgroundImage: 'url(/assets/hero/hero-placeholder.svg)' }}
            />
          </div>
          <div className="container">
            <span className="hero-award uppercase">
              <Image src="/assets/ui/icon-award.svg" alt="" width={16} height={16} />
              Лучшая ландшафтная студия 2025 · АЛАРОС
            </span>

            <h1 id="hero-heading" className="hero-title uppercase">
              Сад как инвестиция
              <br />
              в состояние
            </h1>

            <div className="hero-features">
              {heroFeatures.map((f) => (
                <div key={f.num} className="hero-feature">
                  <span className="hero-feature-num">{f.num}</span>
                  <span className="hero-feature-text">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section className="credentials" aria-label="Членство в ассоциациях">
          <div className="container">
            {credentials.map((c) => (
              <div key={c.title} className="credentials__item">
                <span className="credentials__title">{c.title}</span>
                <span className="credentials__sub">{c.sub}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO: PUBLIC SPACES */}
        <section className="section" aria-labelledby="public-heading">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-eyebrow">Портфолио</span>
                <h2 id="public-heading" className="section-heading uppercase">
                  Общественные пространства
                </h2>
              </div>
              <Link href="/portfolio/" className="section-header__link uppercase">
                Все проекты
                <Image src="/assets/ui/icon-arrow.svg" alt="" width={16} height={16} />
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="gallery">
              <div className="gallery__track">
                {publicProjects.map((p) => (
                  <Link key={p.title} href="/portfolio/" className="gallery__card link">
                    <div className="gallery__cover">
                      <Image src={p.image} alt={p.title} fill sizes="(max-width: 1200px) 80vw, 30vw" />
                    </div>
                    <div className="gallery__meta">
                      <span className="gallery__title uppercase">{p.title}</span>
                      <span className="gallery__subtitle">{p.sub}</span>
                      {p.awards.length > 0 && (
                        <div className="gallery__awards">
                          {p.awards.map((a) => (
                            <span key={a} className="gallery__award-badge uppercase">
                              <Image src="/assets/ui/icon-award.svg" alt="" width={12} height={12} />
                              {a}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STUDIO INTRO */}
        <section className="studio section" aria-labelledby="studio-heading">
          <div className="container">
            <div className="studio__media">
              <Image
                src="/assets/studio/studio-founders-placeholder.svg"
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
                <Image src="/assets/ui/icon-arrow.svg" alt="" width={16} height={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
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
        </section>

        {/* PRINCIPLES */}
        <section className="section" aria-labelledby="principles-heading">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-eyebrow">Подход</span>
                <h2 id="principles-heading" className="section-heading uppercase">
                  Принципы Скандинавского сада®
                </h2>
              </div>
              <Link href="/scandinavian-garden/" className="section-header__link uppercase">
                Подробнее о стиле
                <Image src="/assets/ui/icon-arrow.svg" alt="" width={16} height={16} />
              </Link>
            </div>

            <div className="principles__grid">
              {principles.map((p) => (
                <article key={p.num} className="principle-card">
                  <span className="principle-card__num">{p.num}</span>
                  <h3 className="principle-card__title uppercase">{p.title}</h3>
                  <p className="principle-card__desc">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO: PRIVATE GARDENS */}
        <section className="section" aria-labelledby="private-heading">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-eyebrow">Портфолио</span>
                <h2 id="private-heading" className="section-heading uppercase">Частные сады</h2>
              </div>
              <Link href="/portfolio/" className="section-header__link uppercase">
                Все проекты
                <Image src="/assets/ui/icon-arrow.svg" alt="" width={16} height={16} />
              </Link>
            </div>
          </div>
          <div className="container">
            <div className="gallery">
              <div className="gallery__track">
                {privateProjects.map((p) => (
                  <Link key={p.title} href="/portfolio/" className="gallery__card link">
                    <div className="gallery__cover">
                      <Image src={p.image} alt={p.title} fill sizes="(max-width: 1200px) 80vw, 30vw" />
                    </div>
                    <div className="gallery__meta">
                      <span className="gallery__title uppercase">{p.title}</span>
                      <span className="gallery__subtitle">{p.sub}</span>
                      {p.awards.length > 0 && (
                        <div className="gallery__awards">
                          {p.awards.map((a) => (
                            <span key={a} className="gallery__award-badge uppercase">
                              <Image src="/assets/ui/icon-award.svg" alt="" width={12} height={12} />
                              {a}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <SiteFooter />
      <CookiePanel />
    </>
  )
}
