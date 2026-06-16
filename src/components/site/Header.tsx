import { useEffect, useState } from "react";
import { useI18n, type DictKey } from "@/lib/i18n";

const links: { href: string; key: DictKey }[] = [
  { href: "#home", key: "navHome" },
  { href: "#about", key: "navAbout" },
  { href: "#menu", key: "navMenu" },
  { href: "#reviews", key: "navReviews" },
  { href: "#location", key: "navLocation" },
];

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-red-900/10 bg-white/95 shadow-sm backdrop-blur"
          : "border-b border-red-900/10 bg-white/92 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a
          href="#home"
          className="truncate text-[1.62rem] leading-none text-[#9f7715] transition hover:text-[#87620f] sm:text-[1.91rem]"
          style={{ fontFamily: "var(--font-script)" }}
        >
          <span>Sugar Cube Corner</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors"
            >
              {t(l.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label="Language"
            className="flex items-center rounded-full border border-border bg-background p-0.5 text-xs font-semibold"
          >
            {(["mk", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`rounded-full px-2.5 py-1 transition-colors ${
                  lang === l
                    ? "bg-foreground text-background"
                    : "text-foreground/60 hover:text-foreground"
                }`}
                aria-pressed={lang === l}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a
            href="#location"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-ring transition"
          >
            {t("navDirections")}
          </a>
          <button
            className="lg:hidden rounded-full border border-border p-2"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="mx-auto flex max-w-6xl flex-col p-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-secondary"
              >
                {t(l.key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
