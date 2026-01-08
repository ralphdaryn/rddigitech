import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import Contact from "./sections/Contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
    </>
  );
}