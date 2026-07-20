import Image from 'next/image'
import { PageLayout, ContactForm } from '../components/SiteChrome'

const PROJECTS = [
  { title: 'Оазис Парк', sub: 'Москва', image: '/assets/portfolio/public-spaces/oazis-park.svg', awards: ['АЛАРОС 2024'] },
  { title: 'MR Group, ЖК-1', sub: 'Москва', image: '/assets/portfolio/public-spaces/mr-group-gk1.svg', awards: [] },
  { title: 'Речной парк', sub: 'Санкт-Петербург', image: '/assets/portfolio/public-spaces/river-park.svg', awards: ['Золотая ветвь'] },
  { title: 'Технопарк', sub: 'Новосибирск', image: '/assets/portfolio/public-spaces/techno-park.svg', awards: [] },
  { title: 'Школьный двор', sub: 'Казань', image: '/assets/portfolio/public-spaces/school-yard.svg', awards: [] },
  { title: 'Центральная площадь', sub: 'Калининград', image: '/assets/portfolio/public-spaces/central-square.svg', awards: ['АЛАРОС 2023'] },
  { title: 'Сад клиники', sub: 'Сочи', image: '/assets/portfolio/public-spaces/hospital-garden.svg', awards: [] },
  { title: 'Набережная', sub: 'Владивосток', image: '/assets/portfolio/public-spaces/embankment.svg', awards: [] },
]

export const metadata = {
  title: 'Общественные пространства — PlanoLand',
  description: 'Проектирование общественных пространств студией PlanoLand.',
}

export default function PublicSpacesPage() {
  return (
    <PageLayout activePath="/public-spaces/">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow uppercase">Направление</span>
          <h1 className="page-hero__title uppercase">Общественные пространства</h1>
          <p className="page-hero__desc">
            Парки, скверы, набережные, дворы и площади — мы создаём общественные пространства, которые
            становятся точками притяжения и формируют среду для жизни города.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-page__grid">
            {PROJECTS.map((p) => (
              <a key={p.title} href="#" className="gallery__card link">
                <div className="gallery__cover">
                  <Image src={p.image} alt={p.title} fill sizes="(max-width: 1200px) 100vw, 33vw" />
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
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </PageLayout>
  )
}
