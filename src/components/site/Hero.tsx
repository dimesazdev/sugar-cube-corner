import { useI18n } from "@/lib/i18n";
import { Cube } from "./Cube";
import { CubeBurstLink } from "./CubeBurstLink";

const HERO_MEDIA: "video" | "gif" | "cubes" = "video";

function HeroCubeFallback() {
  return (
    <>
      <div className="waffle-grid absolute inset-0 opacity-30" />
      <Cube color="var(--pink)" size={120} rotate={-14} className="absolute left-6 top-8" />
      <Cube color="var(--yellow)" size={90} rotate={10} className="absolute right-10 top-6" />
      <Cube color="var(--mint)" size={110} rotate={-6} className="absolute left-20 bottom-10" />
      <Cube color="var(--sky)" size={80} rotate={18} className="absolute right-16 bottom-20" />
      <Cube color="var(--lavender)" size={70} rotate={-20} className="absolute right-32 top-32" />
      <Cube
        color="var(--coral)"
        size={64}
        rotate={6}
        className="absolute left-1/2 top-1/2 -translate-x-1/2"
      />
    </>
  );
}

export function Hero() {
  const { t } = useI18n();
  return (
    <section id="home" data-reveal className="scroll-reveal relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 20%, color-mix(in oklab, var(--pink) 60%, transparent), transparent 70%), radial-gradient(50% 40% at 85% 10%, color-mix(in oklab, var(--yellow) 70%, transparent), transparent 70%), radial-gradient(55% 50% at 90% 80%, color-mix(in oklab, var(--mint) 60%, transparent), transparent 70%), radial-gradient(55% 45% at 10% 90%, color-mix(in oklab, var(--sky) 60%, transparent), transparent 70%), var(--background)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 sm:pt-16 sm:pb-24 lg:grid-cols-2 lg:gap-12">
        <div className="relative z-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 backdrop-blur px-3 py-1 text-xs font-semibold uppercase tracking-wider text-foreground/70">
            <span className="inline-block size-2 rounded-sm bg-primary" />
            {t("heroEyebrow")}
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {t("heroTitle")}
          </h1>
          <p className="mt-5 max-w-xl text-base text-foreground/75 sm:text-lg">{t("heroSub")}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CubeBurstLink
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring transition"
            >
              {t("ctaMenu")}
            </CubeBurstLink>
            <CubeBurstLink
              href="#location"
              className="inline-flex items-center justify-center rounded-full border-2 border-foreground bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition"
            >
              {t("ctaDirections")}
            </CubeBurstLink>
          </div>
        </div>

        <div
          aria-label={HERO_MEDIA === "cubes" ? "Rainbow sugar cubes" : "Animated waffle"}
          className="relative h-[340px] w-full overflow-hidden rounded-3xl border border-dashed border-foreground/15 bg-white/40 backdrop-blur-sm cube-shadow sm:h-[420px]"
        >
          {HERO_MEDIA === "video" ? (
            <video
              src="/waffle.mov"
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Animated waffle"
            />
          ) : HERO_MEDIA === "gif" ? (
            <img
              src="/waffle-gif-test.gif"
              alt="Animated waffle"
              className="h-full w-full object-cover"
            />
          ) : (
            <HeroCubeFallback />
          )}
        </div>
      </div>
    </section>
  );
}
