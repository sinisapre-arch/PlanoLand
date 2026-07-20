import { PageLayout } from '../components/SiteChrome'

export const metadata = {
  title: 'Документы — PlanoLand',
  description: 'Документы и правовая информация PlanoLand.',
}

export default function DocumentsPage() {
  return (
    <PageLayout activePath="/">
      <article className="prose">
        <div className="container-narrow">
          <h1>Документы</h1>
          <p>
            В этом разделе размещены документы и правовая информация, регулирующая деятельность
            студии PlanoLand.
          </p>

          <h2>Реквизиты компании</h2>
          <ul>
            <li>Общество с ограниченной ответственностью «PlanoLand»</li>
            <li>ИНН: 7700000000</li>
            <li>ОГРН: 1157700000000</li>
            <li>Юридический адрес: Москва, ул. Саврасова, д. 7, помещ. 2</li>
          </ul>

          <h2>Членство в ассоциациях</h2>
          <ul>
            <li>Ассоциация ландшафтных архитекторов России (АЛАРОС)</li>
            <li>Союз Архитекторов России</li>
            <li>Саморегулируемая организация (СРО)</li>
            <li>Лицензия Министерства культуры РФ по проектированию объектов культурного наследия</li>
          </ul>

          <h2>Правовые документы</h2>
          <ul>
            <li><a href="/policy/" className="link">Политика обработки персональных данных</a></li>
            <li><a href="/agree/" className="link">Пользовательское соглашение</a></li>
            <li><a href="/policy-yandex/" className="link">Согласие на обработку данных Яндекс Метрика</a></li>
          </ul>

          <p>
            По вопросам документации обращайтесь на:{' '}
            <a href="mailto:lb@planoland.ru" className="link">lb@planoland.ru</a>
          </p>
        </div>
      </article>
    </PageLayout>
  )
}
