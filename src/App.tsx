import { useScrollReveal, useProgressBars } from '@/hooks/useScrollReveal';
import Cursor from '@/components/Cursor';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  useScrollReveal();
  useProgressBars();

  return (
    <>
      <Cursor />
      <Background />
      <div className="noise-overlay" />
      <Navbar />

      <main className="relative" style={{ zIndex: 2 }}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
