import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageLayout } from '../../components/SiteChrome'

/**
 * Project detail page. Shows the full image gallery for one project.
 *
 * Images live at /assets/portfolio/projects/<slug>.webp (cover) and
 * <slug>-02.webp, <slug>-03.webp, ... (gallery). We enumerate them from a
 * manifest so the static export knows all routes at build time.
 */

const PROJECTS = [
  { slug: 'project-01', title: 'Проект 01', sub: 'Частный сад', count: 7 },
  { slug: 'project-02', title: 'Проект 02', sub: 'Частный сад', count: 10 },
  { slug: 'project-03', title: 'Проект 03', sub: 'Частный сад', count: 2 },
  { slug: 'project-04', title: 'Проект 04', sub: 'До и после', count: 3 },
  { slug: 'project-05', title: 'Проект 05', sub: 'Частный сад', count: 5 },
  { slug: 'project-06', title: 'Проект 06', sub: 'Частный сад', count: 9 },
  { slug: 'project-07', title: 'Проект 07', sub: 'Частный сад', count: 4 },
] as const

type Project = (typeof PROJECTS)[number]

function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}

/** Build the list of image URLs for a project (cover + gallery). */
function getImages(p: Project): string[] {
  const base = `/assets/portfolio/projects/${p.slug}`
  const imgs = [`${base}.webp`]
  for (let i = 2; i <= p.count; i++) {
    imgs.push(`${base}-${String(i).padStart(2, '0')}.webp`)
  }
  return imgs
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = getProject(slug)
  return { title: p ? `${p.title} — PlanoLand` : 'PlanoLand' }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const images = getImages(project)

  return (
    <PageLayout activePath="/portfolio/">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow uppercase">{project.sub}</span>
          <h1 className="page-hero__title uppercase">{project.title}</h1>
          <p className="page-hero__desc">
            {project.count} изображений.{' '}
            <Link href="/portfolio/" className="link">← Все проекты</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="project-gallery">
            {images.map((src, i) => (
              <div key={src} className="project-gallery__item">
                <Image
                  src={src}
                  alt={`${project.title} — фото ${i + 1}`}
                  width={1600}
                  height={1200}
                  sizes="(max-width: 1200px) 100vw, 50vw"
                  className="project-gallery__image"
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
