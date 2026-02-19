// App.jsx
import "./App.scss";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import Projects from "./sections/Projects/Projects";
import Reviews from "./sections/Reviews/Reviews";
import Contact from "./sections/Contact/Contact";

import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./auth/ProtectedRoute";

function Landing() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}