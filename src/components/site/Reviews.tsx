import { useI18n, type Lang } from "@/lib/i18n";
import { ExternalLink } from "lucide-react";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Sugar+Cube+corner/@41.9921461,21.4457576,17z/data=!3m1!4b1!4m6!3m5!1s0x1354157d6db38ad1:0x1413a8790f4003c3!8m2!3d41.9921461!4d21.4457576!16s%2Fg%2F11j6b_3jt6";

type Review = {
  author: string;
  meta: { mk: string; en: string };
  when: { mk: string; en: string };
  text: { mk: string; en: string };
};

const reviews: Review[] = [
  {
    author: "Natina Harris",
    meta: {
      mk: "Локален водич · 342 рецензии · 2572 фотографии",
      en: "Local Guide · 342 reviews · 2572 photos",
    },
    when: { mk: "пред 7 месеци", en: "7 months ago" },
    text: {
      mk: "Уживав во прекрасно лате во ова прекрасно кафуле, @sugar_cube.corner. Ги поддржувам локалните мали бизниси и сметам дека тоа е важно преку пишување рецензии и купување од нив. Ги сакам и амбициозните борци во секоја економија. Можеби е предизвик, но успевате со вера, сила, храброст и мудрост. Горда сум на тебе, Ема!",
      en: "I enjoyed a delicious latte at this wonderful coffee shop, @sugar_cube.corner. I support local small business owners. I feel it's important to do so by writing reviews and buying there. I also love ambitious warriors in any economy. It may be challenging but you manage with faith, strength, courage and wisdom. I am proud of you, Emma!",
    },
  },
  {
    author: "Shirley Le",
    meta: {
      mk: "Локален водич · 60 рецензии · 111 фотографии",
      en: "Local Guide · 60 reviews · 111 photos",
    },
    when: { mk: "пред една година", en: "a year ago" },
    text: {
      mk: "Прекрасно место веднаш спроти главната автобуска станица! Совршено за релаксација со вкусно кафе и палачинка. Сопственичката е навистина шармантна дама. Топло препорачувам! Навистина е sugar cube, баш како што кажува името!",
      en: "A delightful spot just across from the main bus station! Perfect for relaxing with a delicious coffee and pancake. The owner is a wonderfully charming lady. Highly recommended! It's truly a sugar cube, just like the name suggests!",
    },
  },
  {
    author: "Rhyannon Jones",
    meta: { mk: "5 рецензии", en: "5 reviews" },
    when: { mk: "пред една година", en: "a year ago" },
    text: {
      mk: "Бевме група од 6 луѓе од Велс и застанавме на пијалаци, палачинки и вафли. Сопственичката беше прекрасна и цело време разговараше со нас, а храната беше вкусна! Ако сте во близина, би препорачала да застанете дури и само на кафе! Ако повторно дојдеме во Скопје, дефинитивно ќе се вратиме!",
      en: "We were a group of 6 people over from Wales, we stopped in for some drinks, pancakes and waffles. The owner was lovely and talked to us the whole time, the food was delicious! If you are near I would recommend stopping even just for a coffee! If we were to come back to Skopje we would definitely visit again!",
    },
  },
  {
    author: "Natasha Chukovska",
    meta: { mk: "6 рецензии", en: "6 reviews" },
    when: { mk: "пред една година", en: "a year ago" },
    text: {
      mk: "Ова место е прекрасно. Тука можете да пиете обично кафе, ладно кафе, најдобри вафли и уште многу повеќе. Топло препорачувам.",
      en: "This place is amazing. Here you can have regular coffee, iced coffee, the best waffles and so much more. Highly recommend.",
    },
  },
];

const summary = { rating: 4.6, count: 30 };

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.max(0, Math.min(1, rating - i));
        const clipId = `star-fill-${rating}-${i}`.replace(".", "-");

        return (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24">
            <defs>
              <clipPath id={clipId}>
                <rect width={24 * fill} height="24" />
              </clipPath>
            </defs>
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
              fill="transparent"
              stroke="var(--yellow)"
              strokeWidth="1.5"
            />
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
              clipPath={`url(#${clipId})`}
              fill="var(--yellow)"
            />
          </svg>
        );
      })}
    </div>
  );
}

export function Reviews() {
  const { t, lang } = useI18n();
  const L = (v: { mk: string; en: string }, l: Lang) => v[l];
  return (
    <section id="reviews" data-reveal className="scroll-reveal section-band section-band-mint">
      <div className="section-inner mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{t("reviewsTitle")}</h2>
            <p className="mt-2 text-foreground/70">{t("reviewsSub")}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card px-5 py-3 cube-shadow">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl font-bold">{summary.rating.toFixed(1)}</span>
              <Stars rating={summary.rating} />
            </div>
            <p className="mt-1 text-xs text-foreground/60">
              {summary.count}+ {lang === "mk" ? "рецензии" : "reviews"}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {reviews.map((r, i) => (
            <article key={i} className="rounded-2xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="grid size-9 place-items-center rounded-full text-sm font-bold text-foreground"
                    style={{
                      background: ["var(--pink)", "var(--mint)", "var(--sky)", "var(--yellow)"][
                        i % 4
                      ],
                    }}
                    aria-hidden
                  >
                    {r.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{r.author}</p>
                    <p className="mt-0.5 text-xs text-foreground/55">{L(r.meta, lang)}</p>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-foreground/45">
                <Stars rating={5} />
                <span aria-hidden>·</span>
                <span>{L(r.when, lang)}</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-foreground/75">"{L(r.text, lang)}"</p>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-red-800/35 bg-secondary px-4 py-2.5 text-sm font-semibold text-red-900 transition hover:border-red-800 hover:bg-background focus:outline-none focus:ring-2 focus:ring-ring sm:px-5"
          >
            {t("googleMapsListing")}
            <ExternalLink className="size-5 shrink-0" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
