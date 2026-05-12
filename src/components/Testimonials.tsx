import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

const testimonials = [
  { name: 'Ricardo Campos', role: 'Advogado — Campos & Associados', text: 'A Code Art transformou nossa presença digital. O site do escritório transmite exatamente a autoridade que queríamos. Design impecável e muitos elogios dos clientes.', rating: 5, initials: 'RC' },
  { name: 'Dra. Marina Souza', role: 'Psicóloga Clínica', text: 'Fiquei encantada com minha landing page. Traduziram perfeitamente o acolhimento que ofereço. O agendamento integrado aumentou muito minhas consultas.', rating: 5, initials: 'MS' },
  { name: 'Carlos Mendes', role: 'CEO — Essenza Store', text: 'Nossa loja virtual ficou sensacional. Experiência de compra fluida e vendas aumentaram 40%. Entregaram muito além do esperado.', rating: 5, initials: 'CM' },
  { name: 'Ana Oliveira', role: 'Proprietária — Sabor & Arte', text: 'O site com cardápio digital revolucionou nosso delivery. Bonito, rápido e fácil de gerenciar. Profissionalismo do início ao fim.', rating: 5, initials: 'AO' },
  { name: 'Dr. Paulo Henrique', role: 'Diretor — MedClinic Saúde', text: 'Plataforma robusta para nossa clínica com agendamento e telemedicina integrados. Performance excepcional. Parceria de longo prazo.', rating: 5, initials: 'PH' },
  { name: 'Fernanda Lima', role: 'Marketing — Grupo Horizonte', text: 'Portal corporativo que atende perfeitamente nossas múltiplas unidades. Blog integrado e área do cliente impecáveis.', rating: 5, initials: 'FL' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#2563EB] uppercase tracking-[0.2em] mb-3">
            Depoimentos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-[#1A1F2E]">
            Quem já confiou na gente
          </h2>
          <p className="text-gray-500 max-w-lg text-base sm:text-lg">
            Mais de 150 projetos entregues com clientes satisfeitos em todo o Brasil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-xl border border-gray-100 p-5 sm:p-6 hover:border-[#2563EB]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, s) => (
                  <HiStar key={s} className="w-4 h-4 text-[#F0C040]" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white font-semibold text-sm shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#1A1F2E]">{testimonial.name}</div>
                  <div className="text-xs text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
