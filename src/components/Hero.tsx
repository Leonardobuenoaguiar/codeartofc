import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center pt-24 pb-12 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#2563EB]/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#3B82F6]/3 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage: 'linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 mb-6 md:mb-8">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] shrink-0" />
                <span className="text-[11px] sm:text-xs font-medium text-gray-400 uppercase tracking-[0.15em]">
                  Soluções Digitais de Alto Padrão
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight mb-5 md:mb-6 text-white"
            >
              Transformamos ideias em{' '}
              <span className="text-[#3B82F6]">experiências digitais</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-base sm:text-lg text-gray-400 leading-relaxed mb-8 md:mb-10 max-w-xl"
            >
           Desenvolvemos sites modernos, rápidos e profissionais para empresas que buscam presença digital de alto nível.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <a
                href="https://wa.me/5599999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#2563EB] text-white rounded-lg font-semibold hover:bg-[#1D4ED8] transition-all duration-300 shadow-lg shadow-[#2563EB]/20 w-full sm:w-auto"
              >
                <FaWhatsapp className="w-5 h-5" />
                Solicitar orçamento
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg border border-white/15 text-gray-300 font-medium hover:bg-white/5 hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                <HiPlay />
                Ver projetos
              </a>
            </motion.div>

            {/* Stats - centralizado no mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex justify-center sm:justify-start gap-8 sm:gap-10 mt-10 md:mt-14 pt-8 border-t border-white/8"
            >
              {[
                { value: '150+', label: 'Projetos' },
                { value: '98%', label: 'Satisfação' },
                { value: '1.2s', label: 'Carregamento' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#3B82F6]">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="rounded-2xl border border-white/10 bg-[#141B26] shadow-2xl shadow-black/30 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6 bg-[#0D1117]/60">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/40" />
                  </div>
                  <div className="ml-4 text-[10px] text-gray-500 tracking-wider">dashboard.codeart.com</div>
                </div>
                <div className="p-5 space-y-4">
                  {/* Tech labels row */}
                  <div className="flex items-center gap-4 mb-1">
                    {['React', 'Tailwind CSS', 'Next.js'].map((tech) => (
                      <span key={tech} className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {/* Cards Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="rounded-xl border border-white/5 p-3">
                        <div className="w-5 h-5 rounded bg-white/8 mb-2" />
                        <div className="h-2 w-3/4 rounded-full bg-white/8 mb-1" />
                        <div className="h-2 w-1/2 rounded-full bg-white/4" />
                      </div>
                    ))}
                  </div>
                  {/* Chart */}
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <div className="flex items-end gap-2 h-24">
                      {[40, 65, 35, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-sm bg-[#2563EB]/30" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  {/* Bottom Row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 space-y-2">
                      <div className="h-2 w-3/4 rounded-full bg-white/8" />
                      <div className="h-2 w-1/2 rounded-full bg-white/4" />
                    </div>
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-3 space-y-2">
                      <div className="h-2 w-3/4 rounded-full bg-white/8" />
                      <div className="h-2 w-1/2 rounded-full bg-white/4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <motion.div
                className="absolute -right-8 -bottom-10 w-28 h-52 rounded-2xl border border-white/10 bg-[#141B26] shadow-xl shadow-black/30 overflow-hidden"
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="h-3 bg-[#0D1117]/60 border-b border-white/5" />
                <div className="p-2 space-y-1.5">
                  <div className="h-1.5 w-full rounded-full bg-white/6" />
                  <div className="h-1.5 w-3/4 rounded-full bg-white/4" />
                  <div className="h-14 rounded-lg border border-white/5 mt-2 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#2563EB]/20" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0D1117] to-transparent pointer-events-none" />
    </section>
  );
}
