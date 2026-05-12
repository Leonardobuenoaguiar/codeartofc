import { motion } from 'framer-motion';

const steps = [
  { title: 'Planejamento', desc: 'Entendemos suas necessidades, objetivos e público. Definimos estratégia, escopo e as tecnologias ideais.' },
  { title: 'Design', desc: 'Criamos layouts exclusivos no Figma com foco em UX/UI. Você aprova cada detalhe visual.' },
  { title: 'Desenvolvimento', desc: 'Codificamos com as melhores práticas. Performance, acessibilidade e SEO são prioridades.' },
  { title: 'Revisão', desc: 'Testamos em todos os dispositivos. Ajustamos cada detalhe até que tudo esteja perfeito.' },
  { title: 'Entrega', desc: 'Publicamos o site, configuramos o domínio e oferecemos suporte contínuo. Está no ar.' },
];

export default function Process() {
  return (
    <section id="process" className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#2563EB] uppercase tracking-[0.2em] mb-3">
            Nosso processo
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-[#1A1F2E]">
            Da ideia ao lançamento
          </h2>
          <p className="text-gray-500 max-w-lg text-base sm:text-lg">
            Um processo estruturado que garante qualidade e transparência em cada etapa.
          </p>
        </motion.div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative flex gap-4"
            >
              <div className="flex flex-col items-center shrink-0 w-10">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-sm font-bold shadow-md relative z-10">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 min-h-[36px] mt-1.5 bg-gray-200" />
                )}
              </div>
              <div className={i < steps.length - 1 ? 'pb-8' : ''}>
                <h3 className="text-base font-semibold text-[#2563EB] mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: horizontal row */}
        <div className="hidden md:grid md:grid-cols-5 gap-3 relative">
          <div className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-gray-200 z-0" />
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-lg font-bold shrink-0 shadow-lg mb-4">
                {i + 1}
              </div>
              <h3 className="text-sm font-semibold text-[#2563EB] mb-1.5">{step.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
