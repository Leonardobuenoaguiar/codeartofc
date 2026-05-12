import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl bg-[#141B26] border border-white/8 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#2563EB]/8 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#3B82F6]/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-5"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#3B82F6] uppercase tracking-[0.2em]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                Vamos conversar?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 leading-[1.15] text-white"
            >
              Seu negócio merece um site à altura.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-base sm:text-lg max-w-xl mb-8 sm:mb-10"
            >
              Solicite um orçamento sem compromisso. Em até 24h retornamos com uma proposta
              personalizada para o seu projeto.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4"
            >
              <a
                href="https://wa.me/5599999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-[#2563EB] text-white rounded-lg font-bold text-base sm:text-lg hover:bg-[#1D4ED8] transition-all duration-300 shadow-lg shadow-[#2563EB]/25 w-full sm:w-auto"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                Falar no WhatsApp
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:contato@codeart.com.br"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-white/15 text-gray-300 font-medium hover:bg-white/5 hover:text-white transition-all duration-300 w-full sm:w-auto"
              >
                Enviar e-mail
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
