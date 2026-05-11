import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowLeft, Save } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdminServiceEditor() {
  const { id } = useParams<{ id: string }>();
  const isEditing = id !== 'new';
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [loading, setLoading] = useState(isEditing);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: 'Stethoscope'
  });

  const availableIcons = [
    'Stethoscope',
    'HeartPulse',
    'Building',
    'Eye',
    'Ear',
    'FileCheck'
  ];

  useEffect(() => {
    if (isEditing) {
      fetchService();
    }
  }, [id]);

  const fetchService = async () => {
    try {
      const docRef = doc(db, 'services', id!);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setFormData({
          title: data.title || '',
          description: data.description || '',
          icon: data.icon || 'Stethoscope'
        });
      } else {
        alert("Serviço não encontrado!");
        navigate('/admin/services');
      }
    } catch (error) {
      console.error("Error fetching service: ", error);
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
        const docRef = doc(db, 'services', id!);
        await updateDoc(docRef, {
          ...formData,
          updatedAt: now
        });
      } else {
        const newId = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now().toString().slice(-4);
        const docRef = doc(db, 'services', newId);
        await setDoc(docRef, {
          ...formData,
          createdAt: now,
          updatedAt: now
        });
        navigate(`/admin/services/${newId}`, { replace: true });
      }
      alert("Serviço salvo com sucesso!");
    } catch (error) {
      console.error("Error saving service: ", error);
      alert("Erro ao salvar serviço.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8">Carregando...</div>;

  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="flex items-center gap-4 mb-8">
        <Link to="/admin/services" className="p-2 bg-white rounded-full hover:bg-gray-50 border border-secondary/20 shadow-sm transition-colors text-footer flex-shrink-0">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-3xl font-bold text-primary flex-1">
          {isEditing ? 'Editar Serviço' : 'Novo Serviço'}
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-secondary/10 p-8 space-y-6">
        <div>
          <label className="block text-sm font-bold text-primary mb-2">Título do Serviço</label>
          <input 
            type="text" 
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer font-medium"
            placeholder="Ex: Medicina do Trabalho"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-2">Descrição</label>
          <textarea 
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer resize-y"
            placeholder="Breve descrição do serviço oferecido..."
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-primary mb-2">Ícone</label>
          <select 
            name="icon"
            value={formData.icon}
            onChange={handleChange}
            className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-footer font-medium"
          >
            {availableIcons.map(icon => (
              <option key={icon} value={icon}>{icon}</option>
            ))}
          </select>
          <p className="text-xs text-footer mt-2">Selecione o ícone que melhor representa este serviço.</p>
        </div>

        <div className="pt-4 border-t border-secondary/20 flex justify-end">
          <button 
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-sm disabled:opacity-50 disabled:hover:scale-100"
          >
            <Save size={18} />
            {saving ? 'Salvando...' : 'Salvar Serviço'}
          </button>
        </div>
      </form>
    </div>
  );
}
