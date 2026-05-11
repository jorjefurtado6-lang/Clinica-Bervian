export function Services() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-primary font-serif mb-12">Nossos Serviços</h1>
        
        <div className="space-y-12">
          {/* Exames */}
          <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all">
            <h2 className="text-2xl font-bold text-primary mb-4">Exames Ocupacionais (ASO)</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Atestados de Saúde Ocupacional emitidos com agilidade e rigor técnico.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 text-footer">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"/> Exame Admissional</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"/> Exame Demissional</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"/> Exame Periódico</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"/> Retorno ao Trabalho</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"/> Mudança de Riscos Ocupacionais</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"/> Exames Complementares (EAS, ECG, EEG, Audiometria)</li>
            </ul>
          </div>

          {/* Programas */}
          <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all">
            <h2 className="text-2xl font-bold text-primary mb-4">Programas e Laudos (SST)</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Documentação técnica essencial para evitar multas processuais e garantir conformidade com o eSocial.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-secondary mb-1 uppercase tracking-wider text-sm">PGR (Programa de Gerenciamento de Riscos)</h3>
                <p className="text-sm text-footer">Substitui o antigo PPRA. Mapeia e gerencia de forma contínua todos os riscos operacionais da sua empresa.</p>
              </div>
              <div>
                <h3 className="font-bold text-secondary mb-1 uppercase tracking-wider text-sm">PCMSO (Programa de Controle Médico)</h3>
                <p className="text-sm text-footer">Programa focado na prevenção e rastreamento precoce dos agravos à saúde relacionados ao trabalho.</p>
              </div>
              <div>
                <h3 className="font-bold text-secondary mb-1 uppercase tracking-wider text-sm">LTCAT (Laudo Técnico das Condições Ambientais)</h3>
                <p className="text-sm text-footer">Documento que comprova a exposição à agentes nocivos para fins de aposentadoria especial do INSS.</p>
              </div>
            </div>
          </div>

          {/* Treinamentos */}
          <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 hover:border-secondary/30 transition-all">
            <h2 className="text-2xl font-bold text-primary mb-4">Treinamentos de Segurança</h2>
            <p className="text-footer mb-6 font-medium text-lg border-l-4 border-secondary pl-4 bg-background/20 py-2">
              Capacitamos sua equipe in company ou em nosso auditório.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 text-footer">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"/> NR-05 CIPA</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"/> NR-06 Epi e EPC</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"/> Primeiros Socorros</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-secondary rounded-full"/> NR-35 Trabalho em Altura</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
