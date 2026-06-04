import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import StatsBar from './sections/StatsBar';
import Services from './sections/Services';
import Benefits from './sections/Benefits';
import Product from './sections/Product';
import Portal from './sections/Portal';
import Ecosystem from './sections/Ecosystem';
import Features from './sections/Features';
import Industries from './sections/Industries';
import Process from './sections/Process';
import Licensing from './sections/Licensing';
import About from './sections/About';
import CtaBanner from './sections/CtaBanner';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Benefits />
        <Product />
        <Portal />
        <Ecosystem />
        <Features />
        <Industries />
        <Process />
        <Licensing />
        <About />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
