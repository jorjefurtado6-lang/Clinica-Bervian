import React, { useEffect, useState } from 'react';
import { Search, Tag, Calendar, User, ArrowRight } from 'lucide-react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Link } from 'react-router-dom';
import { mockPosts } from '../data/mockPosts';

export function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
        const qs = await getDocs(q);
        const fetchedPosts = qs.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        // Combine with mock posts if needed or just use both
        // If there are no fetched posts, use mock posts. Otherwise simply append them.
        const combined = [...fetchedPosts];
        mockPosts.forEach(mock => {
          if (!combined.some(p => p.id === mock.id)) {
            combined.push(mock);
          }
        });
        
        // sort combined by createdAt desc
        combined.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
        setPosts(combined);
      } catch (e) {
        console.error(e);
        setPosts(mockPosts); // Fallback to mock on error
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-primary font-serif">Blog & Notícias</h1>
          
          <div className="relative w-full md:w-72">
            <input 
              type="text" 
              placeholder="Buscar artigos..." 
              className="w-full rounded-full border border-secondary/20 bg-background/30 pl-10 pr-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer placeholder:text-footer/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search size={18} className="absolute left-3 top-2.5 text-footer/50" />
          </div>
        </div>
        
        <div className="mb-12 flex gap-2 flex-wrap">
          <button className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">Todos</button>
          <button className="px-4 py-1.5 rounded-full bg-background/30 border border-secondary/20 text-footer text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors">Legislação</button>
          <button className="px-4 py-1.5 rounded-full bg-background/30 border border-secondary/20 text-footer text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors">eSocial</button>
          <button className="px-4 py-1.5 rounded-full bg-background/30 border border-secondary/20 text-footer text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors">Saúde Ocupacional</button>
        </div>

        {loading ? (
          <div className="text-center py-20 text-footer">Carregando artigos...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-secondary/10 flex flex-col hover:border-secondary/30 transition-all group">
                <div className="h-48 overflow-hidden bg-background">
                  {post.imageUrl ? (
                    <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-footer/20 bg-footer/5">Sem Imagem</div>
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-2 py-1 rounded-sm">
                      <Tag size={10} /> {post.category}
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-widest text-footer/60">
                      {new Date(post.createdAt || Date.now()).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors cursor-pointer">{post.title}</h3>
                  <p className="text-sm text-footer mb-6 flex-1">{post.excerpt}</p>
                  <button className="text-primary font-bold text-xs uppercase tracking-wider w-fit hover:text-secondary transition-colors">Ler artigo completo →</button>
                </div>
              </article>
            ))}
            {filteredPosts.length === 0 && (
              <div className="col-span-full text-center py-20 text-footer">Nenhum artigo encontrado.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
