import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

export function Services() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-primary font-serif mb-12">Nossos Serviços</h1>
        
        <div className="md:hidden">
          <Carousel 
            plugins={[plugin.current]}
            className="w-full relative" 
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {/* Medicina Ocupacional */}
              <CarouselItem className="pl-2 md:pl-4 basis-[90%] flex">
                <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all w-full flex flex-col items-start h-full">
            <h2 className="text-2xl font-bold text-primary mb-4">Medicina Ocupacional</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Exames clínicos admissionais, demissionais, periódicos, de mudança de risco ocupacional e de retorno ao trabalho, realizados por médicos especializados em Medicina do Trabalho.
            </p>
            <div className="mb-6 w-full">
              <h3 className="font-bold text-secondary mb-3 uppercase tracking-wider text-sm">Atividades desenvolvidas:</h3>
              <ul className="grid sm:grid-cols-1 gap-3 text-footer">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> 
                  <span>Elaboração do Programa de Controle Médico de Saúde Ocupacional (PCMSO) em conformidade com a NR7;</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> 
                  <span>Saúde Ocupacional, exames clínicos, psicossocial, toxicológico, radiológico, eletrocardiograma, eletroencefalograma, acuidade visual, espirometria, audiometria tonal, laboratoriais, entre outros.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> 
                  <span>Assistência Técnica em Perícias Médicas de acidentes de trabalho e doenças ocupacionais.</span>
                </li>
              </ul>
            </div>
            <Link to="/contato" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mt-2">
              Solicite um orçamento
            </Link>
            </div>
          </CarouselItem>

          {/* Higiene Ocupacional */}
          <CarouselItem className="pl-2 md:pl-4 basis-[90%] flex">
            <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all w-full flex flex-col items-start h-full">
            <h2 className="text-2xl font-bold text-primary mb-4">Higiene Ocupacional</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Atuação na antecipação, reconhecimento, avaliação e controle de riscos ocupacionais, seguindo os conceitos e metodologias conforme previsto nas normas NR15 e NHO's (Normas de Higiene Ocupacionais da Fundacentro), além de métodos analíticos da NIOSH.
            </p>
            <div className="mb-6 w-full">
              <h3 className="font-bold text-secondary mb-3 uppercase tracking-wider text-sm">Atividades desenvolvidas:</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-footer">
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Fichas de EPIs (Equipamentos de Proteção Individual);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Ordem de Serviço (OS);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Mapa de Risco;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Programa de Conservação Auditiva (PCA);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Programa de Proteção Respiratória (PPR).</li>
              </ul>
            </div>
            <Link to="/contato" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mt-2">
              Solicite um orçamento
            </Link>
            </div>
          </CarouselItem>

          {/* Segurança do Trabalho */}
          <CarouselItem className="pl-2 md:pl-4 basis-[90%] flex">
            <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all w-full flex flex-col items-start h-full">
            <h2 className="text-2xl font-bold text-primary mb-4">Segurança do Trabalho</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Equipe formada por Técnicos em Segurança do Trabalho, Engenheiros em Segurança do Trabalho, Médicos do Trabalho para garantir que as normas regulamentadoras e leis complementares sejam seguidas e sua empresa ofereça condições seguras de trabalho aos colaboradores.
            </p>
            <div className="mb-6 w-full">
              <h3 className="font-bold text-secondary mb-3 uppercase tracking-wider text-sm">Atividades desenvolvidas:</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-footer">
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Programa de Gerenciamento de Risco (PGR);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Gerenciamento de Risco Ocupacional (GRO);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Laudo Técnico de Condições Ambientais do Trabalho (LTCAT);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Perfil Profissiográfico Previdenciário (PPP);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Laudo de Insalubridade e Periculosidade (LIP);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Plano de Emergência e Evacuação;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Assistência Técnica em Perícias Judiciais de Insalubridade e Periculosidade.</li>
              </ul>
            </div>
            <Link to="/contato" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mt-2">
              Solicite um orçamento
            </Link>
            </div>
          </CarouselItem>

          {/* Ergonomia */}
          <CarouselItem className="pl-2 md:pl-4 basis-[90%] flex">
            <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all w-full flex flex-col items-start h-full">
            <h2 className="text-2xl font-bold text-primary mb-4">Ergonomia</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Equipe multidisciplinar de Ergonomistas para atender os pilares físico, cognitivo e organizacional, focando no desenvolvimento de atividades preventivas, na melhoria contínua dos postos de trabalho e no atendimento às exigências legais da NR17.
            </p>
            <div className="mb-6 w-full">
              <h3 className="font-bold text-secondary mb-3 uppercase tracking-wider text-sm">Atividades desenvolvidas:</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-footer">
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Análise Ergonômica do Trabalho (AET);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Análise Ergonômica Preliminar (AEP);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Análise de Riscos Psicossociais (NR1);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Assessoria e consultoria ao seu Comitê de Ergonomia (COERGO);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Assistência Técnica em Perícias Ergonômicas em processos trabalhistas.</li>
              </ul>
            </div>
            <Link to="/contato" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mt-2">
              Solicite um orçamento
            </Link>
            </div>
          </CarouselItem>

          {/* Treinamento */}
          <CarouselItem className="pl-2 md:pl-4 basis-[90%] flex">
            <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all w-full flex flex-col items-start h-full">
            <h2 className="text-2xl font-bold text-primary mb-4">Treinamento</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Treinamentos voltados à área de atuação da empresa, de acordo as exigências das Normas Regulamentadoras (NRs).
            </p>
            <div className="mb-6 w-full">
              <h3 className="font-bold text-secondary mb-3 uppercase tracking-wider text-sm">Atividades desenvolvidas:</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-footer">
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento de integração de segurança;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento de cipeiros;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento do uso e conservação do EPI;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento de primeiros socorros;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento sobre agrotóxicos;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento para serviços em eletricidade (NR10);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento para movimentação de materiais;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento dos operadores de máquinas;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento de trabalho em Espaço Confinado (NR33);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento de Trabalho em Altura (NR35);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> SIPAT (Semana Interna de Prevenção de Acidentes de Trabalho);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Campanhas de prevenção de doenças e promoção de saúde.</li>
              </ul>
            </div>
            <Link to="/contato" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mt-2">
              Solicite um orçamento
            </Link>
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

        {/* Desktop View */}
        <div className="hidden md:flex flex-col space-y-12">
          {/* Medicina Ocupacional */}
          <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all flex flex-col items-start">
            <h2 className="text-2xl font-bold text-primary mb-4">Medicina Ocupacional</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Exames clínicos admissionais, demissionais, periódicos, de mudança de risco ocupacional e de retorno ao trabalho, realizados por médicos especializados em Medicina do Trabalho.
            </p>
            <div className="mb-6 w-full">
              <h3 className="font-bold text-secondary mb-3 uppercase tracking-wider text-sm">Atividades desenvolvidas:</h3>
              <ul className="grid sm:grid-cols-1 gap-3 text-footer">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> 
                  <span>Elaboração do Programa de Controle Médico de Saúde Ocupacional (PCMSO) em conformidade com a NR7;</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> 
                  <span>Saúde Ocupacional, exames clínicos, psicossocial, toxicológico, radiológico, eletrocardiograma, eletroencefalograma, acuidade visual, espirometria, audiometria tonal, laboratoriais, entre outros.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> 
                  <span>Assistência Técnica em Perícias Médicas de acidentes de trabalho e doenças ocupacionais.</span>
                </li>
              </ul>
            </div>
            <Link to="/contato" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mt-2">
              Solicite um orçamento
            </Link>
          </div>

          {/* Higiene Ocupacional */}
          <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all flex flex-col items-start">
            <h2 className="text-2xl font-bold text-primary mb-4">Higiene Ocupacional</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Atuação na antecipação, reconhecimento, avaliação e controle de riscos ocupacionais, seguindo os conceitos e metodologias conforme previsto nas normas NR15 e NHO's (Normas de Higiene Ocupacionais da Fundacentro), além de métodos analíticos da NIOSH.
            </p>
            <div className="mb-6 w-full">
              <h3 className="font-bold text-secondary mb-3 uppercase tracking-wider text-sm">Atividades desenvolvidas:</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-footer">
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Fichas de EPIs (Equipamentos de Proteção Individual);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Ordem de Serviço (OS);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Mapa de Risco;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Programa de Conservação Auditiva (PCA);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Programa de Proteção Respiratória (PPR).</li>
              </ul>
            </div>
            <Link to="/contato" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mt-2">
              Solicite um orçamento
            </Link>
          </div>

          {/* Segurança do Trabalho */}
          <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all flex flex-col items-start">
            <h2 className="text-2xl font-bold text-primary mb-4">Segurança do Trabalho</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Equipe formada por Técnicos em Segurança do Trabalho, Engenheiros em Segurança do Trabalho, Médicos do Trabalho para garantir que as normas regulamentadoras e leis complementares sejam seguidas e sua empresa ofereça condições seguras de trabalho aos colaboradores.
            </p>
            <div className="mb-6 w-full">
              <h3 className="font-bold text-secondary mb-3 uppercase tracking-wider text-sm">Atividades desenvolvidas:</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-footer">
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Programa de Gerenciamento de Risco (PGR);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Gerenciamento de Risco Ocupacional (GRO);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Laudo Técnico de Condições Ambientais do Trabalho (LTCAT);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Perfil Profissiográfico Previdenciário (PPP);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Laudo de Insalubridade e Periculosidade (LIP);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Plano de Emergência e Evacuação;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Assistência Técnica em Perícias Judiciais de Insalubridade e Periculosidade.</li>
              </ul>
            </div>
            <Link to="/contato" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mt-2">
              Solicite um orçamento
            </Link>
          </div>

          {/* Ergonomia */}
          <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all flex flex-col items-start">
            <h2 className="text-2xl font-bold text-primary mb-4">Ergonomia</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Equipe multidisciplinar de Ergonomistas para atender os pilares físico, cognitivo e organizacional, focando no desenvolvimento de atividades preventivas, na melhoria contínua dos postos de trabalho e no atendimento às exigências legais da NR17.
            </p>
            <div className="mb-6 w-full">
              <h3 className="font-bold text-secondary mb-3 uppercase tracking-wider text-sm">Atividades desenvolvidas:</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-footer">
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Análise Ergonômica do Trabalho (AET);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Análise Ergonômica Preliminar (AEP);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Análise de Riscos Psicossociais (NR1);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Assessoria e consultoria ao seu Comitê de Ergonomia (COERGO);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Assistência Técnica em Perícias Ergonômicas em processos trabalhistas.</li>
              </ul>
            </div>
            <Link to="/contato" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mt-2">
              Solicite um orçamento
            </Link>
          </div>

          {/* Treinamento */}
          <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all flex flex-col items-start">
            <h2 className="text-2xl font-bold text-primary mb-4">Treinamento</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Treinamentos voltados à área de atuação da empresa, de acordo as exigências das Normas Regulamentadoras (NRs).
            </p>
            <div className="mb-6 w-full">
              <h3 className="font-bold text-secondary mb-3 uppercase tracking-wider text-sm">Atividades desenvolvidas:</h3>
              <ul className="grid sm:grid-cols-2 gap-3 text-footer">
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento de integração de segurança;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento de cipeiros;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento do uso e conservação do EPI;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento de primeiros socorros;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento sobre agrotóxicos;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento para serviços em eletricidade (NR10);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento para movimentação de materiais;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento dos operadores de máquinas;</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento de trabalho em Espaço Confinado (NR33);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Treinamento de Trabalho em Altura (NR35);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> SIPAT (Semana Interna de Prevenção de Acidentes de Trabalho);</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> Campanhas de prevenção de doenças e promoção de saúde.</li>
              </ul>
            </div>
            <Link to="/contato" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mt-2">
              Solicite um orçamento
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}