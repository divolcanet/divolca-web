import { NavLink } from "react-router-dom";
import { Rotate3D } from "lucide-react";
import type { SVGProps } from "react";
import { buttonVariants } from "./ui/button";
import icon from "../assets/icons/icon-light.svg";
import { officeProfile } from "../data/office";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 9.4-8.4 16.2-16.5 11.6 2.9.1 5.8-.8 8-2.6-2.9-.2-5.3-2.1-6.1-4.9 1 .3 2 .2 2.9-.1C5.3 10.8 3.8 8.5 4 6c1 1 2.4 1.7 4 1.7C6.5 6 6.9 2.8 9.1 1.7c2.5-1.3 5.5-.6 7.2 1.7 1.1 0 2.2-.3 3.1-.9-.3 1.1-1 2.1-2 2.7 1 0 1.9-.3 2.6-.8z" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
      <path d="M10 9v12h4v-7a3 3 0 0 1 6 0v7h4v-8a6 6 0 0 0-6-6c-1.5 0-3 1-4 2V9z" />
    </svg>
  );
}

function FigmaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 2a3 3 0 0 0 0 6h3V2H8z" />
      <path d="M8 8a3 3 0 1 0 3 3V8H8z" />
      <path d="M11 14h2a3 3 0 1 1-3 3v-3z" />
      <path d="M16 2a3 3 0 0 0 0 6 3 3 0 0 0 0-6z" />
      <path d="M13 8h3a3 3 0 1 1-3 3V8z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://facebook.com", icon: FacebookIcon, label: "Facebook" },
  { href: "https://twitter.com", icon: TwitterIcon, label: "Twitter" },
  { href: "https://linkedin.com", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "https://figma.com", icon: FigmaIcon, label: "Figma" },
];

export default function Footer() {
  return (
    <footer className=" bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 py-24 flex flex-col md:flex-row justify-between gap-8">
        <div className=" flex flex-col items-center text-center md:items-start md:text-start gap-4 max-w-lg">
          <NavLink to="/" className=" w-45">
            <img src={icon} width={180} />
          </NavLink>

          <p className="mt-4 text-sm leading-relaxed">
            {officeProfile.title}
            <br />
            {officeProfile.address}
          </p>
        </div>

        {/* <div>
          <h3 className="font-fraunces font-semibold text-primary-10 mb-4 text-xl">
            Team
          </h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={cn(
                    buttonVariants({ variant: "link" }),
                    " text-white font-normal text-sm",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        <div className=" flex flex-col items-center text-center md:items-start md:text-start gap-6">
          <NavLink className={buttonVariants({ size: "lg" })} to="/full">
            Jelajahi Model 3D
            <Rotate3D className="w-7 h-7" />
          </NavLink>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-volcanic-400 hover:text-magma-400 transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className=" bg-black py-6">
        <p className="text-center text-sm text-volcanic-500">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
