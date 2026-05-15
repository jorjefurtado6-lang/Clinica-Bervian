import { useParams, Navigate, Link } from 'react-router-dom';
import { professionals } from '../data/professionals';
import { ArrowLeft, Calendar, FileText, Stethoscope, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export function ProfissionalProfile() {
  const { id } = useParams();
  
  const professional = professionals.find(p => p.id === id);
  
  if (!professional) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-background/30 pt-20 pb-24">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary font-bold hover:-translate-x-1 transition-transform mb-8 px-4 py-2 rounded-full border border-secondary/20 bg-white text-sm shadow-sm w-fit"
        >
          <ArrowLeft size={16} />
          <span>Voltar ao início</span>
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-sm border border-secondary/10 overflow-hidden"
        >
          {/* Header/Banner area */}
          <div className="h-32 bg-primary/5 border-b border-secondary/10 relative">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#153C35 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          </div>
          
          <div className="px-8 pb-10 sm:px-12 sm:pb-12">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 -mt-16 relative">
              <div className="w-32 h-32 sm:w-48 sm:h-48 shrink-0">
                <img 
                  src={professional.image} 
                  alt={professional.name} 
                  className="w-full h-full object-cover rounded-3xl border-4 border-white shadow-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="pt-2 sm:pt-20">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-2 font-serif">{professional.name}</h1>
                <p className="text-secondary font-medium text-lg mb-3">{professional.role}</p>
                <div className="flex items-center gap-3">
                  <div className="inline-block px-3 py-1 bg-background text-footer font-bold text-xs rounded-lg border border-secondary/20 shadow-sm">
                    {professional.credential}
                  </div>
                  {professional.linkedin && (
                    <a
                      href={professional.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#0077b5] text-white hover:opacity-90 transition-opacity"
                      title={`LinkedIn de ${professional.name}`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
              <div className="md:col-span-2 space-y-8">
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 border-b border-secondary/10 pb-2 inline-flex items-center gap-2">
                    <FileText size={16} className="text-secondary" /> 
                    Sobre o Profissional
                  </h2>
                  <p className="text-footer leading-relaxed whitespace-pre-wrap">
                    {professional.description}
                  </p>
                </section>
                
                <section>
                  <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4 border-b border-secondary/10 pb-2 inline-flex items-center gap-2">
                    <Stethoscope size={16} className="text-secondary" />
                    Especialidades
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {professional.specialties.map((spec, index) => (
                      <li key={index} className="flex items-center gap-2 text-footer text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
              
              <div className="md:col-span-1">
                <div className="bg-background/50 rounded-2xl p-6 border border-secondary/10">
                  <h3 className="font-bold text-primary mb-4 flex items-center gap-2 text-sm uppercase tracking-widest">
                    <Calendar size={16} className="text-secondary" />
                    Atendimento
                  </h3>
                  <p className="text-footer text-sm leading-relaxed mb-6">
                    {professional.availability}
                  </p>
                  
                  <Link 
                    to="/contato" 
                    className="block w-full text-center rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white shadow-md hover:scale-[1.02] transition-transform"
                  >
                    Agendar Consulta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
