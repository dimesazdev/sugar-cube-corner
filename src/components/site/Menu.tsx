import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Coffee,
  CupSoda,
  Grid3X3,
  IceCreamBowl,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { useI18n, type Lang } from "@/lib/i18n";
import { CubeBurstButton } from "./CubeBurstLink";

type Item = { name: { mk: string; en: string }; desc: { mk: string; en: string }; price: string };
type Category = {
  id: string;
  label: { mk: string; en: string };
  color: string;
  icon: LucideIcon;
  items: Item[];
};

const categories: Category[] = [
  {
    id: "coffee",
    label: { mk: "Кафе", en: "Coffee" },
    color: "var(--coral)",
    icon: Coffee,
    items: [
      {
        name: { mk: "Еспресо", en: "Espresso" },
        desc: { mk: "1 доза еспресо.", en: "1 shot of espresso." },
        price: "60 ден",
      },
      {
        name: { mk: "Капучино", en: "Cappuccino" },
        desc: {
          mk: "Еспресо, топло млеко и млечна пена.",
          en: "Espresso, steamed milk, and milk foam.",
        },
        price: "90 ден",
      },
      {
        name: { mk: "Лате", en: "Latte" },
        desc: { mk: "Еспресо и топло млеко.", en: "Espresso and steamed milk." },
        price: "110 ден",
      },
    ],
  },
  {
    id: "cold",
    label: { mk: "Ладни пијалаци", en: "Cold drinks" },
    color: "var(--sky)",
    icon: CupSoda,
    items: [
      {
        name: { mk: "Coca-Cola", en: "Coca-Cola" },
        desc: { mk: "", en: "" },
        price: "100 ден",
      },
      {
        name: { mk: "Fanta", en: "Fanta" },
        desc: { mk: "", en: "" },
        price: "100 ден",
      },
      {
        name: { mk: "Негазирана вода", en: "Still water" },
        desc: { mk: "", en: "" },
        price: "80 ден",
      },
      {
        name: { mk: "Газирана вода", en: "Sparkling water" },
        desc: { mk: "", en: "" },
        price: "80 ден",
      },
    ],
  },
  {
    id: "waffles",
    label: { mk: "Вафли", en: "Waffles" },
    color: "var(--yellow)",
    icon: Grid3X3,
    items: [
      {
        name: { mk: "Шарена вафла", en: "Colorful waffle" },
        desc: {
          mk: "Нутела, банана, бело чоколадо, црно чоколадо, лешници, ореви, бадеми, плазма, M&M, мрвици, киндер.",
          en: "Nutella, banana, white chocolate, dark chocolate, hazelnuts, walnuts, almonds, Plazma, M&M, sprinkles, Kinder.",
        },
        price: "250 ден.",
      },
      {
        name: { mk: "Бела вафла", en: "White waffle" },
        desc: {
          mk: "Бел крем, кокос, малини, мрвици, рафаело, плазма.",
          en: "White cream, coconut, raspberries, sprinkles, Raffaello, Plazma.",
        },
        price: "250 ден.",
      },
      {
        name: { mk: "Вафла со мед и ореви", en: "Honey and walnut waffle" },
        desc: { mk: "Мед и ореви.", en: "Honey and walnuts." },
        price: "250 ден.",
      },
      {
        name: { mk: "Солена вафла", en: "Savory waffle" },
        desc: {
          mk: "Павлака, маслинки, млечен кашкавал, кулен / пилешка салама.",
          en: "Sour cream, olives, cheese, kulen / chicken salami.",
        },
        price: "250 ден.",
      },
      {
        name: { mk: "Chocodrops вафла", en: "Chocodrops waffle" },
        desc: {
          mk: "Нутела, бело чоколадо, црно чоколадо, плазма, бадеми, лешници, ореви, popsicle.",
          en: "Nutella, white chocolate, dark chocolate, Plazma, almonds, hazelnuts, walnuts, popsicle.",
        },
        price: "250 ден.",
      },
      {
        name: { mk: "Paradise вафла", en: "Paradise waffle" },
        desc: {
          mk: "Нутела, сезонско овошје, бело чоколадо, црно чоколадо, мрвици, плазма, бадеми, лешници, ореви.",
          en: "Nutella, seasonal fruit, white chocolate, dark chocolate, sprinkles, Plazma, almonds, hazelnuts, walnuts.",
        },
        price: "250 ден.",
      },
    ],
  },
  {
    id: "pancakes",
    label: { mk: "Палачинки", en: "Pancakes" },
    color: "var(--pink)",
    icon: Layers,
    items: [
      {
        name: { mk: "Нутела", en: "Nutella" },
        desc: { mk: "Нутела, бисквити, шлаг.", en: "Nutella, biscuits, whipped cream." },
        price: "150 ден",
      },
      {
        name: { mk: "Мед и ореви", en: "Honey and walnuts" },
        desc: { mk: "Мед и ореви.", en: "Honey and walnuts." },
        price: "140 ден",
      },
    ],
  },
  // Stored for later restore:
  // {
  //   id: "desserts",
  //   label: { mk: "Десерти", en: "Desserts" },
  //   color: "var(--lavender)",
  //   items: [
  //     {
  //       name: { mk: "Sugar Cube специјал", en: "Sugar Cube special" },
  //       desc: { mk: "Тајна на куќата", en: "House secret" },
  //       price: "230 ден",
  //     },
  //     {
  //       name: { mk: "Чизкејк", en: "Cheesecake" },
  //       desc: { mk: "Со шумски плодови", en: "With berries" },
  //       price: "180 ден",
  //     },
  //   ],
  // },
  {
    id: "extras",
    label: { mk: "Додатоци", en: "Extras" },
    color: "var(--mint)",
    icon: IceCreamBowl,
    items: [
      {
        name: { mk: "Топинзи", en: "Toppings" },
        desc: { mk: "Сирупи, овошје, посипки", en: "Syrups, fruit, sprinkles" },
        price: "30 ден",
      },
      {
        name: { mk: "Сладолед", en: "Ice cream" },
        desc: { mk: "Една топка.", en: "One scoop." },
        price: "60 ден",
      },
    ],
  },
];

