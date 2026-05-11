import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdminSpecialistEditor() {
  const { id } = useParams<{ id: string }>();
  const isEditing = id !== 'new';
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    imageUrl: '',
    instagramUrl: '',
    linkedinUrl: ''
  });

  useEffect(() => {
    if (isEditing) {
      fetchSpecialist();
    }
  }, [id]);

  const fetchSpecialist = async () => {
    try {
      const docRef = doc(db, 'specialists', id!);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFormData({
          name: data.name || '',
          role: data.role || '',
          bio: data.bio || '',
          imageUrl: data.imageUrl || '',
          instagramUrl: data.instagramUrl || '',
          linkedinUrl: data.linkedinUrl || ''
        });
      } else {
        alert("Especialista não encontrado!");
        navigate('/admin/specialists');
      }
    } catch (error) {
      console.error("Error fetching specialist: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const now = new Date().toISOString();
      if (isEditing) {
        const docRef = doc(db, 'specialists', id!);
        await updateDoc(docRef, {
          ...formData,
          updatedAt: now
        });
      } else {
        const newId = formData.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now().toString().slice(-4);
        const docRef = doc(db, 'specialists', newId);
        await setDoc(docRef, {
          ...formData,
          createdAt: now,
          updatedAt: now
        });
        navigate(`/admin/specialists/${newId}`, { replace: true });
      }
      alert("Especialista salvo com sucesso!");
    } catch (error) {
      console.error("Error saving specialist: ", error);
      alert("Erro ao salvar especialista.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8">Carregando...</div>;

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/admin/specialists" className="p-2 bg-white rounded-full hover:bg-gray-50 border border-secondary/20 shadow-sm transition-colors text-footer flex-shrink-0">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-3xl font-bold text-primary flex-1">
          {isEditing ? 'Editar Especialista' : 'Novo Especialista'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Nome do Especialista</label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer font-medium"
              placeholder="Ex: Dra. Ana Silva"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Especialidade / Cargo</label>
            <input 
              type="text" 
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer font-medium"
              placeholder="Ex: Médica do Trabalho"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-2">URL da Imagem (Foto)</label>
          <input 
            type="url" 
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer"
            placeholder="https://exemplo.com/foto.jpg"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-primary mb-2">URL do Instagram</label>
            <input 
              type="url" 
              name="instagramUrl"
              value={formData.instagramUrl}
              onChange={handleChange}
              className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer"
              placeholder="https://instagram.com/perfil"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">URL do LinkedIn</label>
            <input 
              type="url" 
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleChange}
              className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer"
              placeholder="https://linkedin.com/in/perfil"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-2">Breve Biografia (Bio)</label>
          <textarea 
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            required
            rows={5}
            className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer resize-y"
            placeholder="Informações sobre a experiência e formação do especialista..."
          />
        </div>

        <div className="pt-4 border-t border-secondary/20 flex justify-end">
          <button 
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-sm disabled:opacity-50 disabled:hover:scale-100"
          >
            <Save size={18} />
            {saving ? 'Salvando...' : 'Salvar Especialista'}
          </button>
        </div>
      </form>
    </div>
  );
}
