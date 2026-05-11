import { Building2, Users, Target } from 'lucide-react';

export function Clinic() {
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white p-6 rounded-3xl border border-secondary/10 hover:border-secondary/30 transition-colors shadow-sm">
              <div className="w-24 h-24 bg-background rounded-full mb-4 flex items-center justify-center text-footer font-bold shadow-inner">Foto</div>
              <h4 className="font-bold text-primary text-lg">Dr(a). Nome Sobrenome</h4>
              <p className="text-xs border-b border-secondary/20 pb-2 mb-3 text-secondary font-bold uppercase tracking-wider">Médico(a) do Trabalho</p>
              <p className="text-sm text-footer">RQE: XXXXX. Especialista em Medicina Ocupacional com X anos de experiência.</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white p-6 rounded-3xl border border-secondary/10 hover:border-secondary/30 transition-colors shadow-sm">
              <div className="w-24 h-24 bg-background rounded-full mb-4 flex items-center justify-center text-footer font-bold shadow-inner">Foto</div>
              <h4 className="font-bold text-primary text-lg">Nome Sobrenome</h4>
              <p className="text-xs border-b border-secondary/20 pb-2 mb-3 text-secondary font-bold uppercase tracking-wider">Eng. de Seg. do Trabalho</p>
              <p className="text-sm text-footer">CREA: XXXXX. Especialista em higiene ocupacional e elaboração de LTCAT.</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white p-6 rounded-3xl border border-secondary/10 hover:border-secondary/30 transition-colors shadow-sm">
              <div className="w-24 h-24 bg-background rounded-full mb-4 flex items-center justify-center text-footer font-bold shadow-inner">Foto</div>
              <h4 className="font-bold text-primary text-lg">Nome Sobrenome</h4>
              <p className="text-xs border-b border-secondary/20 pb-2 mb-3 text-secondary font-bold uppercase tracking-wider">Técnico(a) em Enfermagem</p>
              <p className="text-sm text-footer">Focado em agilidade no atendimento de exames complementares como audiometria e ECG.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
