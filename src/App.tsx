import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import Navigation from "@/components/Navigation";

export default function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
