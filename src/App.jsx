import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-black text-white min-h-screen relative selection:bg-red-500 selection:text-white">
      <CustomCursor />
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
