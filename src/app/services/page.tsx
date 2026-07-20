import { ContactForm, PageLayout } from "../components/SiteChrome";

const SERVICES = [
  {
    title: "Воссоздание естественной природы",
    desc: "Проектируем сады, которые выглядят так, будто созданы самой природой — с учётом экосистемы и климата.",
  },
  {
    title: "Зелёные террасы",
    desc: "Многоуровневые террасные решения для участков с перепадом высот и сложным рельефом.",
  },
  {
    title: "Альпийские луга",
    desc: "Создание устойчивых луговых композиций, не требующих интенсивного ухода.",
  },
  {
    title: "Озеленение крыш",
    desc: "Инженерное озеленение эксплуатируемых кровель и террас на зданиях.",
  },
  {
    title: "Работы на рельефе",
    desc: "Решение сложных задач на участках с выраженным рельефом и уклонами.",
  },
  {
    title: "Характерные валуны",
    desc: "Подбор и установка природного камня как смысловой и композиционной основы сада.",
  },
];

export const metadata = {
  title: "Услуги — PlanoLand",
  description:
    "Проектирование общественных и частных пространств студией PlanoLand.",
};

export default function ServicesPage() {
  return (
    <PageLayout activePath="/services/">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow uppercase">Услуги</span>
          <h1 className="page-hero__title uppercase">
            Проектирование пространств
          </h1>
          <p className="page-hero__desc">
            Полный цикл работ — от концепции и эскизного проекта до реализации и
            сопровождения сада. Особенное внимание мы уделяем задачам, в которых
            раскрывается сила авторского подхода.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading uppercase">
            Особенные задачи, которые нам нравится решать
          </h2>
          <div className="services-list">
            {SERVICES.map((s, i) => (
              <article key={s.title} className="service-card">
                <span className="principle-card__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="service-card__title uppercase">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </PageLayout>
  );
}
