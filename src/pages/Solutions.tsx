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

const solutionsData = [
  {
    title: "Assessoria e Consultoria em SST",
    text: "Precisa de auxílio para entender em que nível sua empresa está?",
    bullets: [
      "<strong class=\"text-secondary uppercase tracking-widest text-xs mr-2\">Consultoria:</strong> É a fase de diagnóstico e estratégia. O consultor analisa a empresa, identifica gargalos legais, aponta riscos e elabora planos de ação.",
      "<strong class=\"text-secondary uppercase tracking-widest text-xs mr-2\">Assessoria:</strong> É a fase prática e contínua. O assessor executa o plano, preenche documentações, realiza treinamentos e acompanha o dia a dia da empresa."
    ]
  },
  {
    title: "Planos Personalizados Individualizados",
    text: "Os Planos de Prestação de Serviços em SST são pacotes estruturados que reúnem soluções de segurança e medicina do trabalho de forma contínua ou pontual. Em vez de contratar serviços avulsos — o que gera custos imprevisíveis —, a sua empresa conta com suporte especializado previsível, alinhado ao orçamento e às exigências legais da sua empresa."
  },
  {
    title: "Documentação Técnica",
    text: "Equipe multidisciplinar capacitada para dar pleno atendimento às normativas trabalhistas, com geração de laudos pormenorizados e documentação de suporte nas áreas trabalhista e previdenciária, permitindo maior segurança jurídica para as emrpesas clientes, através de um processo moderno de gerenciamento de dados, a estruturação exigida para geração e envio dos eventos específicos do eSocial."
  },
  {
    title: "Mensageria para o eSocial",
    text: "Atendimento pleno e adequado às exigências dos eventos de medicina e segurança do trabalho referentes aos exames médicos ocupacionais (evento S-2220) e de condições ambientais de trabalho (evento S-2240), gerados e transmitidos de maneira automatizada conforme a demanda."
  },
  {
    title: "Riscos Psicossociais",
    text: "A atualização da NR-01 (Portaria MTE nº 1.419/2024) obriga as empresas a incluir fatores de riscos psicossociais no Gerenciamento de Riscos Ocupacionais (GRO) e no Inventário de Riscos. O foco é prevenir adoecimentos mentais causados por assédio, sobrecarga de trabalho, metas abusivas e falta de suporte da liderança."
  },
  {
    title: "Ergonomia",
    text: "A ergonomia corporativa não é apenas o cumprimento de exigências legais como a NR-17, ela representa um investimento estratégico direto na eficiência operacional e na saúde financeira da organização. A ergonomia atua como uma solução estratégica para otimizar a interação entre os trabalhadores e suas ferramentas de trabalho, ao adaptar o ambiente de trabalho às capacidades e limitações humanas, transforma ambientes corporativos ao alinhar produtividade, saúde e bem-estar."
  },
  {
    title: "Saúde Corporativa",
    text: "Conjunto de estratégias e ações adotadas por empresas para promover a qualidade de vida e mitigar riscos. Gestão do absenteísmo e presenteísmo, Gestão de afastamentos previdenciários, Gestão do FAP (Fator Acidentário Previdenciário), Gestão do NTEP (Nexo Técnico Epidemiológico Previdenciário), Cultura Preventiva, Indicadores de Monitoramento."
  }
];

export function Solutions() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-primary font-serif mb-12">Nossas Soluções</h1>
        
        {/* Mobile View */}
        <div className="md:hidden">
          <Carousel 
            plugins={[plugin.current]}
            className="w-full relative" 
            opts={{ align: "start", loop: true }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {solutionsData.map((sol, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[90%] flex">
                  <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all w-full flex flex-col items-start h-full">
                    <h2 className="text-2xl font-bold text-primary mb-4">{sol.title}</h2>
                    <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
                      {sol.text}
                    </p>
                    {sol.bullets && (
                      <div className="mb-6 w-full">
                        <ul className="grid sm:grid-cols-1 gap-3 text-footer">
                          {sol.bullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> 
                              <span dangerouslySetInnerHTML={{ __html: bullet }} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Link to="/contato" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mt-2">
                      Solicite um orçamento
                    </Link>
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

        {/* Desktop View */}
        <div className="hidden md:flex flex-col space-y-12">
          {solutionsData.map((sol, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all flex flex-col items-start">
              <h2 className="text-2xl font-bold text-primary mb-4">{sol.title}</h2>
              <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
                {sol.text}
              </p>
              {sol.bullets && (
                <div className="mb-6 w-full">
                  <ul className="grid sm:grid-cols-1 gap-3 text-footer">
                    {sol.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0"/> 
                        <span dangerouslySetInnerHTML={{ __html: bullet }} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <Link to="/contato" className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-xl hover:scale-105 transition-transform mt-2">
                Solicite um orçamento
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
