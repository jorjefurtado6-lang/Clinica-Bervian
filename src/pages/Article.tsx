import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { mockPosts, Post } from '../data/mockPosts';
import { Tag, Calendar, User, ArrowLeft } from 'lucide-react';

export function Article() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (!id) return;
        
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() } as Post);
        } else {
          // Check mock posts
          const mock = mockPosts.find(p => p.id === id);
          if (mock) {
            setPost(mock);
          }
        }
      } catch (e) {
        console.error(e);
        const mock = mockPosts.find(p => p.id === id);
        if (mock) {
          setPost(mock);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="py-24 text-center text-footer min-h-[60vh] flex items-center justify-center">
        Carregando artigo...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-24 text-center text-footer min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-primary mb-4">Artigo não encontrado</h2>
        <Link to="/blog" className="inline-flex items-center text-primary font-bold hover:text-secondary">
          <ArrowLeft className="mr-2 w-4 h-4" /> Voltar para o Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="py-16 md:py-24 bg-background/30 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center text-primary text-sm font-bold uppercase tracking-wider hover:text-secondary transition-colors mb-10">
          <ArrowLeft className="mr-2 w-4 h-4" /> Voltar para o Blog
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1.5 rounded-sm">
              <Tag size={12} /> {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-footer/60">
              <Calendar size={12} /> {new Date(post.createdAt || Date.now()).toLocaleDateString('pt-BR')}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-primary font-serif mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-footer/80 leading-relaxed font-serif italic border-l-4 border-secondary/30 pl-6">
            {post.excerpt}
          </p>
        </header>

        {post.imageUrl && (
          <div className="mb-16 rounded-3xl overflow-hidden shadow-sm border border-secondary/10 aspect-[21/9]">
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-headings:font-light prose-p:text-footer prose-p:leading-relaxed prose-a:text-secondary hover:prose-a:text-primary bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-secondary/10 whitespace-pre-wrap">
          {post.content}
        </div>
      </div>
    </article>
  );
}
