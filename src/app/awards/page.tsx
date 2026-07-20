import Image from 'next/image'
import { PageLayout } from '../components/SiteChrome'

const AWARDS = [
  { year: '2025', title: 'Лучшая ландшафтная студия', org: 'АЛАРОС' },
  { year: '2024', title: 'Лучший сад года', org: 'АЛАРОС' },
  { year: '2024', title: 'Золотая ветвь', org: 'Национальная премия' },
  { year: '2023', title: 'Лучший архитектор России', org: 'АЛАРОС' },
  { year: '2023', title: 'Серебряная ветвь', org: 'Национальная премия' },
  { year: '2022', title: 'Гран-при за общественное пространство', org: 'Союз Архитекторов' },
]

export const metadata = {
  title: 'Награды — PlanoLand',
  description: 'Награды и премии студии ландшафтного дизайна PlanoLand.',
}

export default function AwardsPage() {
  return (
    <PageLayout activePath="/">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow uppercase">Признание</span>
          <h1 className="page-hero__title uppercase">Награды</h1>
          <p className="page-hero__desc">
            Каждый пятый сад студии PlanoLand становится победителем престижных национальных и
            зарубежных премий в области ландшафтной архитектуры.
          </p>
        </div>
        <div className="page-hero__image">
          <Image
            src="/assets/awards/hero/award-hero.webp"
            alt="Награда «Лучшая ландшафтная студия 2025»"
            fill
            sizes="(max-width: 1200px) 100vw, 50vw"
            className="page-hero__image-img"
            priority
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Award certificate images */}
          <div className="project-gallery" style={{ marginBottom: '4rem' }}>
            <div className="project-gallery__item">
              <Image
                src="/assets/awards/award-02.webp"
                alt="Награда 2"
                width={1200}
                height={1200}
                sizes="(max-width: 1200px) 100vw, 50vw"
                className="project-gallery__image"
              />
            </div>
          </div>

          <div className="portfolio-page__grid">
            {AWARDS.map((award) => (
              <article key={`${award.year}-${award.title}`} className="principle-card">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Image src="/assets/ui/icon-award.svg" alt="" width={28} height={28} />
                  <span className="principle-card__num">{award.year}</span>
                </span>
                <h2 className="principle-card__title uppercase">{award.title}</h2>
                <p className="principle-card__desc">{award.org}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
