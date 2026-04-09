import { AnimatedBackground } from '@components';
import { About, Contact, Footer, Hero, Navbar, Projects } from '@layout';
import '@styles/index.css';
import Warning from '@components/warning';

function App() {
  return (
    <>
      <Warning />
      <AnimatedBackground />
      <header className="flex w-full justify-center pt-6">
        <Navbar />
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
