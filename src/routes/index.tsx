import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Menu } from "@/components/site/Menu";
import { Reviews } from "@/components/site/Reviews";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";
import { ScrollReveal } from "@/components/site/ScrollReveal";

const TITLE = "Sugar Cube Corner — Кафе и вафли во Скопје";
const DESC =
  "Sugar Cube Corner е пријателски агол за кафе, вафли и слатки моменти, на чекор од главната железничка станица во Скопје.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "Sugar Cube Corner",
  description: DESC,
  servesCuisine: ["Coffee", "Waffles", "Desserts"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Petrichka 6",
    postalCode: "1000",
    addressLocality: "Skopje",
    addressCountry: "MK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.9921461,
    longitude: 21.4457576,
  },
  telephone: "+389 75 446 862",
  areaServed: "Skopje",
  openingHours: ["Mo-Sa 09:00-23:00"],
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/p/Sugar-Cube-corner-100045433897710/",
    "https://www.instagram.com/sugar_cube.corner/",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen">
        <ScrollReveal />
        <Header />
        <main>
          <Hero />
          <About />
          <Menu />
          {/* Specials section is kept in src/components/site/Specials.tsx for easy restore. */}
          <Reviews />
          <Location />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
