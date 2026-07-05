export const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/riset", label: "Riset" },
  { to: "/tentang-dieng", label: "Tentang Dieng" },
  { to: "/tentang-tim", label: "Tentang Tim" },
  { to: "/galeri", label: "Galeri" },
  { to: "/faq", label: "FAQ" },
  { to: "/glosarium", label: "Glosarium" },
];

export const fixedNavbarPages = navLinks.slice(0, 3).map((l) => l.to);
