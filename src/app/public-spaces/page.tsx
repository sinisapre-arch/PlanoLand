import Image from 'next/image'
import { PageLayout, ContactForm } from '../components/SiteChrome'

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

  // First 4 for public spaces page
  const PROJECTS = portfolioProjects.slice(0, 4)

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
