import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-['Inter'] overflow-x-hidden">
      <Navbar />
      {/* Hero: dark */}
      <div className="bg-[#0D1117]">
        <Hero />
      </div>
      {/* Services: white */}
      <div className="bg-white">
        <Services />
      </div>
      {/* Why Choose Us: light gray */}
      <div className="bg-[#F5F6F8]">
        <WhyChooseUs />
      </div>
      {/* Portfolio: dark */}
      <div className="bg-[#0D1117]">
        <Portfolio />
      </div>
      {/* Process: white */}
      <div className="bg-white">
        <Process />
      </div>
      {/* Testimonials: light gray */}
      <div className="bg-[#F5F6F8]">
        <Testimonials />
      </div>
      {/* CTA: dark */}
      <div className="bg-[#0D1117]">
        <CTASection />
      </div>
      {/* Footer: darker */}
      <div className="bg-[#080C12]">
        <Footer />
      </div>
    </div>
  );
}
