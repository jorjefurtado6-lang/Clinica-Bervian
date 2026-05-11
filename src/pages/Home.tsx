import { motion } from 'motion/react';
import { ShieldCheck, Stethoscope, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white/40 to-transparent pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-bold uppercase rounded-full mb-6">
              Referência em Ijuí/RS
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-primary leading-[1.1] font-serif mb-6">
              Segurança e <span className="font-bold block italic">Saúde Ocupacional</span>
            </h1>
            <p className="text-lg md:text-xl text-footer mb-10 max-w-xl leading-relaxed">
              Garantimos a conformidade legal da sua empresa com agilidade técnica e atendimento humanizado.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                to="/contato"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg hover:scale-105 transition-transform"
              >
                Solicitar Orçamento
              </Link>
              <Link
                to="/area-cliente"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border-2 border-secondary bg-white px-8 py-4 text-base font-bold text-secondary hover:bg-gray-50 transition-colors"
              >
                WhatsApp
              </Link>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-12 mt-12 border-t border-secondary/20 max-w-2xl">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-xs text-secondary uppercase font-semibold">Empresas Atendidas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">24h</p>
                <p className="text-xs text-secondary uppercase font-semibold">Retorno Orçamento</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-xs text-secondary uppercase font-semibold">E-Social Pronto</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4 border-b border-secondary/10 pb-4 inline-block">Nossas Soluções</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white shadow-sm border border-secondary/10 hover:border-secondary/30 transition-all flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary">Exames Ocupacionais</h3>
              </div>
              <p className="text-footer mb-6 text-sm flex-1">Gestão completa de ASOs: Admissional, Demissional, Periódico, Retorno ao Trabalho e Mudança de Risco.</p>
              <Link to="/servicos" className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors text-xs uppercase tracking-wider">
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="p-8 rounded-3xl bg-white shadow-sm border border-secondary/10 hover:border-secondary/30 transition-all flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary">Programas (PGR/PCMSO)</h3>
              </div>
              <p className="text-footer mb-6 text-sm flex-1">Elaboração e coordenação de documentos técnicos obrigatórios com integração ao eSocial.</p>
              <Link to="/servicos" className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors text-xs uppercase tracking-wider">
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-primary p-8 rounded-3xl text-white relative overflow-hidden flex flex-col justify-between hover:shadow-lg transition-transform">
              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-widest opacity-70 mb-2">Acesso Rápido</p>
                <h4 className="text-2xl font-bold mb-4">Portal do Cliente</h4>
                <p className="text-sm opacity-90 leading-relaxed mb-6">
                  Gerencie seus atestados e acompanhe nossa inteligência artificial IA Bervian.
                </p>
              </div>
              <Link to="/area-cliente" className="relative z-10 inline-block bg-white w-fit text-primary px-6 py-3 rounded-full text-xs font-bold shadow-sm hover:bg-gray-100 transition-colors">
                Acessar agora →
              </Link>
              <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-secondary opacity-20 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
