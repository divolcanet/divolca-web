import type { Lang } from "../data/translations/LanguageContext";

const navLinkDefs = [
  { to: "/", id: "Beranda", en: "Home" },
  { to: "/riset", id: "Riset", en: "Research" },
  { to: "/tentang-dieng", id: "Tentang Dieng", en: "About Dieng" },
  { to: "/galeri", id: "Galeri", en: "Gallery" },
  { to: "/glosarium", id: "Glosarium", en: "Glossary" },
  { to: "/tentang", id: "Tentang", en: "About" },
];

export function getNavLinks(lang: Lang) {
  return navLinkDefs.map(({ to, id, en }) => ({ to, label: lang === "id" ? id : en }));
}

export const fixedNavbarPages = navLinkDefs.slice(0, 3).map((l) => l.to);
