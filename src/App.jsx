// App.jsx
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import Projects from "./sections/Projects/Projects";
import Reviews from "./sections/Reviews/Reviews";
import Contact from "./sections/Contact/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Reviews />
      <Contact />
    </>
  );
}