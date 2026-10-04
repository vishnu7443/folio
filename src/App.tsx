import Cursor from './components/ui/Cursor';
import FloatingLogo from './components/ui/FloatingLogo';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CurrentFocus from './components/sections/CurrentFocus';
import FeaturedProject from './components/sections/FeaturedProject';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Learning from './components/sections/Learning';
import Achievements from './components/sections/Achievements';
import Philosophy from './components/sections/Philosophy';

function App() {
  return (
    <div className="bg-background text-primary min-h-screen selection:bg-accent/30 selection:text-white">
      <Cursor />
      <FloatingLogo />
      <Navbar />
      <main>
        <Hero />
        <About />
        <CurrentFocus />
        <FeaturedProject />
        <Projects />
        <Skills />
        <Learning />
        <Achievements />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
