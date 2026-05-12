import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { HiOutlineCheckCircle } from 'react-icons/hi';

const differentiators = [
  { title: 'Design moderno e exclusivo', desc: 'Cada projeto é tratado como uma obra única. Criamos layouts que impressionam e engajam seu público.' },
  { title: 'Sites rápidos e otimizados', desc: 'Performance máxima com carregamento em menos de 2 segundos. Core Web Vitals no verde.' },
  { title: 'Experiência mobile impecável', desc: 'Design mobile-first que funciona perfeitamente em qualquer dispositivo.' },
  { title: 'Alta conversão', desc: 'UX estratégica focada em resultados. Cada elemento pensado para maximizar suas conversões.' },
  { title: 'Suporte personalizado', desc: 'Atendimento próximo e dedicado em todas as etapas do projeto e após o lançamento.' },
  { title: 'Tecnologia atualizada', desc: 'Stack moderno: React, Next.js, TypeScript e as melhores ferramentas do mercado.' },
];

const stats = [
  { value: 150, suffix: '+', label: 'Projetos entregues' },
  { value: 98, suffix: '%', label: 'Clientes satisfeitos' },
  { value: 1.2, suffix: 's', label: 'Performance média' },
  { value: 7, suffix: ' dias', label: 'Tempo de entrega' },
];

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2;
          let start = 0;
          const increment = end / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else { setCount(Math.floor(start)); }
          }, 1000 / 60);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold tracking-tight text-[#000000]">
      {count}{suffix}
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#2563EB] uppercase tracking-[0.2em] mb-3">
            Por que nos escolher
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 text-[#1A1F2E]">
            O que nos torna diferentes
          </h2>
          <p className="text-gray-500 max-w-lg text-base sm:text-lg">
            Somos parceiros estratégicos focados em resultados reais para o seu negócio.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14 sm:mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl border border-gray-100 p-4 sm:p-6 hover:shadow-md transition-all duration-300"
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <div className="text-xs sm:text-sm text-[#3B82F6] mt-1.5 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Differentiators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-xl border border-gray-100 p-5 sm:p-6 hover:border-[#2563EB]/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <HiOutlineCheckCircle className="w-5 h-5 text-[#2563EB] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-[#1A1F2E] font-semibold mb-1.5 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
