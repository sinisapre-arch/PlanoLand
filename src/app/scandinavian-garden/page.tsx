import { ContactForm, PageLayout } from "../components/SiteChrome";

const PRINCIPLES = [
  {
    num: "01",
    title: "Человек в центре",
    desc: "Сад проектируется не вокруг растений, а вокруг состояния человека, который в нём живёт.",
  },
  {
    num: "02",
    title: "Чувство места",
    desc: "Каждый сад рождается из климата, рельефа и света конкретной территории — без шаблонов.",
  },
  {
    num: "03",
    title: "Природная композиция",
    desc: "Скандинавская палитра растений: долговечность, сдержанность и спокойная гармония.",
  },
  {
    num: "04",
    title: "Сезонная динамика",
    desc: "Сад живёт круглый год: цветение сменяется текстурой, зима не менее красива, чем лето.",
  },
  {
    num: "05",
    title: "Климатическая устойчивость",
    desc: "Подбор видов для всех климатических зон — от Калининграда до Сочи и Владивостока.",
  },
  {
    num: "06",
    title: "Полный цикл",
    desc: "От первой идеи до ухода: проектирование, реализация и сопровождение в одной команде.",
  },
];

export const metadata = {
  title: "Скандинавский сад — PlanoLand",
  description: "Авторский стиль Скандинавский сад® студии PlanoLand.",
};

export default function ScandinavianGardenPage() {
  return (
    <PageLayout activePath="/scandinavian-garden/">
      <section className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow uppercase">Авторский стиль</span>
          <h1 className="page-hero__title uppercase">Скандинавский сад</h1>
          <p className="page-hero__desc">
            Скандинавские сады® — авторский стиль студии PlanoLand, в центре
            которого человек и его состояние. Это сады, которые живут и
            развиваются вместе с владельцем, реагируют на климат и свет, и
            остаются красивыми в любое время года.
          </p>
        </div>
      </section>

      <section className="philosophy section">
        <div className="container-narrow">
          <p className="philosophy__statement">
            «Не «у меня есть сад»,
            <br />а «я есть в саду»»
          </p>
          <span className="philosophy__author uppercase">
            Скандинавские сады®
          </span>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-eyebrow">Подход</span>
              <h2 className="section-heading uppercase">
                Принципы Скандинавского сада®
              </h2>
            </div>
          </div>
          <div className="principles__grid">
            {PRINCIPLES.map((p) => (
              <article key={p.num} className="principle-card">
                <span className="principle-card__num">{p.num}</span>
                <h3 className="principle-card__title uppercase">{p.title}</h3>
                <p className="principle-card__desc">{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </PageLayout>
  );
}
