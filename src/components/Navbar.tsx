import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#services' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Processo', href: '#process' },
  { label: 'Depoimentos', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-[#2563EB] flex items-center justify-center font-bold text-lg text-white group-hover:bg-[#1D4ED8] transition-colors duration-300">
            {"</>"}
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold tracking-tight leading-tight transition-colors duration-300 ${scrolled ? 'text-[#1A1F2E]' : 'text-white'}`}>
              Code<span className="text-[#2563EB]">Art</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 leading-tight">
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 text-sm transition-colors duration-200 relative group ${scrolled ? 'text-gray-600 hover:text-[#1A1F2E]' : 'text-gray-300 hover:text-white'}`}
            >
              {link.label}
              <span className="absolute bottom-0 left-0 right-0 mx-auto w-0 h-[2px] bg-[#2563EB] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2.5 text-sm font-medium rounded-lg bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-all duration-300"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-600 hover:bg-gray-50' : 'text-white hover:bg-white/10'}`}
        >
          {mobileOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-gray-600 hover:text-[#1A1F2E] hover:bg-gray-50 rounded-lg transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5599999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 px-5 py-3 text-center text-sm font-medium rounded-lg bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-all duration-300"
              >
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
