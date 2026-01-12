// Navbar.jsx
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.scss";
import Container from "../Container/Container";

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
            onClick={close}
            aria-label="RD DigiTech Home"
          >
            <img src={logo} alt="RD DigiTech logo" />
          </a>

          {/* Desktop */}
          <nav className="nav__links" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}

            <a className="nav__cta" href="#contact">
              Contact
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            type="button"
            className="nav__burger"
            onClick={() => setOpen((v) => !v)}
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
                <a href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a className="nav__mobile-cta" href="#contact" onClick={close}>
                Contact
              </a>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
}