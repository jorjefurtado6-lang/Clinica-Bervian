import React, { useState, FormEvent } from 'react';
import { LockKeyhole, ExternalLink, Activity, BrainCircuit, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';

export function ClientArea() {
  const { user, loading, loginWithEmail, signupWithEmail, logout } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleAuth = async (e: FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    try {
      if (isLogin) {
        await loginWithEmail(email, password);
      } else {
        await signupWithEmail(email, password);
      }
    } catch (error: any) {
      console.error(error);
      setAuthError(error.message);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleSimulateAI = (e: FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setIsProcessing(true);
    setResult(null);

    // Simulate AI processing time
    setTimeout(() => {
      setIsProcessing(false);
      
      const lowerInput = inputText.toLowerCase();
      if (lowerInput.includes('orçamento') || lowerInput.includes('funcionários')) {
        setResult(`**Relatório de Pré-Orçamento: Medicina Ocupacional**\n\nCom base na sua solicitação inicial, estruturamos um plano para sua empresa.\n\n**1. Exames Necessários (Estimativa)**\n- Exames Admissionais e Demissionais clínicos.\n- Exames complementares (Audiometria, Acuidade Visual) a depender dos riscos da função (NR-7).\n\n**2. Programas Obrigatórios Recomendados**\n- **PGR (Programa de Gerenciamento de Riscos):** Mapeamento atualizado dos riscos físicos e ergonômicos.\n- **PCMSO:** Execução coordenada com o PGR.\n\n**Próximo Passo:** Nossa equipe comercial entrará em contato em até 2 horas úteis para refinar estes dados e enviar a proposta oficial.`);
      } else if (lowerInput.includes('ltcat') || lowerInput.includes('insalubridade')) {
        setResult(`**Resumo Técnico: LTCAT e Benefícios Previdenciários**\n\nO Laudo Técnico das Condições Ambientais de Trabalho (LTCAT) é um documento exigido pelo INSS.\n\n**Importância para sua empresa:**\n- Evita multas previdenciárias.\n- Documenta formalmente a existência ou não de direito à aposentadoria especial pelo trabalhador.\n\nA Clínica Bervian possui engenheiros qualificados para emitir seu LTCAT completo em Ijuí e região.`);
      } else {
        setResult(`**Análise de Diagnóstico Ocupacional**\n\nAvaliamos sua submissão. Para garantir a adequação à legislação vigente (NRs), recomendamos agendar uma visita técnica gratuita.\n\n**Soluções aplicáveis identificadas:**\n- Assessoria mensal em SST.\n- Realização de exames periódicos em nossa sede no Centro de Ijuí.\n- Treinamentos in company (CIPA, EPI).\n\nConsulte nossa equipe para manter todas as conformidades em um só lugar através do Sistema ESO.`);
      }
    }, 3000);
  };

  if (loading) return <div className="flex-1 flex items-center justify-center p-8">Carregando...</div>;

  if (!user) {
    return (
      <div className="flex-1 flex flex-col justify-center py-16 md:py-24 bg-background relative min-h-[70vh]">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-lg text-center">
          
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-secondary/20">
            <LockKeyhole size={28} className="text-primary" />
          </div>
          
          <h1 className="text-3xl font-light tracking-tight text-primary font-serif mb-2">Área do Cliente</h1>
          <p className="text-footer mb-8 text-sm">Faça login ou cadastre-se para acessar nossos serviços e o Assistente IA.</p>

          <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-secondary/10">
            <h2 className="font-bold text-xl mb-6 text-primary">{isLogin ? 'Login' : 'Cadastro'}</h2>
            
            {authError && <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100">{authError}</div>}
            
            <form onSubmit={handleAuth} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase tracking-wider">E-mail</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-primary mb-1 uppercase tracking-wider">Senha</label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                disabled={authLoading}
                className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-sm hover:bg-primary/90 transition-all hover:scale-105 disabled:opacity-50"
              >
                {authLoading ? 'Aguarde...' : (isLogin ? 'Entrar' : 'Cadastrar')}
              </button>
            </form>
            
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="mt-6 text-xs font-bold text-primary hover:text-secondary uppercase tracking-widest transition-colors w-full text-center"
            >
              {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem conta? Faça login'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col py-12 bg-background relative min-h-[70vh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex justify-between items-center mb-8 border-b border-secondary/20 pb-6">
          <div>
            <h1 className="text-3xl font-light tracking-tight text-primary font-serif mb-1">Olá, Cliente</h1>
            <p className="text-sm text-footer">{user.email}</p>
          </div>
          <button 
            onClick={logout}
            className="text-xs font-bold text-red-500 hover:text-red-600 uppercase tracking-widest transition-colors px-4 py-2 border border-red-100 rounded-lg hover:bg-red-50"
          >
            Sair
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-secondary/10 hover:border-secondary/30 transition-all">
            <h2 className="font-bold text-lg mb-2 text-primary">Acesso ao Sistema ESO</h2>
            <p className="text-sm text-footer mb-8">Acesse para gerenciar agendamentos, baixar ASOs e acompanhar envios do eSocial.</p>
            
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-sm hover:bg-primary/90 transition-all"
              onClick={(e) => {
                e.preventDefault();
                alert('Em um ambiente de produção, isto abriria a URL do Sistema ESO: https://app.eso.com.br');
              }}
            >
              Acessar Sistema ESO <ExternalLink size={18} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-secondary/20 pt-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/2 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                <BrainCircuit size={16} /> Beta
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Assistente Bervian IA</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Descreva a necessidade da sua empresa, quantidade de funcionários ou dúvida sobre legislação. Nossa inteligência artificial gerará um pré-relatório ou direcionamento na hora.
              </p>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-secondary/10">
                <form onSubmit={handleSimulateAI} className="space-y-4">
                  <div>
                    <label htmlFor="ai-input" className="block text-sm font-bold text-primary mb-2">
                      Sua necessidade (Texto ou Descrição)
                    </label>
                    <textarea
                      id="ai-input"
                      rows={4}
                      className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-footer"
                      placeholder="Ex: Preciso de um orçamento de PGR e PCMSO para uma metalúrgica com 35 funcionários..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isProcessing || !inputText.trim()}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-white font-bold hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? 'Analisando dados...' : 'Gerar Relatório'}
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 min-h-[400px] flex flex-col overflow-hidden w-full">
                <div className="bg-background/20 border-b border-secondary/10 p-4 font-bold text-primary flex items-center gap-2 text-sm uppercase tracking-wider">
                  <Activity size={18} className="text-secondary" />
                  Resultado do Processamento
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <AnimatePresence mode="wait">
                    {!isProcessing && !result && (
                      <motion.div
                        key="empty"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-1 flex flex-col items-center justify-center text-gray-400 text-center"
                      >
                        <FileText size={48} className="mb-4 text-gray-200" />
                        <p>O resultado do seu relatório aparecerá aqui.</p>
                      </motion.div>
                    )}

                    {isProcessing && (
                      <motion.div
                        key="processing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex-1 flex flex-col items-center justify-center space-y-6"
                      >
                        <div className="relative">
                          <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <BrainCircuit size={20} className="text-secondary animate-pulse" />
                          </div>
                        </div>
                        <p className="text-primary font-medium">Cruzando dados com normas regulamentadoras...</p>
                      </motion.div>
                    )}

                    {!isProcessing && result && (
                      <motion.div
                        key="result"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex-1 text-gray-700 prose prose-sm max-w-none"
                      >
                        {result.split('\n').map((line, i) => {
                          if (line.startsWith('**') && line.endsWith('**')) {
                            return <h4 key={i} className="text-primary font-bold mt-4 text-lg">{line.replace(/\*\*/g, '')}</h4>;
                          } else if (line.startsWith('**')) {
                            const parts = line.split('**');
                            return <p key={i} className="mb-2"><strong className="text-gray-900">{parts[1]}</strong>{parts[2]}</p>;
                          }
                          return <p key={i} className="mb-2 text-sm">{line}</p>;
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
