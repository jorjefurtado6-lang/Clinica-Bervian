import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, HeartPulse } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-footer text-background px-8 py-10 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 border-b border-white/10">
          
          {/* Brand & Sobre */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <img src="/logo-bervian.png" alt="Clínica Bervian" className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-sm text-background/70 leading-relaxed font-light">
              Soluções completas em excelência de Medicina e Segurança do Trabalho para sua empresa em Ijuí e região.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://instagram.com/clinicabervian" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-footer transition-colors text-white">
                <span className="text-[10px] font-bold">IG</span>
              </a>
              <a href="https://wa.me/5555991679733" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-footer transition-colors text-white">
                <span className="text-[10px] font-bold">WA</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link to="/clinica" className="text-sm text-background/70 hover:text-white transition-colors font-light">A Clínica</Link></li>
              <li><Link to="/servicos" className="text-sm text-background/70 hover:text-white transition-colors font-light">Nossos Serviços</Link></li>
              <li><Link to="/blog" className="text-sm text-background/70 hover:text-white transition-colors font-light">Blog e Artigos</Link></li>
              <li><Link to="/area-cliente" className="text-sm text-background/70 hover:text-white transition-colors font-light">Acesso ao Sistema (ESO)</Link></li>
              <li><Link to="/admin" className="text-sm text-background/70 hover:text-white transition-colors font-light">Admin</Link></li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Especialidades</h3>
            <ul className="space-y-2">
              <li className="text-sm text-background/70 font-light">Exames Ocupacionais (ASO)</li>
              <li className="text-sm text-background/70 font-light">PGR e PCMSO</li>
              <li className="text-sm text-background/70 font-light">LTCAT</li>
              <li className="text-sm text-background/70 font-light">Treinamentos Técnicos</li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Atendimento</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-background/70">
                <MapPin size={18} className="text-secondary shrink-0" />
                <span className="text-xs font-light">Rua 14 de Julho 356 - Centro, Ijuí/RS</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary shrink-0" />
                <a href="https://wa.me/5555991679733" target="_blank" rel="noopener noreferrer" className="text-xs text-background/70 hover:text-white transition-colors font-light">(55) 99167-9733</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary shrink-0" />
                <a href="mailto:clinicabervian@gmail.com" className="text-xs text-background/70 hover:text-white transition-colors font-light">clinicabervian@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="pt-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/50 uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} Clínica Bervian • Todos os direitos reservados
          </p>
          <div className="flex gap-4">
            <Link to="/privacidade" className="text-[10px] text-white/50 uppercase tracking-widest font-medium hover:text-white transition-colors">Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
