import { useState, FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-primary font-serif mb-4">Agendamento & Orçamento</h1>
        <p className="text-lg text-footer mb-12">Precisa de nossa assessoria? Preencha os dados abaixo e entraremos em contato rapidamente com as melhores soluções para sua empresa.</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-secondary/10">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 size={64} className="text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Solicitação Enviada!</h3>
                <p className="text-gray-600 mb-6">Nossa equipe comercial ou técnica entrará em contato em breve.</p>
                <button onClick={() => setSubmitted(false)} className="text-primary font-semibold hover:underline">
                  Fazer nova solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-primary mb-6 pb-2 border-b border-secondary/10">Dados da Empresa</h2>
                
                <div>
                  <label className="block text-sm font-bold text-primary mb-1">Nome da Empresa</label>
                  <input required type="text" className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/30 text-footer" placeholder="Sua Empresa Ltda" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">CNPJ</label>
                    <input required type="text" className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/30 text-footer" placeholder="00.000.000/0000-00" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">Nº Funcionários</label>
                    <input required type="number" min="1" className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/30 text-footer" placeholder="Ex: 25" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">E-mail</label>
                    <input required type="email" className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/30 text-footer" placeholder="contato@empresa.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">Telefone / WhatsApp</label>
                    <input required type="tel" className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/30 text-footer" placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-1">Serviço Desejado</label>
                  <select className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/30 text-footer">
                    <option>Orçamento Completo (PGR + PCMSO + Exames)</option>
                    <option>Agendamento Avulso de Exames</option>
                    <option>Elaboração de LTCAT</option>
                    <option>Treinamentos</option>
                    <option>Ergonomia</option>
                    <option>Avaliação de Riscos Psicossociais (NR1)</option>
                    <option>Assistência Técnica em Processos Trabalhistas</option>
                    <option>Outros</option>
                  </select>
                </div>

                <button type="submit" className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-4 text-sm font-bold text-white shadow-sm hover:bg-primary/90 mt-6 transition-all">
                  <Send size={18} />
                  Enviar Solicitação
                </button>
              </form>
            )}
          </div>

          {/* Outros Canais */}
          <div>
            <div className="bg-background/50 rounded-3xl p-8 h-full flex flex-col justify-center border border-secondary/10">
              <h2 className="text-2xl font-bold text-primary mb-6">Precisa de urgência?</h2>
              <p className="text-footer mb-8">
                Para agendamentos para o mesmo dia ou dúvidas rápidas, utilize nosso canal de WhatsApp direto. Nossa equipe de recepção está pronta para atender.
              </p>
              
              <a 
                href="https://wa.me/5555991679733" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex flex-1 max-h-14 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-white font-bold text-lg hover:bg-[#20bd5a] transition-all shadow-sm hover:scale-105"
              >
                Falar no WhatsApp
              </a>

              <div className="mt-8 pt-8 border-t border-secondary/20">
                <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">E-mail Direto</p>
                <a href="mailto:clinicabervian@gmail.com" className="text-primary hover:underline font-medium">clinicabervian@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
