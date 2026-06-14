import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "mk" | "en";

type Dict = Record<string, { mk: string; en: string }>;

export const dict = {
  navHome: { mk: "Почетна", en: "Home" },
  navAbout: { mk: "За нас", en: "About" },
  navMenu: { mk: "Мени", en: "Menu" },
  navSpecials: { mk: "Специјалитети", en: "Specialties" },
  navReviews: { mk: "Рецензии", en: "Reviews" },
  navLocation: { mk: "Локација", en: "Location" },
  navDirections: { mk: "Насоки", en: "Directions" },

  brand: { mk: "Sugar Cube Corner", en: "Sugar Cube Corner" },
  heroEyebrow: { mk: "Твојот сладок агол во Скопје", en: "Your sweet corner in Skopje" },
  heroTitle: {
    mk: "Слатки моменти секој ден - во срцето на Скопје.",
    en: "Sweet moments every day - in the heart of Skopje.",
  },
  heroSub: {
    mk: "Свежи домашни вафли, кафе какво ти душа сака и инспиративна атмосфера, во која се вљубуваш на прв поглед.",
    en: "Fresh homemade waffles, coffee just the way you love it, and an inspiring atmosphere you’ll fall in love with at first sight.",
  },
  ctaMenu: { mk: "Види мени", en: "See menu" },
  ctaDirections: { mk: "Каде се наоѓаме", en: "Where to find us" },

  aboutTitle: { mk: "За Sugar Cube Corner", en: "About Sugar Cube Corner" },
  aboutBody: {
    mk: "Се наоѓаме на чекор од главната железничка станица во Скопје. Совршено место за туристи, патници, студенти и локалци — навратете на свежо кафе, врели вафли или само мала слатка пауза.",
    en: "We sit just steps from Skopje's main train station. A perfect stop for tourists, commuters, students and locals — drop in for fresh coffee, hot waffles, or just a small sweet break.",
  },
  feat1: { mk: "Во центарот на градот", en: "Near the train station" },
  feat1d: {
    mk: "Лесно достапни за брза пауза, сладок момент или кафе пред патување.",
    en: "Easy walk in just a few minutes.",
  },
  feat2: { mk: "Свежи домашни вафли", en: "Fresh coffee & waffles" },
  feat2d: {
    mk: "Подготвени со внимание, љубов и создадени за вистинско уживање.",
    en: "Made with care, every day.",
  },
  feat3: { mk: "Совршено за секоја возраст", en: "Great for tourists and locals" },
  feat3d: {
    mk: "Пријатен амбиент во кој секој се чувствува добредојден.",
    en: "Warm, welcoming vibe for everyone.",
  },
  galleryImage: { mk: "Слика", en: "Image" },

  menuTitle: { mk: "Мени", en: "Menu" },
  menuSub: {
    mk: "Краток преглед на нашата понуда.",
    en: "A short preview of what we serve.",
  },

  specialsTitle: { mk: "Наши специјалитети", en: "House specialties" },
  specialsSub: {
    mk: "Јадења по кои гостите најчесто нè паметат.",
    en: "Our most-loved must-try picks.",
  },

  reviewsTitle: { mk: "Што велат нашите гости", en: "What our guests say" },
  reviewsSub: { mk: "Рецензии од Google Maps", en: "Reviews from Google Maps" },
  googleMapsListing: { mk: "Прочитај повеќе на Google Maps", en: "Read more on Google Maps" },

  locationTitle: { mk: "Локација и контакт", en: "Location & contact" },
  locationSub: {
    mk: "Нашата локација е лесно достапна - ве очекуваме!",
    en: "On Petrichka in Skopje, close to the bus and railway station.",
  },
  address: { mk: "Адреса", en: "Address" },
  phone: { mk: "Телефон", en: "Phone" },
  hours: { mk: "Работно време", en: "Hours" },
  hoursVal: { mk: "Пон – Саб: 09:00 – 23:00", en: "Mon – Sat: 9:00 AM – 11:00 PM" },
  hoursSunday: { mk: "Недела: затворено", en: "Sunday: closed" },
  call: { mk: "Јави се", en: "Call" },
  message: { mk: "Прати порака", en: "Message us" },

  footerTag: {
    mk: "Слатки моменти секој ден - во срцето на Скопје.",
    en: "Sweet moments every day - in the heart of Skopje.",
  },
  quickLinks: { mk: "Брзи линкови", en: "Quick links" },
  contact: { mk: "Контакт", en: "Contact" },
  follow: { mk: "Следи нé", en: "Follow us" },
  rights: { mk: "Сите права задржани.", en: "All rights reserved." },
  poweredBy: { mk: "Изработено од", en: "Powered by" },
} satisfies Dict;

export type DictKey = keyof typeof dict;

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: DictKey) => string }>({
  lang: "mk",
  setLang: () => {},
  t: (k) => dict[k].mk,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("mk");
  useEffect(() => {
    const stored =
      typeof window !== "undefined" ? (localStorage.getItem("scc-lang") as Lang | null) : null;
    if (stored === "mk" || stored === "en") setLang(stored);
  }, []);
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      localStorage.setItem("scc-lang", lang);
    }
  }, [lang]);
  const t = (k: DictKey) => dict[k][lang];
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
