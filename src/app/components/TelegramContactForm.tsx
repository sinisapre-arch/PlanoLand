"use client";

import { type FormEvent, useState } from "react";

/**
 * Telegram contact form — mirrors the one on the portfolio site.
 *
 * Architecture: the browser POSTs JSON to a Cloudflare Worker that we already
 * own (https://mscw-bureau-bot.sinisapre.workers.dev), which forwards the
 * message to the Telegram bot and the configured chat. The bot token and
 * chat ID live inside the Worker — they are never exposed to the browser.
 *
 * Request body the Worker expects:
 *   { name: string, message: string, projectType: string }
 * where `message` is pre-formatted client-side with email + type + body.
 */

const WORKER_URL = "https://mscw-bureau-bot.sinisapre.workers.dev";

const LIMITS = {
  name: { min: 2, max: 100 },
  email: { min: 5, max: 254 },
  message: { min: 10, max: 2000 },
} as const;

const PROJECT_TYPES = [
  { value: "landscape", label: "Ландшафтный дизайн" },
  { value: "3d", label: "3D-визуализация" },
  { value: "drone", label: "Съёмка дроном" },
  { value: "other", label: "Другое" },
];

type Status = "idle" | "sending" | "success" | "error";

export default function TelegramContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [statusText, setStatusText] = useState("");

  const validate = (): string | null => {
    if (
      name.trim().length < LIMITS.name.min ||
      name.trim().length > LIMITS.name.max
    ) {
      return "Пожалуйста, укажите имя (2–100 символов).";
    }
    if (
      email.trim().length < LIMITS.email.min ||
      email.trim().length > LIMITS.email.max
    ) {
      return "Пожалуйста, укажите корректный email (5–254 символа).";
    }
    if (!projectType) {
      return "Выберите тип проекта.";
    }
    if (
      message.trim().length < LIMITS.message.min ||
      message.trim().length > LIMITS.message.max
    ) {
      return "Сообщение слишком короткое или длинное (10–2000 символов).";
    }
    return null;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setStatusText(validationError);
      return;
    }

    setStatus("sending");
    setStatusText("Отправка...");

    // Truncate as a final safety net (mirrors the portfolio site)
    const safeName = name.trim().substring(0, LIMITS.name.max);
    const safeEmail = email.trim().substring(0, LIMITS.email.max);
    const safeMessage = message.trim().substring(0, LIMITS.message.max);

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: safeName,
          message: `📧 ${safeEmail}\n📂 ${projectType}\n\n${safeMessage}`,
          projectType,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setStatusText("Сообщение отправлено! ✓");
        setName("");
        setEmail("");
        setProjectType("");
        setMessage("");
      } else {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.error || "Unknown error");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
      setStatusText("Ошибка отправки. Попробуйте ещё раз.");
    }
  };

  const statusClass =
    status === "success"
      ? "telegram-form__status telegram-form__status--success"
      : status === "error"
        ? "telegram-form__status telegram-form__status--error"
        : "telegram-form__status";

  const disabled = status === "sending";

  return (
    <form className="telegram-form" onSubmit={handleSubmit} noValidate>
      <div className="telegram-form__group">
        <label className="telegram-form__label" htmlFor="tg-name">
          Имя
        </label>
        <input
          id="tg-name"
          type="text"
          className="telegram-form__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше имя"
          required
          minLength={LIMITS.name.min}
          maxLength={LIMITS.name.max}
          autoComplete="name"
        />
      </div>

      <div className="telegram-form__group">
        <label className="telegram-form__label" htmlFor="tg-email">
          Email
        </label>
        <input
          id="tg-email"
          type="email"
          className="telegram-form__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          minLength={LIMITS.email.min}
          maxLength={LIMITS.email.max}
          autoComplete="email"
        />
      </div>

      <div className="telegram-form__group">
        <label className="telegram-form__label" htmlFor="tg-type">
          Тип проекта
        </label>
        <select
          id="tg-type"
          className="telegram-form__select"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          required
        >
          <option value="" disabled>
            Выберите тип проекта…
          </option>
          {PROJECT_TYPES.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
      </div>

      <div className="telegram-form__group">
        <label className="telegram-form__label" htmlFor="tg-message">
          Сообщение
        </label>
        <textarea
          id="tg-message"
          className="telegram-form__textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Расскажите о вашем проекте…"
          required
          minLength={LIMITS.message.min}
          maxLength={LIMITS.message.max}
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="button button-sm button-outline-color-2 button-animated animation-shift uppercase link telegram-form__submit"
        disabled={disabled}
      >
        {disabled ? "Отправка..." : "Отправить"}
      </button>

      <div className={statusClass} aria-live="polite">
        {statusText}
      </div>
    </form>
  );
}
