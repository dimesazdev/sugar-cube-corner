import { useI18n } from "@/lib/i18n";
import { CubeBurstLink } from "./CubeBurstLink";

const GOOGLE_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Sugar%20Cube%20corner%2C%20Petrichka%206%2C%20Skopje%201000";

export function Location() {
  const { t, lang } = useI18n();
  const address = lang === "mk" ? "Петричка 6, Скопје 1000" : "Petrichka 6, Skopje 1000";
  return (
    <section id="location" data-reveal className="scroll-reveal section-band section-band-sky">
      <div className="section-inner mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{t("locationTitle")}</h2>
          <p className="mt-2 text-foreground/70">{t("locationSub")}</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-5 cube-shadow">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                {t("address")}
              </p>
              <p className="mt-1 font-medium">{address}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 cube-shadow">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                {t("phone")}
              </p>
              <p className="mt-1 font-medium">
                <a href="tel:+38975446862" className="hover:underline">
                  +389 75 446 862
                </a>
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5 cube-shadow">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60">
                {t("hours")}
              </p>
              <p className="mt-1 font-medium">{t("hoursVal")}</p>
              <p className="mt-1 text-sm text-foreground/60">{t("hoursSunday")}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              <CubeBurstLink
                href={GOOGLE_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background hover:opacity-90 transition"
              >
                {t("navDirections")}
              </CubeBurstLink>
              <CubeBurstLink
                href="tel:+38975446862"
                className="inline-flex items-center justify-center rounded-full border-2 border-foreground bg-background px-4 py-2 text-sm font-semibold hover:bg-secondary transition"
              >
                {t("call")}
              </CubeBurstLink>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card cube-shadow lg:col-span-3">
            <div className="aspect-[16/10] w-full">
              <iframe
                title="Sugar Cube Corner map"
                src="https://www.google.com/maps?q=41.9921461,21.4457576%20Sugar%20Cube%20corner&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
