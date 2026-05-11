import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdminPostEditor() {
  const { id } = useParams<{ id: string }>();
  const isEditing = id !== 'new';
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: '',
    imageUrl: '',
    content: ''
  });

  useEffect(() => {
    if (isEditing) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    try {
      const docRef = doc(db, 'posts', id!);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFormData({
          title: data.title || '',
          excerpt: data.excerpt || '',
          category: data.category || '',
          imageUrl: data.imageUrl || '',
          content: data.content || ''
        });
      } else {
        alert("Artigo não encontrado!");
        navigate('/admin/posts');
      }
    } catch (error) {
      console.error("Error fetching post: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const now = new Date().toISOString();
      if (isEditing) {
        const docRef = doc(db, 'posts', id!);
        await updateDoc(docRef, {
          ...formData,
          updatedAt: now
        });
      } else {
        const newId = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now().toString().slice(-4);
        const docRef = doc(db, 'posts', newId);
        await setDoc(docRef, {
          ...formData,
          createdAt: now,
          updatedAt: now,
          authorId: user?.uid
        });
        navigate(`/admin/posts/${newId}`, { replace: true });
      }
      alert("Artigo salvo com sucesso!");
    } catch (error) {
      console.error("Error saving post: ", error);
      alert("Erro ao salvar artigo.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8">Carregando...</div>;

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/admin/posts" className="p-2 bg-white rounded-full hover:bg-gray-50 border border-secondary/20 shadow-sm transition-colors text-footer flex-shrink-0">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-3xl font-bold text-primary flex-1">
          {isEditing ? 'Editar Artigo' : 'Novo Artigo'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 space-y-6">
        <div>
          <label className="block text-sm font-bold text-primary mb-2">Título do Artigo</label>
          <input 
            type="text" 
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer font-medium"
            placeholder="Ex: Como o PCMSO ajuda a reduzir o absenteísmo"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Categoria</label>
            <input 
              type="text" 
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer"
              placeholder="Ex: Saúde Ocupacional"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">URL da Imagem (Capa)</label>
            <input 
              type="url" 
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer"
              placeholder="https://exemplo.com/imagem.jpg"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-2">Resumo (Excerpt)</label>
          <textarea 
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            required
            rows={2}
            className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer resize-none"
            placeholder="Breve descrição que aparecerá na listagem do blog..."
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-2">Conteúdo do Artigo</label>
          <textarea 
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={15}
            className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer font-mono leading-relaxed resize-y"
            placeholder="Escreva o conteúdo completo do artigo aqui..."
          />
        </div>

        <div className="pt-4 border-t border-secondary/20 flex justify-end">
          <button 
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-sm disabled:opacity-50 disabled:hover:scale-100"
          >
            <Save size={18} />
            {saving ? 'Salvando...' : 'Salvar Artigo'}
          </button>
        </div>
      </form>
    </div>
  );
}
