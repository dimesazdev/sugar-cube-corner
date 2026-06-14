import { useI18n, type Lang } from "@/lib/i18n";

type Special = {
  name: { mk: string; en: string };
  desc: { mk: string; en: string };
  colors: [string, string];
  emoji: string;
};

const specials: Special[] = [
  {
    name: { mk: "Bubble вафла", en: "Bubble waffle" },
    desc: { mk: "Со топинзи по избор", en: "With your favorite toppings" },
    colors: ["var(--pink)", "var(--yellow)"],
    emoji: "🧇",
  },
  {
    name: { mk: "Чоколадна вафла", en: "Chocolate waffle" },
    desc: { mk: "Растопено чоколадо и посипки", en: "Melted chocolate & sprinkles" },
    colors: ["var(--coral)", "var(--lavender)"],
    emoji: "🍫",
  },
  {
    name: { mk: "Вафла со јагоди", en: "Strawberry waffle" },
    desc: { mk: "Свежи јагоди и крем", en: "Fresh strawberries & cream" },
    colors: ["var(--pink)", "var(--mint)"],
    emoji: "🍓",
  },
  {
    name: { mk: "Ладна кафа", en: "Iced coffee" },
    desc: { mk: "Освежително, секој ден", en: "Refreshing, any day" },
    colors: ["var(--sky)", "var(--lavender)"],
    emoji: "🧊",
  },
  {
    name: { mk: "Колоритен пијалак", en: "Signature colorful drink" },
    desc: { mk: "Потпис на куќата", en: "Our signature" },
    colors: ["var(--yellow)", "var(--sky)"],
    emoji: "🥤",
  },
  {
    name: { mk: "Sugar Cube специјал", en: "Sugar Cube special" },
    desc: { mk: "Изненадување од шефот", en: "Chef's surprise" },
    colors: ["var(--lavender)", "var(--coral)"],
    emoji: "✨",
  },
];

export function Specials() {
  const { t, lang } = useI18n();
  const L = (v: { mk: string; en: string }, l: Lang) => v[l];
  return (
    <section id="specials" data-reveal className="scroll-reveal relative">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, transparent, color-mix(in oklab, var(--mint) 30%, transparent), transparent)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{t("specialsTitle")}</h2>
          <p className="mt-2 text-foreground/70">{t("specialsSub")}</p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specials.map((s) => (
            <article
              key={s.name.en}
              className="overflow-hidden rounded-3xl border border-border bg-card cube-shadow transition hover:-translate-y-1"
            >
              <div
                className="relative flex h-44 items-center justify-center text-6xl"
                style={{
                  background: `linear-gradient(135deg, ${s.colors[0]}, ${s.colors[1]})`,
                }}
                aria-hidden
              >
                <span className="drop-shadow-sm">{s.emoji}</span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{L(s.name, lang)}</h3>
                <p className="mt-1 text-sm text-foreground/70">{L(s.desc, lang)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
