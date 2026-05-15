import cristianoImage from '../assets/profissionais/cristiano.jpeg';
import elianaImage from '../assets/profissionais/eliana.jpeg';
import jonatanImage from '../assets/profissionais/jonatan.jpeg';
import marcioImage from '../assets/profissionais/marcio.jpeg';

export const professionals = [
  {
    id: "cristiano-bervian",
    name: "Dr. Cristiano Bervian",
    role: "Médico do Trabalho",
    credential: "CREMERS 24.763",
    image: cristianoImage,
    description: `Graduação em Medicina (UFSM/RS em 1999)\nMedicina do Trabalho (AMB/ANAMT) - RQE 22.386\nMedicna Legal e Perícia Médica (AMB/AB,LPM) - RQE 35.695\nMedicina do Tráfego - (AMB/ABRAMET) - RQE 37.728\nPós-Graduação em Medicina do Trabalho (Estácio de Sá/RJ)\nPós-Graduação em Ergonomia (UEL/PR) - curso acreditado pela ABERGO\nPós-Graduação em Gestão em Saúde (PUC/RS)\nMBA em Saúde Corporativa (Universidade São Camilo)\nMestrando em Atenção Integral à Saúsde (UNIJUI/UNICRUZ)\nMestrando em Prevenção de Riscos Laborais (FUNIBER)\nGestão Integrada: Ambiente, Qualidade e Prevenção (FUNIBER)\nDoutorando em Saúde Pública (FUNIBER)`,
    specialties: ["Medicina do Trabalho", "Perícia Médica", "Ergonomia", "Saúde Corporativa"],
    availability: "Segunda a Sexta",
    linkedin: "https://www.linkedin.com/in/cristianobervian/"
  },
  {
    id: "eliana-montagner-bervian",
    name: "Eliana Montagner Bervian",
    role: "Ergonomista",
    credential: "CRN2 5224D",
    image: elianaImage,
    description: `Graduação em Nutrição (UNIJUI/RS) em 2001.\nPós-Graduação em Saúde e Segurança do Trabalho (UNYLEYA/DF)\nPós-Graduação em Ergonomia (UEL/PR) - curso acreditado pela ABERGO`,
    specialties: ["Ergonomia", "Saúde e Segurança do Trabalho", "Nutrição"],
    availability: "Segunda a Sexta",
    linkedin: "https://www.linkedin.com/in/eliana-montagner-bervian-258125205/"
  },
  {
    id: "jonatan-bervian",
    name: "Jonatan Bervian",
    role: "Eng. de Seg. do Trabalho",
    credential: "CREA RS212574",
    image: jonatanImage,
    description: `Graduação em Engenharia Elétrica (UFSM/RS)\nPós-Gradução em Engenharia de Segurança do Trabalho (Universidade Cruzeiro do Sul/SP)`,
    specialties: ["Engenharia de Segurança do Trabalho", "Engenharia Elétrica", "PGR", "LTCAT"],
    availability: "Segunda a Sexta",
    linkedin: "https://www.linkedin.com/in/jonatan-bervian-530371184/"
  },
  {
    id: "marcio-montagner",
    name: "Márcio Montagner",
    role: "Eng. de Seg. do Trabalho",
    credential: "CREA RS140476",
    image: marcioImage,
    description: `Graduação em Engenharia Civil (UNIJUI/RS)\nPós-Graduação em Engenharia de Segurança do Trabalho (UNIJUI/RS)`,
    specialties: ["Engenharia de Segurança do Trabalho", "Engenharia Civil", "PGR", "LTCAT"],
    availability: "Segunda a Sexta",
    linkedin: "https://www.linkedin.com/in/m%C3%A1rcio-montagner-09b5677a/"
  }
];
