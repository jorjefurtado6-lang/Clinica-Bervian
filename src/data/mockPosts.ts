export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  category: string;
  imageUrl?: string;
  createdAt: number | string;
  updatedAt: number | string;
  authorId?: string;
}

export const mockPosts: Post[] = [
  {
    id: "importancia-do-pgr",
    title: "A Importância do PGR na Prevenção de Acidentes",
    excerpt: "Entenda por que o Programa de Gerenciamento de Riscos (PGR) é vital para a saúde da sua empresa e como ele ajuda a evitar acidentes e passivos trabalhistas.",
    content: "O Programa de Gerenciamento de Riscos (PGR) é uma das obrigações mais importantes para as empresas quando se trata de Segurança e Saúde no Trabalho...",
    category: "Gestão",
    imageUrl: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&q=80&w=800&h=500",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2, // 2 days ago
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
    authorId: "admin"
  },
  {
    id: "esocial-sst",
    title: "Eventos de SST no eSocial: O que você precisa saber",
    excerpt: "Com o envio obrigatório dos eventos de Segurança e Saúde no Trabalho (SST) para o eSocial, as empresas precisam estar atentas aos prazos e multas.",
    content: "O eSocial trouxe desafios para muitas empresas. Os eventos S-2210, S-2220 e S-2240 são fundamentais...",
    category: "eSocial",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800&h=500",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5, // 5 days ago
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
    authorId: "admin"
  },
  {
    id: "ergonomia-no-home-office",
    title: "Ergonomia no Home Office: Dicas e Cuidados",
    excerpt: "Muitos profissionais ainda atuam em modelo híbrido ou remoto. Saiba como manter a ergonomia e evitar doenças osteomusculares trabalhando em casa.",
    content: "O trabalho remoto exige que a empresa tenha muito cuidado com o conforto físico dos trabalhadores. Veja algumas dicas importantes...",
    category: "Saúde",
    imageUrl: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?auto=format&fit=crop&q=80&w=800&h=500",
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 10, // 10 days ago
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 10,
    authorId: "admin"
  }
];
