import { Building2, Users, Target, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import React, { useRef } from 'react';
import { professionals } from '../data/professionals';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function Clinic() {
  const teamPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-primary font-serif mb-8">A Clínica</h1>
        
        <div className="prose prose-lg max-w-none text-footer mb-16">
          <p className="lead text-xl">
            A Clínica Bervian é referência em Medicina e Segurança do Trabalho na região de Ijuí/RS. 
            Nosso compromisso é entregar soluções ágeis e tecnicamente irretocáveis para a conformidade da sua empresa.
          </p>
          <p className="text-sm">
            Fundada com o propósito de desburocratizar a Saúde Ocupacional, entendemos que o capital humano é o bem mais precioso de qualquer organização. Atuamos não apenas na emissão de laudos, mas na gestão proativa da saúde.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl border border-secondary/10 shadow-sm transition-all hover:border-secondary/30">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Missão</h3>
            <p className="text-footer text-sm">Promover ambientes de trabalho seguros e saudáveis, garantindo a tranquilidade jurídica das empresas parceiras.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-secondary/10 shadow-sm transition-all hover:border-secondary/30">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Visão</h3>
            <p className="text-footer text-sm">Ser a marca mais confiável e tecnológica em gestão de SST do noroeste do Rio Grande do Sul.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-secondary/10 shadow-sm transition-all hover:border-secondary/30">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Valores</h3>
            <p className="text-footer text-sm">Ética médica, agilidade de atendimento, inovação tecnológica e foco absoluto no paciente e na empresa.</p>
          </div>
        </div>

        <div>
          <h2 className="text-primary font-bold text-sm uppercase tracking-widest mb-8 border-b border-secondary/10 pb-4 inline-block">Nosso Corpo Técnico</h2>
          
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

          <div className="hidden md:grid md:grid-cols-2 gap-6 sm:gap-8">
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
      </div>
    </div>
  );
}
