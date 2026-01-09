import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.scss";
import Container from "../Container/Container";

const NAV = [
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("overflow-hidden", open);
    return () => document.documentElement.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="nav">
      <Container>
        <div className="nav__inner">
          <a className="nav__logo" href="#top" onClick={() => setOpen(false)}>
            RD Digitech
          </a>

          {/* Desktop links */}
          <nav className="nav__links" aria-label="Primary">
            {NAV.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
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
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}