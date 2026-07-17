export const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/riset", label: "Riset" },
  { to: "/tentang-dieng", label: "Tentang Dieng" },
  { to: "/galeri", label: "Galeri" },
  { to: "/glosarium", label: "Glosarium" },
  { to: "/tentang", label: "Tentang" },
];

export const fixedNavbarPages = navLinks.slice(0, 3).map((l) => l.to);
