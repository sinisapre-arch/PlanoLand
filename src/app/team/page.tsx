import Image from 'next/image'
import { PageLayout } from '../components/SiteChrome'

const teamMembers = [
  {
    name: 'ВАЛЕРИЙ ФЕДОТОВ',
    role: 'ГЛАВНЫЙ ПО БИЗНЕСУ',
    image: '/assets/team/valery-fedotov.webp',
    alt: 'Валерий Федотов',
    bio: [
      'Основатель и руководитель PlanoLand.',
      'Управляющий партнёр с опытом в бизнесе более 35 лет в 7 отраслях. В ландшафтной отрасли — с 2020 года. Экспертные области: постановка управления, регулярный менеджмент, бизнес-процессы, формирование команд проектов.',
      'Имеет три высших образования, включая обучение на магистре делового администрирования (MBA). Мастер спорта по лёгкой атлетике, окончил музыкальную школу. Воспитывает четвертого ребёнка. Коллекционер редких видов растений.',
      'Живёт в собственном саду «Усадьба Хрустальное». Сад входит в «Русское Общество Открытых Садов».',
    ],
  },
  {
    name: 'ПЁТР ЛАРИ',
    role: 'ГЛАВНЫЙ ПО САДАМ',
    image: '/assets/team/petr-lari.webp',
    alt: 'Пётр Лари',
    bio: [
      'Основатель и главный архитектор PlanoLand.',
      'Лучший архитектор России по версии АЛАРОС-2023. Лауреат множества отраслевых национальных и зарубежных премий.',
      'Реализовал более 300 проектов частных садов и общественных пространств. Основатель и идейный вдохновитель курса «Ландшафтный дизайн» в Британской высшей школе дизайна.',
      '16 лет в профессии, из династии архитекторов. Закончил ГАСУ, воспитывает двух сыновей. Любит экстремальные испытания и занимается медитацией.',
      'Создатель стиля Скандинавские сады®, где в центре — человек и его состояние.',
    ],
  },
]

const quotes = [
  {
    text: 'СОЗДАЁМ ЛЕГЕНДАРНЫЕ САДЫ, ГДЕ В ЦЕНТРЕ — ЧЕЛОВЕК И ЕГО СОСТОЯНИЕ',
    className: 'blockquote-primary',
  },
  {
    text: 'БОЛЕЕ 300 САДОВ В АКТИВЕ КОМАНДЫ ПО ВСЕЙ СТРАНЕ И ЗА ЕЁ ПРЕДЕЛАМИ',
    className: 'blockquote-secondary',
  },
]

export const metadata = {
  title: 'Команда — PlanoLand',
  description: 'Команда студии ландшафтного дизайна PlanoLand.',
}

export default function TeamPage() {
  return (
    <PageLayout activePath="/team/">
      {/* Team Hero Section */}
      <section className="promo section content-team" aria-labelledby="team-heading">
        <div className="section__item background-wrap">
          <div
            className="background"
            style={{ backgroundImage: 'url(/assets/ui/noise-texture.svg)' }}
          />
        </div>
        <div className="container">
          <div className="section__item headline-heading-wrap">
            <div className="section__subitem headline-wrap">
              <span className="headline">
                <p>
                  PlanoLand признана лучшей ландшафтной студией 2025 года по версии АЛАРОС.
                  <br />
                  <br />
                  <span style={{ fontSize: '0.9em', opacity: 0.7 }}>
                    Национальная премия АЛАРОС — высшая профессиональная награда в области
                    ландшафтной архитектуры и садово-паркового искусства.
                  </span>
                </p>
              </span>
            </div>
            <div className="section__subitem heading-wrap">
              <div className="h1 heading heading-flex uppercase" id="team-heading">
                НАША <br />
                КОМАНДА
              </div>
            </div>
          </div>

          <div className="section__item about-wrap">
            <div className="section__subitem empty-wrap" />
            <div className="section__subitem desc-wrap container-md">
              <span className="desc">
                <p>
                  Мы — студия ландшафтного дизайна полного цикла, создающая Скандинавские сады® во
                  всех климатических зонах от Калининграда до Владивостока и Сочи, а также в 7
                  странах мира. В центре сада от PlanoLand — человек и его состояние.
                </p>
                <p>&nbsp;</p>
              </span>
            </div>
            <div className="section__subitem features-wrap container-md">
              <ul className="features-list">
                <li className="features-list__item uppercase">
                  С <span className="font-1-demibold">2014</span> года
                </li>
                <li className="features-list__item uppercase">
                  Более <span className="font-1-demibold">300</span> садов в активе команды
                </li>
                <li className="features-list__item uppercase">
                  Работаем с проектами по всей России и за её пределами
                </li>
                <li className="features-list__item uppercase">
                  Каждый <span className="font-1-demibold">5</span>-й сад — победитель престижных
                  премий
                </li>
              </ul>
            </div>
          </div>

          <section className="content-container section">
            <div className="container">
              <section className="content-team">
                <div className="content-team">
                  <div className="section__item content-wrap content-center-lg">
                    {teamMembers.map((member) => (
                      <div key={member.name} className="section__subitem card-wrap container-md">
                        <div className="card-owner">
                          <div className="card-owner__item cover-wrap">
                            <div
                              className="cover"
                              style={{
                                aspectRatio: '4/5',
                                overflow: 'hidden',
                                borderRadius: '0.5rem',
                              }}
                            >
                              <Image
                                src={member.image}
                                alt={member.alt}
                                fill
                                className="cover__image img-responsive"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                                style={{ objectFit: 'cover', transition: 'transform 0.3s ease' }}
                              />
                            </div>
                          </div>
                          <div className="card-owner__item name-wrap">
                            <h2 className="h5 heading heading-flex uppercase card-owner__title">
                              {member.name}
                            </h2>
                            <span className="card-owner__subtitle uppercase">{member.role}</span>
                          </div>
                          <div className="card-owner__item desc-wrap">
                            <span className="card-owner__desc">
                              {member.bio.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                              ))}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="section__item blockquotes-card-wrap container-md">
                    {quotes.map((quote, index) => (
                      <blockquote
                        key={index}
                        className={`blockquote blockquote-lg uppercase color-5 ${quote.className}`}
                      >
                        {quote.className === 'blockquote-secondary' && (
                          <span className="blockquote-border" />
                        )}
                        <span className={'nowrap'}>{quote.text}</span>
                      </blockquote>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
      </section>
    </PageLayout>
  )
}
