import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/riset", label: "Riset" },
  { to: "/tentang-dieng", label: "Tentang Dieng" },
  { to: "/tentang-tim", label: "Tentang Tim" },
  { to: "/galeri", label: "Galeri" },
  { to: "/glosarium", label: "Glosarium" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-volcanic-900 border-b border-volcanic-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            className="font-oswald text-xl font-semibold text-magma-400 hover:text-magma-500 transition-colors"
          >
            DiVolca<span className="text-volcanic-100">.net</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-magma-400 ${
                    isActive ? "text-magma-400" : "text-volcanic-300"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-md text-volcanic-300 hover:text-volcanic-100 hover:bg-volcanic-800 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-volcanic-700 bg-volcanic-900">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-volcanic-800 text-magma-400"
                      : "text-volcanic-300 hover:bg-volcanic-800 hover:text-volcanic-100"
                  }`
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}