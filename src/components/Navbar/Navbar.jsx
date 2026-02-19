import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.scss";
import Container from "../Container/Container";
import { track } from "../../utils/ga4";

import logo from "../../assets/images/desktop-logo.png";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="nav">
      <Container>
        <div className="nav__inner">
          <a
            className="nav__logo"
            href="#home"
            onClick={() => {
              track("nav_click", { nav: "logo", destination: "home" });
              close();
            }}
            aria-label="RD DigiTech Home"
          >
            <img src={logo} alt="RD DigiTech logo" />
          </a>

          {/* Desktop */}
          <nav className="nav__links" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() =>
                  track("nav_click", {
                    nav: "desktop",
                    destination: item.href.replace("#", ""),
                  })
                }
              >
                {item.label}
              </a>
            ))}

            <a
              className="nav__cta"
              href="#contact"
              onClick={() =>
                track("nav_click", { nav: "desktop", destination: "contact" })
              }
            >
              Contact
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            className="nav__burger"
            onClick={() => {
              const next = !open;
              setOpen(next);
              track("nav_menu_toggle", { nav: "mobile", open: next });
            }}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <nav
        id="mobile-nav"
        className={`nav__mobile ${open ? "open" : ""}`}
        aria-label="Mobile"
      >
        <Container>
          <ul className="nav__mobile-list">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => {
                    track("nav_click", {
                      nav: "mobile",
                      destination: item.href.replace("#", ""),
                    });
                    close();
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="nav__mobile-cta"
                href="#contact"
                onClick={() => {
                  track("nav_click", {
                    nav: "mobile",
                    destination: "contact",
                  });
                  close();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
}