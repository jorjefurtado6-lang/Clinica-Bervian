import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Stethoscope, FileText, ArrowRight, Calendar, Tag, Star, ChevronDown, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { professionals } from '../data/professionals';
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';
import React, { useEffect, useState, useRef } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { mockPosts } from '../data/mockPosts';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const FaqItem: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-secondary/10 overflow-hidden transition-all hover:border-secondary/30">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
      >
        <span className="font-bold text-primary pr-4">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-background text-secondary'}`}>
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 text-sm text-footer leading-relaxed max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function Home() {
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  const heroPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const solutionsPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  const teamPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  const testimonialsPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(3));
        const qs = await getDocs(q);
        const fetchedPosts = qs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        const combined = [...fetchedPosts];
        mockPosts.forEach(mock => {
          if (!combined.some(p => p.id === mock.id)) {
            combined.push(mock);
          }
        });
        
        combined.sort((a: any, b: any) => Number(b.createdAt) - Number(a.createdAt));
        setRecentPosts(combined.slice(0, 3));
      } catch (e) {
        console.error(e);
        setRecentPosts(mockPosts.slice(0, 3));
      } finally {
        setLoadingPosts(false);
      }
    };
    fetchRecentPosts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white/40 to-transparent pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="container relative mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
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

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative z-10 w-full h-[400px] lg:h-[500px]">
                {/* Illustration Placeholder - Using a relevant medical/safety vector placeholder image */}
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                  alt="Ilustração Medicina do Trabalho"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-8 border-white"
                  referrerPolicy="no-referrer"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-12">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4 border-b border-secondary/10 pb-4 inline-block">Nossas Soluções</h2>
          </div>
          
          <div className="md:hidden">
            <Carousel 
              plugins={[solutionsPlugin.current]}
              className="w-full relative" 
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4 basis-[85%] flex">
                  <div className="w-full p-8 rounded-3xl bg-white shadow-sm border border-secondary/10 hover:border-secondary/30 transition-all flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                        <Stethoscope className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-primary">Medicina Ocupacional</h3>
                    </div>
                    <p className="text-footer mb-6 text-sm flex-1">Gestão completa de exames clínicos admissionais, demissionais, periódicos, de mudança de risco e retorno ao trabalho.</p>
                    <Link to="/servicos" className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors text-xs uppercase tracking-wider">
                      Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 basis-[85%] flex">
                  <div className="w-full p-8 rounded-3xl bg-white shadow-sm border border-secondary/10 hover:border-secondary/30 transition-all flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold text-primary">Segurança do Trabalho</h3>
                    </div>
                    <p className="text-footer mb-6 text-sm flex-1">Elaboração de programas (PGR / PCMSO), laudos técnicos (LTCAT, LIP) e gestão de riscos ocupacionais.</p>
                    <Link to="/servicos" className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors text-xs uppercase tracking-wider">
                      Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 basis-[85%] flex">
                  <div className="w-full bg-primary p-8 rounded-3xl text-white relative overflow-hidden flex flex-col justify-between hover:shadow-lg transition-transform">
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
                    <div className="absolute right-[-40px] bottom-[-40px] opacity-10">
                      <ShieldCheck className="w-48 h-48" />
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              
              <div className="flex items-center justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselDots />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 rounded-3xl bg-white shadow-sm border border-secondary/10 hover:border-secondary/30 transition-all flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                  <Stethoscope className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary">Medicina Ocupacional</h3>
              </div>
              <p className="text-footer mb-6 text-sm flex-1">Gestão completa de exames clínicos admissionais, demissionais, periódicos, de mudança de risco e retorno ao trabalho.</p>
              <Link to="/servicos" className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors text-xs uppercase tracking-wider">
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="shrink-0 w-[85%] md:w-auto snap-center p-8 rounded-3xl bg-white shadow-sm border border-secondary/10 hover:border-secondary/30 transition-all flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary">Segurança do Trabalho</h3>
              </div>
              <p className="text-footer mb-6 text-sm flex-1">Elaboração de programas (PGR / PCMSO), laudos técnicos (LTCAT, LIP) e gestão de riscos ocupacionais.</p>
              <Link to="/servicos" className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors text-xs uppercase tracking-wider">
                Saiba mais <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="shrink-0 w-[85%] md:w-auto snap-center bg-primary p-8 rounded-3xl text-white relative overflow-hidden flex flex-col justify-between hover:shadow-lg transition-transform">
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

      {/* Nossa Equipe */}
      <section className="py-20 bg-background/50 border-t border-secondary/10">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-12">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4 border-b border-secondary/10 pb-4 inline-block">Nossa Equipe de Especialistas</h2>
            <p className="text-footer max-w-2xl text-sm leading-relaxed mt-4">
              Contamos com um corpo clínico altamente qualificado para garantir a saúde e a segurança no ambiente de trabalho da sua empresa.
            </p>
          </div>
          
          <div className="md:hidden">
            <Carousel 
              plugins={[teamPlugin.current]}
              className="w-full relative" 
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {professionals.map((prof, index) => (
                  <CarouselItem key={prof.id} className="pl-2 md:pl-4 basis-[85%]">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-secondary/10 hover:border-secondary/30 transition-all flex items-center gap-6 h-full group relative">
                      <Link 
                        to={`/profissional/${prof.id}`}
                        className="w-20 h-20 shrink-0 block hover:opacity-80 transition-opacity"
                      >
                        <img 
                          src={prof.image} 
                          alt={prof.name} 
                          className="w-full h-full object-cover rounded-full border-2 border-background shadow-sm"
                          referrerPolicy="no-referrer"
                        />
                      </Link>
                      <div className="flex-1">
                        <Link to={`/profissional/${prof.id}`} className="block">
                          <h3 className="font-bold text-primary text-base leading-tight mb-1 group-hover:text-secondary transition-colors">{prof.name}</h3>
                        </Link>
                        <p className="text-footer text-xs font-medium mb-2">{prof.role}</p>
                        <div className="flex items-center gap-2">
                          <span className="inline-block px-2 py-0.5 bg-background text-footer/70 text-[10px] font-bold rounded-md">
                            {prof.credential}
                          </span>
                          {prof.linkedin && (
                            <a 
                              href={prof.linkedin} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:text-secondary transition-colors"
                              title={`LinkedIn de ${prof.name}`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Linkedin size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselDots />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {professionals.map((prof, index) => (
              <motion.div 
                key={prof.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-secondary/10 hover:border-secondary/30 transition-all flex items-center gap-6 group">
                  <Link 
                    to={`/profissional/${prof.id}`}
                    className="w-20 h-20 shrink-0 block hover:opacity-80 transition-opacity"
                  >
                    <img 
                      src={prof.image} 
                      alt={prof.name} 
                      className="w-full h-full object-cover rounded-full border-2 border-background shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  </Link>
                  <div className="flex-1">
                    <Link to={`/profissional/${prof.id}`} className="block">
                      <h3 className="font-bold text-primary text-base leading-tight mb-1 group-hover:text-secondary transition-colors">{prof.name}</h3>
                    </Link>
                    <p className="text-footer text-xs font-medium mb-2">{prof.role}</p>
                    <div className="flex items-center gap-2">
                      <span className="inline-block px-2 py-0.5 bg-background text-footer/70 text-[10px] font-bold rounded-md">
                        {prof.credential}
                      </span>
                      {prof.linkedin && (
                        <a 
                          href={prof.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-secondary transition-colors"
                          title={`LinkedIn de ${prof.name}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-background/30 border-t border-secondary/10">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4 border-b border-secondary/10 pb-4 inline-block">Depoimentos</h2>
            <p className="text-footer max-w-2xl text-sm leading-relaxed mt-4 md:mx-0 mx-auto">
              Veja o que nossos clientes dizem sobre a parceria com a Bervian para cuidar da saúde ocupacional da sua empresa.
            </p>
          </div>
          
          <div className="md:hidden">
            <Carousel 
              plugins={[testimonialsPlugin.current]}
              className="w-full relative" 
              opts={{ align: "start", loop: true }}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-[85%] flex">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-secondary/10 hover:border-secondary/30 transition-all flex flex-col w-full relative">
                      <div className="absolute top-8 right-8">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l2.85-2.22.83-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                      </div>
                      <div className="flex text-yellow-400 mb-4 gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-footer text-sm leading-relaxed mb-6 flex-1 italic">
                        "{testimonial.content}"
                      </p>
                      <div className="border-t border-secondary/10 pt-4 mt-auto">
                        <h4 className="font-bold text-primary text-sm">{testimonial.author}</h4>
                        <p className="text-xs text-footer/80 font-medium">{testimonial.role} - <span className="text-secondary">{testimonial.company}</span></p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-8">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselDots />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-secondary/10 hover:border-secondary/30 transition-all flex flex-col relative"
              >
                <div className="absolute top-8 right-8">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.16v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.16C1.43 8.55 1 10.22 1 12s.43 3.45 1.16 4.93l2.85-2.22.83-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.16 7.07l3.68 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="flex text-yellow-400 mb-4 gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-footer text-sm leading-relaxed mb-6 flex-1 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-secondary/10 pt-4 mt-auto">
                  <h4 className="font-bold text-primary text-sm">{testimonial.author}</h4>
                  <p className="text-xs text-footer/80 font-medium">{testimonial.role} - <span className="text-secondary">{testimonial.company}</span></p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background/50 border-t border-secondary/10">
        <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4 border-b border-secondary/10 pb-4 inline-block">Dúvidas Frequentes</h2>
            <p className="text-footer text-sm leading-relaxed mt-4">
              Encontre respostas para as principais dúvidas sobre nossos serviços de Medicina e Segurança do Trabalho.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Últimos Artigos do Blog */}
      <section className="py-20 bg-background border-t border-secondary/10">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
            <div>
              <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-4 border-b border-secondary/10 pb-4 inline-block">Blog & Notícias</h2>
              <p className="text-footer max-w-2xl text-sm leading-relaxed mt-4">
                Fique por dentro das novidades, exigências legais e dicas sobre medicina e segurança do trabalho.
              </p>
            </div>
            <Link to="/blog" className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors text-xs uppercase tracking-wider whitespace-nowrap bg-white px-6 py-3 rounded-xl shadow-sm border border-secondary/10">
              Ver todos os artigos <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          {loadingPosts ? (
            <div className="text-center py-10 text-footer">Carregando artigos...</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-secondary/10 flex flex-col hover:border-secondary/30 transition-all group">
                  <div className="h-48 overflow-hidden bg-background">
                    {post.imageUrl ? (
                      <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-footer/20 bg-footer/5">Sem Imagem</div>
                    )}
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-2 py-1 rounded-sm">
                        <Tag size={10} /> {post.category}
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-widest text-footer/60">
                        {new Date(post.createdAt || Date.now()).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors cursor-pointer">{post.title}</h3>
                    <p className="text-sm text-footer mb-6 flex-1">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="text-primary font-bold text-xs uppercase tracking-wider w-fit hover:text-secondary transition-colors">Ler artigo completo →</Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
