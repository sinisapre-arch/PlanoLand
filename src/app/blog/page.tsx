import { PageLayout } from '../components/SiteChrome'

const POSTS = [
  { title: 'Как проектируется Скандинавский сад', date: '15 июня 2025', excerpt: 'Рассказываем о процессе создания авторского стиля студии — от первой встречи до реализации.' },
  { title: 'Растения для тенистых уголков', date: '2 июня 2025', excerpt: 'Подбор устойчивых видов для зон с недостатком солнечного света.' },
  { title: 'Сад четырёх сезонов', date: '20 мая 2025', excerpt: 'Почему зима — не менее важное время для сада, чем лето, и как это учесть при проектировании.' },
  { title: 'Камень в ландшафтном дизайне', date: '5 мая 2025', excerpt: 'Характерные валуны как композиционная основа сада.' },
  { title: 'Альпийские луга в городе', date: '28 апреля 2025', excerpt: 'Как создать устойчивую луговую композицию, не требующую интенсивного ухода.' },
  { title: 'Озеленение крыш: инженерный подход', date: '12 апреля 2025', excerpt: 'Особенности проектирования эксплуатируемых кровель и террас.' },
]

export const metadata = {
  title: 'Блог — PlanoLand',
  description: 'Блог студии ландшафтного дизайна PlanoLand.',
}

export default function BlogPage() {
  return (
    <PageLayout activePath="/">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow uppercase">Студия</span>
          <h1 className="page-hero__title uppercase">Блог</h1>
          <p className="page-hero__desc">
            Статьи, идеи и заметки о ландшафтном дизайне, садах и подходе студии PlanoLand.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid">
            {POSTS.map((post) => (
              <a key={post.title} href="#" className="blog-card link">
                <div className="blog-card__cover">
                  <div style={{ width: '100%', height: '100%', background: 'var(--color-4)' }} />
                </div>
                <span className="blog-card__date uppercase">{post.date}</span>
                <h2 className="blog-card__title uppercase">{post.title}</h2>
                <p className="studio__desc">{post.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
