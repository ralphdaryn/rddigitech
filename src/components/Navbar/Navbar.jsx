import "./Navbar.scss";
import Container from "../Container/Container";

export default function Navbar() {
  return (
    <header className="nav">
      <Container>
        <div className="nav__inner">
          <div className="nav__logo">RD Digitech</div>
          <nav className="nav__links">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}