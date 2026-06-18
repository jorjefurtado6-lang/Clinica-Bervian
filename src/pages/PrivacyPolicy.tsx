import React from 'react';
import { motion } from 'motion/react';

export function PrivacyPolicy() {
  return (
    <div className="py-16 md:py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">Política de Privacidade</h1>
            <p className="text-secondary text-lg">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>

          <div className="prose prose-lg text-footer max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-secondary/10">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Introdução</h2>
            <p>
              A Clínica Bervian ("nós", "nosso" ou "nossa") está comprometida em proteger a privacidade dos seus dados pessoais. 
              Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos as suas informações 
              quando você visita o nosso site ou utiliza os nossos serviços de Medicina e Segurança do Trabalho.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Coleta de Informações</h2>
            <p>
              Podemos coletar informações pessoais e de saúde que você nos fornece voluntariamente durante o uso de nossos serviços, 
              como agendamentos, consultas, e emissão de atestados (ASO). As informações podem incluir:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Nome completo, CPF, RG, data de nascimento.</li>
              <li>Informações de contato (e-mail, endereço, número de telefone).</li>
              <li>Informações de saúde e histórico médico ocupacional.</li>
              <li>Informações da empresa empregadora.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Uso das Informações</h2>
            <p>
              Utilizamos as informações coletadas para:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fornecer e gerenciar nossos serviços de saúde ocupacional.</li>
              <li>Elaborar documentos obrigatórios (PCMSO, PGR, LTCAT, etc).</li>
              <li>Comunicar sobre agendamentos, resultados de exames e atualizações.</li>
              <li>Cumprir obrigações legais, incluindo envios para o eSocial.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Compartilhamento de Informações</h2>
            <p>
              Nós não vendemos ou alugamos suas informações pessoais a terceiros. Podemos compartilhar suas informações com:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>A empresa empregadora (nos limites da legislação trabalhista e de saúde ocupacional).</li>
              <li>Autoridades governamentais, quando exigido por lei (ex: eSocial).</li>
              <li>Prestadores de serviços que auxiliam em nossas operações (sistemas de gestão, laboratórios parceiros), sob obrigações estritas de confidencialidade.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra acesso não autorizado, 
              alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Seus Direitos (LGPD)</h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Acessar seus dados pessoais.</li>
              <li>Corrigir dados incompletos ou incorretos.</li>
              <li>Solicitar a exclusão de seus dados (quando aplicável e não conflitante com obrigações legais de guarda de prontuários médicos).</li>
              <li>Revogar o consentimento para o tratamento de dados.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados, entre em contato conosco através do e-mail:{' '}
              <a href="mailto:secretaria@clinicabervian.com.br" className="text-secondary hover:underline">secretaria@clinicabervian.com.br</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