type MenuProps = {
  variant?: "section" | "standalone";
};

export function Menu({ variant = "section" }: MenuProps) {
  const { t, lang } = useI18n();
  const [active, setActive] = useState(categories[0].id);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState(false);
  const [burstingCategory, setBurstingCategory] = useState<string | null>(null);
  const burstTimer = useRef<number | null>(null);
  const current = categories.find((c) => c.id === active)!;
  const L = (v: { mk: string; en: string }, l: Lang) => v[l];
  const isStandalone = variant === "standalone";

  useEffect(() => {
    return () => {
      if (burstTimer.current) window.clearTimeout(burstTimer.current);
    };
  }, []);

  const handleCategoryClick = (id: string) => {
    setActive(id);
    if (burstTimer.current) window.clearTimeout(burstTimer.current);
    setBurstingCategory(null);
    window.requestAnimationFrame(() => setBurstingCategory(id));
    burstTimer.current = window.setTimeout(() => setBurstingCategory(null), 820);
  };

  const openMobileCategory = (id: string) => {
    handleCategoryClick(id);
    setMobileCategoryOpen(true);
  };

  return (
    <section
      id="menu"
      data-reveal={isStandalone ? undefined : true}
      className={
        isStandalone
          ? "section-band section-band-cream"
          : "scroll-reveal section-band section-band-cream"
      }
    >
      <div
        className={`section-inner mx-auto max-w-6xl px-4 ${
          isStandalone ? "py-8 sm:py-10" : "py-16 sm:py-24"
        }`}
      >
        <div id="qr-menu" className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{t("menuTitle")}</h2>
            <p className="mt-2 max-w-2xl text-foreground/70">{t("menuSub")}</p>
          </div>
        </div>

        <div
          className={`${
            mobileCategoryOpen ? "hidden" : "mt-8 grid animate-in fade-in slide-in-from-left-3"
          } gap-2 duration-300 sm:hidden`}
        >
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => openMobileCategory(c.id)}
                className="group relative isolate min-h-28 overflow-hidden rounded-[1.35rem] px-6 py-5 text-left shadow-sm transition duration-300 hover:-translate-y-0.5 active:scale-[0.99]"
                style={{ backgroundColor: c.color }}
              >
                <span className="absolute inset-0 -z-10 bg-gradient-to-br from-white/22 via-white/6 to-transparent" />
                <span className="absolute -right-8 -top-10 size-28 rounded-full bg-white/18 blur-sm transition group-active:scale-110" />
                <span className="flex h-full items-center justify-between gap-4">
                  <Icon className="size-12 shrink-0 text-white drop-shadow-sm" strokeWidth={1.9} />
                  <span className="min-w-0 flex-1 text-center text-sm font-black uppercase tracking-[0.32em] text-white drop-shadow-sm">
                    {L(c.label, lang)}
                  </span>
                  <ChevronRight
                    className="size-7 shrink-0 text-white drop-shadow-sm transition group-active:translate-x-1"
                    strokeWidth={2.5}
                  />
                </span>
              </button>
            );
          })}
        </div>

        <div
          className={`${
            mobileCategoryOpen ? "mt-6 block animate-in fade-in slide-in-from-right-3" : "hidden"
          } duration-300 sm:hidden`}
        >
          <div
            className="sticky top-[73px] z-20 -mx-4 flex items-center gap-3 border-y border-white/35 px-4 py-3 shadow-sm backdrop-blur"
            style={{ backgroundColor: current.color }}
          >
            <button
              type="button"
              onClick={() => setMobileCategoryOpen(false)}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/45 bg-white/82 px-3 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:-translate-x-0.5 hover:bg-white"
            >
              <ArrowLeft className="size-4" />
              {lang === "mk" ? "Назад" : "Back"}
            </button>
            <h3 className="min-w-0 truncate font-display text-xl font-bold text-white drop-shadow-sm">
              {L(current.label, lang)}
            </h3>
          </div>

          <div className="mt-5 grid gap-4">
            {current.items.map((it) => (
              <article
                key={it.name.en}
                className="rounded-2xl border border-border bg-card p-5 cube-shadow transition"
              >
                <div
                  className="mb-3 h-1.5 w-10 rounded-full"
                  style={{ background: current.color }}
                  aria-hidden
                />
                <div className="flex items-baseline justify-between gap-3">
                  <h4 className="font-display text-lg font-semibold">{L(it.name, lang)}</h4>
                  <span className="shrink-0 text-sm font-bold text-foreground/80">{it.price}</span>
                </div>
                {L(it.desc, lang) ? (
                  <p className="mt-1 text-sm text-foreground/65">{L(it.desc, lang)}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-2 ${
            isStandalone
              ? "hidden sticky top-[73px] z-20 -mx-4 border-y border-border/70 bg-background/88 px-4 py-3 backdrop-blur sm:flex"
              : "hidden sm:flex"
          }`}
        >
          {categories.map((c) => (
            <CubeBurstButton
              key={c.id}
              onClick={() => handleCategoryClick(c.id)}
              className={`cube-burst-click rounded-full border px-4 py-2 text-sm font-semibold transition ${
                active === c.id
                  ? "border-foreground/20 text-foreground"
                  : "border-border bg-background hover:bg-secondary"
              } ${burstingCategory === c.id ? "is-bursting" : ""}`}
              style={
                active === c.id
                  ? { backgroundColor: c.color }
                  : { boxShadow: `inset 0 -3px 0 ${c.color}` }
              }
            >
              {L(c.label, lang)}
            </CubeBurstButton>
          ))}
        </div>

        <div
          className={`mt-6 gap-4 sm:grid-cols-2 lg:grid-cols-3 ${
            isStandalone ? "hidden sm:grid" : "hidden sm:grid"
          }`}
        >
          {current.items.map((it) => (
            <article
              key={it.name.en}
              className="group rounded-2xl border border-border bg-card p-5 cube-shadow transition hover:-translate-y-0.5"
            >
              <div
                className="mb-3 h-1.5 w-10 rounded-full"
                style={{ background: current.color }}
                aria-hidden
              />
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{L(it.name, lang)}</h3>
                <span className="shrink-0 text-sm font-bold text-foreground/80">{it.price}</span>
              </div>
              {L(it.desc, lang) ? (
                <p className="mt-1 text-sm text-foreground/65">{L(it.desc, lang)}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
