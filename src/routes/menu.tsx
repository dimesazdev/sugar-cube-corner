import { createFileRoute } from "@tanstack/react-router";
import { Home } from "lucide-react";
import { Menu } from "@/components/site/Menu";
import { I18nProvider, useI18n } from "@/lib/i18n";

const TITLE = "Sugar Cube Corner Menu — Мени";
const DESC =
  "QR мени за Sugar Cube Corner во Скопје: кафе, ладни пијалаци, вафли, палачинки и додатоци.";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/menu" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuRoute,
});

function MenuRoute() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background">
        <MenuOnlyHeader />
        <main>
          <Menu variant="standalone" />
        </main>
      </div>
    </I18nProvider>
  );
}

function MenuOnlyHeader() {
  const { lang, setLang } = useI18n();
  const homeLabel = lang === "mk" ? "Почетна" : "Home";

  return (
    <header className="sticky top-0 z-40 border-b border-red-900/15 bg-pink/55 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a
          href="/"
          className="flex min-w-0 items-center gap-2 font-display text-base font-bold sm:text-lg"
          aria-label="Sugar Cube Corner home"
        >
          <img
            src="/scc-logo-white.png"
            alt=""
            className="h-10 w-10 shrink-0 object-contain"
            aria-hidden="true"
          />
          <span className="truncate">Sugar Cube Corner</span>
        </a>

        <div className="flex shrink-0 items-center gap-2">
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
            href="/"
            aria-label={homeLabel}
            title={homeLabel}
            className="inline-flex size-9 items-center justify-center rounded-full border border-red-900/15 bg-background/80 text-foreground shadow-sm transition hover:bg-background sm:size-10"
          >
            <Home className="size-4 sm:size-4.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}
