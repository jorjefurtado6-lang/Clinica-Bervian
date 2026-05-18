import React from 'react';
import { motion } from 'motion/react';

export function TermsOfService() {
  return (
    <div className="py-16 md:py-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">Termos de Serviço</h1>
            <p className="text-secondary text-lg">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
          </div>

          <div className="prose prose-lg text-footer max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-secondary/10">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site e os serviços oferecidos pela Clínica Bervian ("nós", "nosso", "nossa"), 
              você ("Usuário", "Cliente") concorda em cumprir e estar vinculado a estes Termos de Serviço. 
              Se você não concorda com qualquer parte destes termos, não deve utilizar nossos serviços.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Nossos Serviços</h2>
            <p>
              A Clínica Bervian presta serviços nas áreas de Medicina do Trabalho e Engenharia de Segurança do Trabalho, 
              incluindo, mas não se limitando a: Exames Médicos Ocupacionais (ASO), elaboração de PCMSO, PGR, LTCAT, laudos ergonômicos e treinamentos em Normas Regulamentadoras (NRs).
            </p>
            <p>
              O uso dos nossos serviços está sujeito à formalização prévia através de contratos específicos de prestação de serviços ou orçamentos aprovados.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Responsabilidades do Usuário</h2>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Fornecer informações precisas, atualizadas e completas sempre que solicitado para a execução dos serviços (como dados cadastrais da empresa e dos funcionários).</li>
              <li>Responsabilizar-se pela veracidade das informações de saúde prestadas durante os exames médicos.</li>
              <li>Manter a confidencialidade de eventuais credenciais de acesso ao nosso sistema (área do cliente / software ESO).</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Prazos e Entregas</h2>
            <p>
              Prazos para a entrega de laudos, programas (PCMSO, PGR, LTCAT, etc.) e envios de eventos ao eSocial obedecerão às condições estabelecidas no momento da contratação e dependem do envio tempestivo de informações por parte da empresa contratante.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo presente neste site (textos, imagens, logotipos, arquivos de download e código) é de propriedade intelectual da Clínica Bervian ou está devidamente licenciado para nosso uso. É proibida a reprodução, cópia ou distribuição sem autorização prévia.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Limitações de Responsabilidade</h2>
            <p>
              A elaboração de documentos e laudos segue rigorosamente as legislações vigentes. No entanto, a implementação das medidas de saúde e segurança, bem como a adequação física e estrutural dos ambientes de trabalho, é de responsabilidade exclusiva da empresa contratante.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Modificações dos Termos</h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. Modificações entrarão em vigor imediatamente após sua publicação no site. O uso contínuo de nossos serviços após tais alterações constituirá sua aceitação dos novos termos.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Foro e Legislação</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil. Para a solução de quaisquer controvérsias decorrentes deste instrumento, fica eleito o foro da comarca de Ijuí/RS, com renúncia de qualquer outro, por mais privilegiado que seja.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
