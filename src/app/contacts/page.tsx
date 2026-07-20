import { PageLayout } from '../components/SiteChrome'
import TelegramContactForm from '../components/TelegramContactForm'

const OFFICES = [
  {
    city: 'Москва',
    address: 'ул. Саврасова, д. 7, помещ. 2',
    phone: '+7 (495) 822-66-55',
    phoneHref: '+74958226655',
  },
  {
    city: 'Санкт-Петербург',
    address: 'Большой Сампсониевский пр., 28 корп. 2, литера Д, БЦ Мезон Плаза, офис 643',
    phone: '+7 (812) 507-66-55',
    phoneHref: '+78125076655',
  },
]

const SOCIAL = ['YouTube', 'VK Video', 'VK', 'Telegram', 'Dzen', 'Pinterest']

export const metadata = {
  title: 'Контакты — PlanoLand',
  description: 'Контакты студии ландшафтного дизайна PlanoLand в Москве и Санкт-Петербурге.',
}

export default function ContactsPage() {
  return (
    <PageLayout activePath="/contacts/">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow uppercase">Связаться с нами</span>
          <h1 className="page-hero__title uppercase">Контакты</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contacts-grid">
            {/* LEFT: addresses + phones */}
            <div className="contacts-block">
              <h2 className="contacts-block__title uppercase">Наши адреса</h2>
              {OFFICES.map((office) => (
                <div key={office.city} className="contacts-block__row">
                  <span className="contacts-block__label uppercase">{office.city}</span>
                  <span className="contacts-block__value">{office.address}</span>
                  <a href={`tel:${office.phoneHref}`} className="link font-1-medium">
                    {office.phone}
                  </a>
                </div>
              ))}

              <h2 className="contacts-block__title uppercase" style={{ marginTop: '2rem' }}>
                Связаться с нами
              </h2>
              <div className="contacts-block__row">
                <span className="contacts-block__label uppercase">Телефоны</span>
                <a href="tel:+74958226655" className="link font-1-medium">+7 (495) 822-66-55</a>
                <a href="tel:+78125076655" className="link font-1-medium">+7 (812) 507-66-55</a>
              </div>
              <div className="contacts-block__row">
                <span className="contacts-block__label uppercase">Email</span>
                <a href="mailto:lb@planoland.ru" className="link font-1-medium">lb@planoland.ru</a>
              </div>
              <div className="contacts-block__row">
                <span className="contacts-block__label uppercase">Подписывайтесь на нас</span>
                <span className="contacts-block__value">{SOCIAL.join(' · ')}</span>
              </div>
            </div>

            {/* RIGHT: Telegram contact form */}
            <div className="contacts-block">
              <h2 className="contacts-block__title uppercase">Написать нам</h2>
              <p className="studio__desc" style={{ marginBottom: '1.5rem' }}>
                Заполните форму, и мы свяжемся с вами. Сообщение отправляется нам напрямую в мессенджер.
              </p>
              <TelegramContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
