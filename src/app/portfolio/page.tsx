import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "../components/SiteChrome";

/**
 * Portfolio index. Each project has a cover (the first image of the folder
 * the user dropped in) plus a gallery of the remaining images, shown on the
 * project's own detail page at /portfolio/<slug>/.
 *
 * Images were compressed from the user's originals (~106MB) to WebP (~13MB
 * total) so the site stays within Vercel's deployment size limits.
 *
 * NOTE: Project titles/locations below are neutral placeholders. Swap the
 * label text for the real project names when ready.
 */
const PROJECTS = [
  {
    slug: "project-01",
    title: "Проект 01",
    sub: "Частный сад",
    cover: "/assets/portfolio/projects/project-01.webp",
    count: 7,
  },
  {
    slug: "project-02",
    title: "Проект 02",
    sub: "Частный сад",
    cover: "/assets/portfolio/projects/project-02.webp",
    count: 10,
  },
  {
    slug: "project-03",
    title: "Проект 03",
    sub: "Частный сад",
    cover: "/assets/portfolio/projects/project-03.webp",
    count: 2,
  },
  {
    slug: "project-04",
    title: "Проект 04",
    sub: "До и после",
    cover: "/assets/portfolio/projects/project-04.webp",
    count: 3,
  },
  {
    slug: "project-05",
    title: "Проект 05",
    sub: "Частный сад",
    cover: "/assets/portfolio/projects/project-05.webp",
    count: 5,
  },
  {
    slug: "project-06",
    title: "Проект 06",
    sub: "Частный сад",
    cover: "/assets/portfolio/projects/project-06.webp",
    count: 9,
  },
  {
    slug: "project-07",
    title: "Проект 07",
    sub: "Частный сад",
    cover: "/assets/portfolio/projects/project-07.webp",
    count: 4,
  },
];

export const metadata = {
  title: "Портфолио — PlanoLand",
  description: "Портфолио проектов студии ландшафтного дизайна PlanoLand.",
};

export default function PortfolioPage() {
  return (
    <PageLayout activePath="/portfolio/">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow uppercase">Проекты студии</span>
          <h1 className="page-hero__title uppercase">Портфолио</h1>
          <p className="page-hero__desc">
            Реализованные проекты студии PlanoLand. Нажмите на проект, чтобы
            увидеть галерею изображений.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="portfolio-page__grid">
            {PROJECTS.map((p) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}/`}
                className="gallery__card link"
              >
                <div className="gallery__cover">
                  <Image
                    src={p.cover}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 33vw"
                  />
                </div>
                <div className="gallery__meta">
                  <span className="gallery__title uppercase">{p.title}</span>
                  <span className="gallery__subtitle">
                    {p.sub} · {p.count} фото
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
