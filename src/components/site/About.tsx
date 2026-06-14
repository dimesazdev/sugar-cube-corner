import { useEffect, useState } from "react";
import { useI18n, type DictKey } from "@/lib/i18n";
import { Cube } from "./Cube";

const features: { color: string; title: DictKey; desc: DictKey }[] = [
  { color: "var(--pink)", title: "feat1", desc: "feat1d" },
  { color: "var(--mint)", title: "feat2", desc: "feat2d" },
  { color: "var(--sky)", title: "feat3", desc: "feat3d" },
];

const galleryImages = [
  { src: "/about-gallery/about-1.jpg?v=2", title: "Raspberry waffle and smoothie" },
  { src: "/about-gallery/about-2.jpg?v=2", title: "Lavazza coffee and waffle" },
  { src: "/about-gallery/about-3.jpg?v=2", title: "Raspberry waffle close up" },
  { src: "/about-gallery/about-4.jpg?v=2", title: "Chocolate banana waffle" },
  { src: "/about-gallery/about-5.jpg?v=2", title: "Coconut wafer waffle" },
  { src: "/about-gallery/about-6.jpg?v=2", title: "Sprinkles over waffle" },
];

export function About() {
  const { t } = useI18n();
  const [activeImage, setActiveImage] = useState(0);
  const galleryImageCount = galleryImages.length;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % galleryImageCount);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [galleryImageCount]);

  return (
    <section id="about" data-reveal className="scroll-reveal section-band section-band-pink">
      <div className="section-inner mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.92fr)] lg:gap-10">
          <div className="lg:col-start-2">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">{t("aboutTitle")}</h2>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border bg-card cube-shadow lg:col-start-1 lg:row-span-2 lg:row-start-1">
            <div className="relative aspect-[3/2]">
              {galleryImages.map((image, index) => (
                <div
                  key={image.title}
                  className={`absolute inset-0 overflow-hidden transition duration-700 ease-out ${
                    activeImage === index
                      ? "translate-x-0 opacity-100"
                      : index < activeImage
                        ? "-translate-x-8 opacity-0"
                        : "translate-x-8 opacity-0"
                  }`}
                  aria-hidden={activeImage !== index}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-2 border-t border-border bg-background/80 px-4 py-3">
              {galleryImages.map((image, index) => (
                <button
                  key={image.title}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`size-2.5 rounded-full transition ${
                    activeImage === index ? "scale-125 bg-foreground" : "bg-foreground/25"
                  }`}
                  aria-label={`${t("galleryImage")} ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="grid gap-4 lg:col-start-2 lg:self-end">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 cube-shadow"
              >
                <div className="grid size-14 shrink-0 place-items-center">
                  <Cube color={f.color} size={56} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-semibold">{t(f.title)}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{t(f.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
