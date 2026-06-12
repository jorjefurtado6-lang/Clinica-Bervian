import { useState, FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    cnpj: '',
    employees: '',
    email: '',
    phone: '',
    service: 'Orçamento Completo (PGR + PCMSO + Exames)'
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Format text message to send via WhatsApp
    const message = `Olá, gostaria de solicitar um orçamento:\n\n` +
      `*Nome da Empresa:* ${formData.companyName}\n` +
      `*CNPJ:* ${formData.cnpj}\n` +
      `*Nº Funcionários:* ${formData.employees}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Telefone / WhatsApp:* ${formData.phone}\n` +
      `*Serviço Desejado:* ${formData.service}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5555991679733?text=${encodedMessage}`;
    
    setSubmitted(true);
    
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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
                <p className="text-gray-600 mb-6 font-medium">As informações do formulário foram empacotadas para o seu WhatsApp.</p>
                <p className="text-sm text-gray-500 mb-6">Se a janela de envio não abriu automaticamente, clique no botão abaixo para prosseguir com o envio pelo WhatsApp:</p>
                <div className="flex flex-col gap-3">
                  <a 
                    href={`https://wa.me/5555991679733?text=${encodeURIComponent(`Olá, gostaria de solicitar um orçamento:\n\n*Nome da Empresa:* ${formData.companyName}\n*CNPJ:* ${formData.cnpj}\n*Nº Funcionários:* ${formData.employees}\n*E-mail:* ${formData.email}\n*Telefone / WhatsApp:* ${formData.phone}\n*Serviço Desejado:* ${formData.service}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-4 text-sm font-bold text-white shadow-sm hover:bg-[#20bd5a] transition-all"
                  >
                    Abrir WhatsApp Novamente
                  </a>
                  <button 
                    onClick={() => {
                      setFormData({
                        companyName: '',
                        cnpj: '',
                        employees: '',
                        email: '',
                        phone: '',
                        service: 'Orçamento Completo (PGR + PCMSO + Exames)'
                      });
                      setSubmitted(false);
                    }} 
                    className="text-primary font-semibold hover:underline text-sm"
                  >
                    Fazer nova solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-primary mb-6 pb-2 border-b border-secondary/10">Dados da Empresa</h2>
                
                <div>
                  <label className="block text-sm font-bold text-primary mb-1">Nome da Empresa</label>
                  <input 
                    required 
                    type="text" 
                    value={formData.companyName}
                    onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                    className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/30 text-footer" 
                    placeholder="Sua Empresa Ltda" 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">CNPJ</label>
                    <input 
                      required 
                      type="text" 
                      value={formData.cnpj}
                      onChange={(e) => setFormData(prev => ({ ...prev, cnpj: e.target.value }))}
                      className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/30 text-footer" 
                      placeholder="00.000.000/0000-00" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">Nº Funcionários</label>
                    <input 
                      required 
                      type="number" 
                      min="1" 
                      value={formData.employees}
                      onChange={(e) => setFormData(prev => ({ ...prev, employees: e.target.value }))}
                      className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/30 text-footer" 
                      placeholder="Ex: 25" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">E-mail</label>
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/30 text-footer" 
                      placeholder="contato@empresa.com" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-1">Telefone / WhatsApp</label>
                    <input 
                      required 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/30 text-footer" 
                      placeholder="(00) 00000-0000" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary mb-1">Serviço Desejado</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full rounded-xl border border-secondary/20 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-background/30 text-footer"
                  >
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
                  Enviar Solicitação via WhatsApp
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
