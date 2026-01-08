import "./Services.scss";
import Container from "../../components/Container/Container";

export default function Services() {
  return (
    <section className="services" id="services">
      <Container>
        <h2>What I Build</h2>
        <ul>
          <li>Business websites</li>
          <li>Booking & forms</li>
          <li>Automations</li>
        </ul>
      </Container>
    </section>
  );
}