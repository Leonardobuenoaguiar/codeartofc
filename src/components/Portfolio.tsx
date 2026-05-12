import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiExternalLink } from 'react-icons/hi';

const projects = [
  { title: 'Campos & Associados', category: 'Site para Advogado', desc: 'Portal corporativo premium transmitindo autoridade e confiança para o escritório.', tags: ['Next.js', 'Tailwind', 'SEO'] },
  { title: 'Dra. Marina Psicologia', category: 'Landing Page', desc: 'Página acolhedora com agendamento online integrado para atendimento psicológico.', tags: ['React', 'Calendly', 'Framer'] },
  { title: 'Essenza Store', category: 'Loja Virtual', desc: 'E-commerce moderno com pagamentos integrados, dashboard e experiência fluida.', tags: ['Next.js', 'Stripe', 'Prisma'] },
  { title: 'Grupo Horizonte', category: 'Site Corporativo', desc: 'Portal multi-negócios com blog, área do cliente e gestão de conteúdo.', tags: ['React', 'Node.js', 'MongoDB'] },
  { title: 'Sabor & Arte', category: 'Restaurante Delivery', desc: 'Cardápio digital interativo com pedidos online e integração com delivery.', tags: ['React', 'WhatsApp API', 'iFood'] },
  { title: 'MedClinic Saúde', category: 'Site para Médico', desc: 'Plataforma completa com agendamento, telemedicina e prontuário digital.', tags: ['Next.js', 'TypeScript', 'Prisma'] },
];

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#3B82F6] uppercase tracking-[0.2em] mb-3">
            Portfólio
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-white">
            Projetos que falam por nós
          </h2>
          <p className="text-gray-400 max-w-lg text-base sm:text-lg">
            Cada projeto pensado nos mínimos detalhes para a melhor experiência.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group rounded-xl border border-white/8 bg-[#141B26] overflow-hidden transition-all duration-400 ${
                hoveredIndex === i ? 'border-[#3B82F6]/40' : ''
              } ${hoveredIndex !== null && hoveredIndex !== i ? 'opacity-40' : ''}`}
            >
              <div className="h-40 sm:h-44 bg-[#0D1117] relative overflow-hidden flex items-center justify-center">
                <div className="w-full h-full p-4 flex flex-col gap-2.5">
                  <div className="flex gap-2 mb-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6]/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/8" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/6" />
                  </div>
                  <div className="h-2.5 w-3/4 rounded-full bg-white/6" />
                  <div className="h-2.5 w-1/2 rounded-full bg-white/3" />
                  <div className="grid grid-cols-3 gap-2 mt-1.5">
                    <div className="h-12 rounded-lg bg-white/[0.03] border border-white/5" />
                    <div className="h-12 rounded-lg bg-white/[0.03] border border-white/5" />
                    <div className="h-12 rounded-lg bg-white/[0.03] border border-white/5" />
                  </div>
                </div>
                <div className={`absolute inset-0 bg-[#1A1F2E]/85 hidden sm:flex items-center justify-center transition-opacity duration-300 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2563EB] text-white text-sm font-medium shadow-lg">
                    Ver projeto completo
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <span className="text-[11px] sm:text-xs font-medium text-[#3B82F6] uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-white mt-1 mb-1.5">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-3 sm:mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] sm:text-xs px-2 sm:px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-10 sm:mt-12">
          <a href="#" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg border border-white/15 text-gray-300 font-medium hover:bg-white/5 hover:text-white transition-all duration-300 w-full sm:w-auto">
            Ver todos os projetos
            <HiExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
