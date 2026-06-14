import { useI18n, type DictKey } from "@/lib/i18n";
import { CubeBurstLink } from "./CubeBurstLink";

const FACEBOOK_URL = "https://www.facebook.com/p/Sugar-Cube-corner-100045433897710/";
const INSTAGRAM_URL = "https://www.instagram.com/sugar_cube.corner/";
const SAZDEV_URL =
  "https://www.instagram.com/sazdev.creative/?utm_source=ig_web_button_share_sheet";

const quick: { href: string; key: DictKey }[] = [
  { href: "#about", key: "navAbout" },
  { href: "#menu", key: "navMenu" },
  { href: "#reviews", key: "navReviews" },
  { href: "#location", key: "navLocation" },
];

export function Footer() {
  const { t, lang } = useI18n();
  const address = lang === "mk" ? "Петричка 6, Скопје 1000" : "Petrichka 6, Skopje 1000";
  return (
    <footer data-reveal className="scroll-reveal border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/scc-logo-white.png"
              alt=""
              className="h-10 w-10 shrink-0 object-contain"
              aria-hidden="true"
            />
            <span className="font-display text-lg font-bold">Sugar Cube Corner</span>
          </div>
          <p className="mt-3 text-sm text-foreground/70">{t("footerTag")}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t("quickLinks")}</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {quick.map((q) => (
              <li key={q.href}>
                <a href={q.href} className="text-foreground/75 hover:text-foreground">
                  {t(q.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t("contact")}</h3>
          <ul className="mt-3 space-y-2 text-sm text-foreground/75">
            <li>{address}</li>
            <li>+389 75 446 862</li>
            <li>{t("hoursVal")}</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">{t("follow")}</h3>
          <div className="mt-3 flex gap-2">
            <CubeBurstLink
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
            >
              Instagram
            </CubeBurstLink>
            <CubeBurstLink
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
            >
              Facebook
            </CubeBurstLink>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-3 px-4 py-4 text-center text-xs text-foreground/60 sm:grid-cols-3 sm:text-left">
          <p className="sm:justify-self-start">
            © {new Date().getFullYear()} Sugar Cube Corner. {t("rights")}
          </p>
          <div className="flex justify-center gap-1 sm:justify-self-center">
            {[
              "var(--pink)",
              "var(--yellow)",
              "var(--mint)",
              "var(--sky)",
              "var(--lavender)",
              "var(--coral)",
            ].map((c) => (
              <span key={c} className="size-2.5 rounded-sm" style={{ background: c }} />
            ))}
          </div>
          <p className="sm:justify-self-end sm:text-right">
            {t("poweredBy")}{" "}
            <a
              href={SAZDEV_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-foreground underline-offset-4 hover:underline"
            >
              Sazdev Creative
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
