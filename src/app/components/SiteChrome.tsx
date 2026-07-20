import {
  ChevronDown,
  Instagram,
  Linkedin,
  Send,
  Share2,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const NAV_ITEMS = [
  { label: "Главная", href: "/" },
  { label: "Портфолио", href: "/portfolio/" },
  { label: "Скандинавский сад", href: "/scandinavian-garden/" },
  { label: "Услуги", href: "/services/" },
  { label: "Команда", href: "/team/" },
  { label: "Контакты", href: "/contacts/" },
];

const PHONES = ["+7 (495) 822-66-55", "+7 (812) 507-66-55"];
const EMAIL = "lb@planoland.ru";
const ADDRESSES = [
  "Москва, ул. Саврасова, д. 7, помещ. 2",
  "Санкт-Петербург, Большой Сампсониевский пр., 28 корп. 2, литера Д, БЦ Мезон Плаза, офис 643",
];

const SOCIAL = [
  { name: "YouTube", href: "https://youtube.com", icon: Youtube },
  { name: "VK Video", href: "https://vk.com/video", icon: Youtube },
  { name: "VK", href: "https://vk.com", icon: Linkedin },
  { name: "Telegram", href: "https://t.me", icon: Send },
  { name: "Dzen", href: "https://dzen.ru", icon: Share2 },
  { name: "Pinterest", href: "https://pinterest.com", icon: Instagram },
];

const LEGAL = [
  {
    name: "Политика в отношении обработки персональных данных",
    href: "/policy/",
  },
  { name: "Пользовательское соглашение", href: "/agree/" },
  { name: "Документы", href: "/documents/" },
  {
    name: "Согласие на обработку данных Яндекс Метрика",
    href: "/policy-yandex/",
  },
  { name: "Блог Студии PlanoLand", href: "/blog/" },
  { name: "Награды", href: "/awards/" },
];

/**
 * Shared site chrome: header (nav + scope switch + phones + lang switch + burger)
 * and footer (logo + contacts + social + addresses + legal + copyright).
 *
 * The cookie consent panel is rendered once here too, so every page gets it.
 * `activePath` highlights the current nav/scope item.
 */
export function SiteHeader({ activePath = "/" }: { activePath?: string }) {
  const isPublicScope =
    activePath.startsWith("/public-spaces") || activePath.startsWith("/op");
  return (
    <header className="header js-header" role="banner">
      <div className="container container-up">
        <div className="section__item scopes-switch-wrap">
          <Link
            href="/"
            className={`section__subitem scope-switch-wrap${!isPublicScope ? " active" : ""}`}
          >
            Частные сады
          </Link>
          <Link
            href="/public-spaces/"
            className={`section__subitem scope-switch-wrap${isPublicScope ? " active" : ""}`}
          >
            Общественные пространства
          </Link>
        </div>
      </div>
      <div
        className="dilimiter"
        style={{ background: "var(--color-border)" }}
      />
      <div className="container container-down">
        <div className="section__item logo-wrap">
          <Link
            href="/"
            className="link header__logo"
            aria-label="PlanoLand — Главная"
          >
            <Image
              src="/assets/ui/logo.svg"
              alt="Logo PlanoLand"
              width={175}
              height={60}
              className="img-responsive"
              priority
            />
          </Link>
        </div>

        <nav
          className="section__item nav-wrap"
          role="navigation"
          aria-label="Основная навигация"
        >
          {NAV_ITEMS.map((item) => (
            <div key={item.href} className="section__subitem nav__item">
              <Link
                href={item.href}
                className={`nav__link link font-1-normal nowrap uppercase${
                  activePath === item.href ? " is-current" : ""
                }`}
                aria-current={activePath === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="section__item callback-wrap">
          {PHONES.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className="callback-link link nowrap font-1-medium"
            >
              {phone}
            </a>
          ))}
        </div>

        <div className="section__item lang-switch-wrap">
          <div className="lang-switch" role="combobox" aria-label="Выбор языка">
            <div className="lang-switch__item select-wrap">
              <div className="lang-switch__select active">
                <span className="lang-switch__select-title uppercase">ru</span>
                <ChevronDown className="lang-switch__select-icon" size={12} />
              </div>
              <div className="lang-switch__select">
                <span className="lang-switch__select-title uppercase">en</span>
                <ChevronDown className="lang-switch__select-icon" size={12} />
              </div>
              <div className="lang-switch__select">
                <span className="lang-switch__select-title uppercase">de</span>
                <ChevronDown className="lang-switch__select-icon" size={12} />
              </div>
            </div>
          </div>
        </div>

        <div className="section__item burger-icon-wrap">
          <button
            className="burger-icon"
            id="burgerIcon"
            aria-label="Открыть меню"
            aria-expanded="false"
          >
            <span className="burger-icon__container">
              <span className="burger-icon__item" />
              <span className="burger-icon__item" />
              <span className="burger-icon__item" />
            </span>
          </button>
        </div>
      </div>

      <div className="section__item burger-menu-wrap">
        <div
          className="burger-menu"
          id="burgerMenu"
          role="dialog"
          aria-label="Мобильное меню"
        >
          <div className="container">
            <nav>
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="burger-menu__item link"
                >
                  <span className="burger-menu__title uppercase">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer section" role="contentinfo">
      <div className="section__item background-wrap">
        <div
          className="background"
          style={{ backgroundImage: "url(/assets/ui/noise-texture.svg)" }}
        />
      </div>
      <div className="container">
        <div className="section__item logo-wrap">
          <div className="section__subitem logo-wrap">
            <Link
              href="/"
              className="link footer__logo"
              aria-label="PlanoLand — Главная"
            >
              <Image
                src="/assets/ui/logo.svg"
                alt="Logo PlanoLand"
                className="img-responsive footer__logo"
                width={170}
                height={60}
              />
            </Link>
          </div>
        </div>

        <div className="section__item contacts-wrap">
          <div className="section__subitem callback-wrap">
            {PHONES.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="callback-link link font-1-medium"
              >
                {phone}
              </a>
            ))}
          </div>
          <div className="section__subitem email-wrap">
            <a
              href={`mailto:${EMAIL}`}
              className="email-link link font-1-medium"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="section__item social-wrap">
          {SOCIAL.map((social) => (
            <div key={social.name} className="section__subitem">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-sm-wrap social-link link font-1-medium uppercase color-5"
                aria-label={social.name}
              >
                <social.icon className="icon-sm" size={20} />
              </a>
            </div>
          ))}
        </div>

        <div className="section__item addresses-wrap">
          {ADDRESSES.map((address) => (
            <div
              key={address}
              className="section__subitem address-item"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span className="address" itemProp="streetAddress">
                {address}
              </span>
            </div>
          ))}
        </div>

        <div className="section__item rules-wrap">
          {LEGAL.map((item) => (
            <div key={item.name} className="section__subitem">
              <Link href={item.href} className="policy-link link font-1-medium">
                {item.name}
              </Link>
            </div>
          ))}
          <div className="section__subitem copyright-wrap">
            <span className="copyright color-5">
              © 2020-2026. Копирование материалов с сайта разрешено только с
              согласия ООО «PlanoLand»
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function CookiePanel() {
  return (
    <section
      className="cookie-panel"
      id="cookiePanel"
      style={{ display: "none" }}
    >
      <div className="container-narrow">
        <div className="section__item">
          <div className="section__subitem desc-wrap">
            <span className="desc">
              Наш сайт использует файлы cookie для улучшения работы сайта —{" "}
              <Link href="/policy/" className="link link-color-2 font-1-normal">
                подробнее
              </Link>
              .<br />К сайту подключен сервис Яндекс.Метрика, который также
              использует файлы cookie —{" "}
              <Link
                href="/policy-yandex/"
                className="link link-color-2 font-1-normal"
              >
                подробнее
              </Link>
              .
            </span>
          </div>
          <div className="section__subitem button-wrap">
            <button
              className="button button-sm button-outline-color-2 button-animated animation-shift uppercase link nowrap js-cookie"
              id="cookieAccept"
            >
              Принимаю
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Shared contact form block — used on homepage + contacts page. */
export function ContactForm() {
  return (
    <section className="form-container section" aria-labelledby="form-heading">
      <div className="container">
        <div className="section__item empty-wrap" />
        <div className="section__item block-wrap">
          <div className="section__subitem heading-wrap">
            <h2 className="h5 heading heading-flex uppercase" id="form-heading">
              Заказать проектирование{" "}
              <span className="nowrap">Скандинавского сада</span>
            </h2>
          </div>
          <div className="section__subitem form-wrap">
            <form
              className="form-callback"
              action="/api/consultation"
              method="POST"
            >
              <div className="form-callback__container">
                <div className="form-callback__item input-phone">
                  <input
                    type="tel"
                    className="phone required"
                    name="phone"
                    placeholder="+7 ( _ _ _ ) _ _ _ - _ _ - _ _"
                    required
                  />
                </div>
                <div className="form-callback__item input-name">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    className="required"
                    required
                  />
                </div>
                <div className="form-callback__item input-square">
                  <input
                    type="text"
                    name="square"
                    placeholder="Площадь участка"
                    className="required"
                    required
                  />
                </div>
                <div className="form-callback__item input-policy">
                  <label className="form-callback__custom-checkbox">
                    <input
                      type="checkbox"
                      name="policy"
                      className="form-callback__checkbox"
                      required
                    />
                    <span className="form-callback__checkmark" />
                    <span className="form-callback__placeholder uppercase">
                      Принять конфиденциальность
                    </span>
                  </label>
                </div>
                <div className="form-callback__item input-hidden">
                  <input type="hidden" name="current_url" value="" />
                </div>
                <div className="form-callback__item button-wrap">
                  <button
                    className="button button-sm button-outline-color-2 button-animated animation-shift uppercase link wide wide"
                    type="submit"
                  >
                    Получить консультацию
                  </button>
                </div>
                <div className="form-callback__item rules-wrap">
                  <span className="form-callback__rules">
                    Нажимая на кнопку, вы даете согласие на обработку
                    персональных данных.
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="section__subitem buttons-wrap">
            <Link
              href="/assets/catalogs/private-gardens-catalog.pdf"
              className="button button-sm button-outline-color-2 button-animated animation-shift uppercase link button-catalog wide wide"
              download
            >
              <span className="button__subitem icon-wrap animation-icon-up">
                <Image
                  src="/assets/ui/icon-download.svg"
                  alt=""
                  className="button__icon"
                  width={20}
                  height={20}
                />
              </span>
              Каталог частных садов
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Standard page wrapper used by all interior pages.
 * Renders header + children + footer + cookie panel.
 */
export function PageLayout({
  children,
  activePath = "/",
}: {
  children: React.ReactNode;
  activePath?: string;
}) {
  return (
    <>
      <SiteHeader activePath={activePath} />
      <main>{children}</main>
      <SiteFooter />
      <CookiePanel />
    </>
  );
}
