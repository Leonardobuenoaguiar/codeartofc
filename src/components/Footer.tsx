import { FaWhatsapp, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const footerLinks = {
  Serviços: ['Desenvolvimento de Sites', 'Landing Pages', 'Lojas Virtuais', 'Sistemas Web', 'Otimização SEO'],
  Empresa: ['Sobre nós', 'Portfólio', 'Processo', 'Depoimentos', 'Blog'],
  Contato: ['WhatsApp', 'E-mail', 'Instagram', 'LinkedIn'],
};

const socialLinks = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaGithub, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB] flex items-center justify-center font-bold text-lg text-white">
                {"</>"}
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  Code<span className="text-[#3B82F6]">Art</span>
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                </span>
              </div>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-xs">
              Transformamos ideias em experiências digitais. Sites modernos, rápidos e profissionais.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-gray-300 mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Code Art Agência Digital. Todos os direitos reservados.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#3B82F6] transition-colors">
              <FaWhatsapp className="w-3.5 h-3.5" />
              (99) 99999-9999
            </a>
            <a href="mailto:contato@codeart.com.br" className="flex items-center gap-2 text-xs text-gray-500 hover:text-[#3B82F6] transition-colors">
              <HiMail className="w-3.5 h-3.5" />
              contato@codeart.com.br
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
