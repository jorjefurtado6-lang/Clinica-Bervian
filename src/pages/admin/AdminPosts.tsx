import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  category: string;
  createdAt: string;
}

export function AdminPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const postsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt || new Date().toISOString()
      })) as Post[];
      setPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este artigo?")) {
      try {
        await deleteDoc(doc(db, 'posts', id));
        setPosts(posts.filter(p => p.id !== id));
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("Erro ao excluir. Tente novamente.");
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-primary">Gerenciar Artigos</h1>
        <Link 
          to="/admin/posts/new"
          className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-sm"
        >
          <Plus size={16} />
          Novo Artigo
        </Link>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-footer">Carregando artigos...</div>
        ) : posts.length === 0 ? (
          <div className="p-12 text-center text-footer">Nenhum artigo encontrado. Crie o primeiro!</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-background/50 border-b border-secondary/10 text-xs uppercase tracking-widest text-primary font-bold">
                  <th className="p-4 pl-6">Título</th>
                  <th className="p-4">Categoria</th>
                  <th className="p-4">Data</th>
                  <th className="p-4 pr-6 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-secondary/5 hover:bg-background/20 transition-colors group">
                    <td className="p-4 pl-6 font-medium text-primary">
                      {post.title}
                    </td>
                    <td className="p-4">
                      <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">
                        {post.category}
                      </span>
                    </td>
                    <td className="p-4 text-xs text-footer">
                      {new Date(post.createdAt).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="p-4 pr-6 text-right space-x-2">
                      <Link 
                        to={`/admin/posts/${post.id}`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        title="Editar"
                      >
                        <Edit2 size={14} />
                      </Link>
                      <button 
                        onClick={() => handleDelete(post.id)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                        title="Excluir"
                      >
                        <Trash2 size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
