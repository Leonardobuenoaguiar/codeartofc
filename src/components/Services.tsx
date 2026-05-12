import { motion } from 'framer-motion';
import {
  HiCode,
  HiLightningBolt,
  HiShoppingCart,
  HiDesktopComputer,
  HiSearch,
  HiDeviceMobile,
  HiPuzzle,
} from 'react-icons/hi';

const services = [
  { icon: HiCode, title: 'Desenvolvimento de Sites', desc: 'Sites institucionais que transmitem credibilidade e convertem visitantes em clientes.' },
  { icon: HiLightningBolt, title: 'Landing Pages', desc: 'Páginas de alta conversão otimizadas para campanhas, com foco total em resultados.' },
  { icon: HiShoppingCart, title: 'Lojas Virtuais', desc: 'E-commerces completos com experiência de compra fluida e gestão simplificada.' },
  { icon: HiDesktopComputer, title: 'Sistemas Web', desc: 'Aplicações sob medida para automatizar processos e escalar seu negócio.' },
  { icon: HiSearch, title: 'Otimização SEO', desc: 'Estratégias de SEO para posicionar seu site no topo dos mecanismos de busca.' },
  { icon: HiDeviceMobile, title: 'Design Responsivo', desc: 'Experiência mobile-first impecável em todos os dispositivos e tamanhos de tela.' },
  { icon: HiPuzzle, title: 'Integrações e Automação', desc: 'Conexão com CRMs, ERPs, WhatsApp API e mais para automatizar seu fluxo de trabalho.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#2563EB] uppercase tracking-[0.2em] mb-3">
            O que fazemos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-[#1A1F2E]">
            Soluções completas para o digital
          </h2>
          <p className="text-gray-500 max-w-lg text-base sm:text-lg">
            Da criação à otimização, entregamos tudo o que sua empresa precisa.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="group bg-white border border-gray-100 rounded-xl p-5 sm:p-6 hover:border-[#2563EB]/30 hover:shadow-lg hover:shadow-[#2563EB]/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-[#2563EB]/8 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h3 className="text-base font-semibold text-[#1A1F2E] mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
