"use client";

import { useEffect } from "react";

/**
 * Client-only interactivity for the site.
 *
 * IMPORTANT: everything here runs inside useEffect, which fires ONLY after
 * React has finished hydrating the server-rendered HTML. This guarantees the
 * DOM mutations below never cause a hydration mismatch (the original bug).
 */
export default function ClientScripts() {
  useEffect(() => {
    // ---- Scroll progress bar ----
    let progressBar = document.getElementById(
      "scroll-progress",
    ) as HTMLDivElement | null;
    if (!progressBar) {
      progressBar = document.createElement("div");
      progressBar.id = "scroll-progress";
      progressBar.className = "scroll-progress";
      document.body.appendChild(progressBar);
    }
    const updateProgress = () => {
      const el = document.getElementById("scroll-progress");
      if (!el) return;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? window.scrollY / docHeight : 0;
      el.style.transform = `scaleX(${pct})`;
    };

    // ---- Sticky header (matches L.BURO: compacts once you scroll past 40px) ----
    const header = document.querySelector(".js-header") as HTMLElement | null;
    const updateHeader = () => {
      if (!header) return;
      // Throttle via rAF so the class toggle stays smooth on fast scroll
      if (header.dataset.ticking === "1") return;
      header.dataset.ticking = "1";
      requestAnimationFrame(() => {
        if (window.scrollY > 40) header.classList.add("fixed");
        else header.classList.remove("fixed");
        header.dataset.ticking = "0";
      });
    };

    // ---- Burger menu (mobile) ----
    const btn = document.getElementById(
      "burgerIcon",
    ) as HTMLButtonElement | null;
    const menu = document.getElementById("burgerMenu") as HTMLElement | null;
    const setBurger = (open: boolean) => {
      if (!btn || !menu) return;
      btn.setAttribute("aria-expanded", String(open));
      btn.classList.toggle("is-open", open);
      menu.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    };
    const onBurgerClick = () => {
      if (!btn) return;
      const next = btn.getAttribute("aria-expanded") !== "true";
      setBurger(next);
    };
    const onBurgerLinkClick = () => setBurger(false);
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setBurger(false);
    };
    btn?.addEventListener("click", onBurgerClick);
    menu
      ?.querySelectorAll("a")
      .forEach((a) => a.addEventListener("click", onBurgerLinkClick));
    document.addEventListener("keydown", onKeydown);

    // ---- Cookie consent ----
    const cookiePanel = document.getElementById(
      "cookiePanel",
    ) as HTMLElement | null;
    const cookieAccept = document.getElementById(
      "cookieAccept",
    ) as HTMLButtonElement | null;
    let alreadyAccepted = false;
    try {
      alreadyAccepted = !!localStorage.getItem("pl-cookie-accepted");
    } catch {
      alreadyAccepted = false;
    }
    if (cookiePanel && !alreadyAccepted) {
      cookiePanel.style.display = "block";
    }
    const onCookieAccept = () => {
      if (cookiePanel) cookiePanel.style.display = "none";
      try {
        localStorage.setItem("pl-cookie-accepted", "1");
      } catch {
        /* ignore */
      }
    };
    cookieAccept?.addEventListener("click", onCookieAccept);

    // ---- Wire scroll listeners ----
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateProgress);

    // Initial state
    updateProgress();
    updateHeader();

    // ---- Cleanup ----
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateProgress);
      btn?.removeEventListener("click", onBurgerClick);
      menu
        ?.querySelectorAll("a")
        .forEach((a) => a.removeEventListener("click", onBurgerLinkClick));
      document.removeEventListener("keydown", onKeydown);
      cookieAccept?.removeEventListener("click", onCookieAccept);
    };
  }, []);

  return null;
}
