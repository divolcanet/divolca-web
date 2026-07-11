import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import iconLight from "../assets/icons/icon-light.svg";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";
import { useScroll } from "../hooks/useScroll";
import { ThemeToggle } from "./ThemeToggle";
import { fixedNavbarPages, navLinks } from "./nav-links";

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isScrolled = useScroll(50);

  return (
    <nav
      className={cn(
        " w-full z-50 transition-all duration-300",
        isScrolled ? " bg-black backdrop-blur-md" : "bg-transparent",
        fixedNavbarPages.includes(pathname)
          ? cn("fixed left-0", isScrolled ? "top-0" : "top-12")
          : " bg-black/90 sticky top-0",
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300",
          isScrolled ? "py-2" : "py-4",
        )}
      >
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className=" w-45">
            <img src={iconLight} width={180} />
          </NavLink>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  buttonVariants({
                    variant: isActive ? "default" : "ghost",
                    className: cn(" text-sm", isActive ? " " : "text-white"),
                  })
                }
              >
                {link.label}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="bg-primary-10"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="absolute w-full border-t border-primary-10 bg-black ">
          <div className="px-2 py-4 flex flex-col gap-2 justify-start">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  buttonVariants({
                    variant: "link",
                    className: cn(
                      " w-max",
                      isActive ? " text-primary-10" : "text-white font-normal",
                    ),
                  })
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
