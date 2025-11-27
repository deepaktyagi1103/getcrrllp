import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Countries from './components/Countries';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans antialiased bg-gradient-to-br from-white via-[#F6FBFF] to-[#EAFDF7]">
      
      {/* Header remains fixed and crisp */}
      <Header />

      {/* Smooth spacing flow so each section feels connected */}
      <main className="pt-[70px] space-y-0">
        <Hero />
        <About />
        <Services />
        <Countries />
        <Stats />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      {/* Clean footer close */}
      <Footer />

    </div>
  );
}

export default App;
