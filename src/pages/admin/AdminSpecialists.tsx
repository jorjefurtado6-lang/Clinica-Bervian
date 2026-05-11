import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2 } from 'lucide-react';

interface Specialist {
  id: string;
  name: string;
  role: string;
  createdAt: string;
}

export function AdminSpecialists() {
  const [specialists, setSpecialists] = useState<Specialist[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSpecialists();
  }, []);

  const fetchSpecialists = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'specialists'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const specialistsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt || new Date().toISOString()
      })) as Specialist[];
      setSpecialists(specialistsData);
    } catch (error) {
      console.error("Error fetching specialists: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este especialista?")) {
      try {
        await deleteDoc(doc(db, 'specialists', id));
        setSpecialists(specialists.filter(s => s.id !== id));
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("Erro ao excluir. Tente novamente.");
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-primary">Gerenciar Especialistas</h1>
        <Link 
          to="/admin/specialists/new"
          className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-sm"
        >
          <Plus size={16} />
          Novo Especialista
        </Link>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-footer">Carregando especialistas...</div>
        ) : specialists.length === 0 ? (
          <div className="p-12 text-center text-footer">Nenhum especialista encontrado. Cadastre um!</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-background/50 border-b border-secondary/10 text-xs uppercase tracking-widest text-primary font-bold">
                  <th className="p-4 pl-6">Nome</th>
                  <th className="p-4">Cargo / Especialidade</th>
                  <th className="p-4 pr-6 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {specialists.map((specialist) => (
                  <tr key={specialist.id} className="border-b border-secondary/5 hover:bg-background/20 transition-colors group">
                    <td className="p-4 pl-6 font-medium text-primary">
                      {specialist.name}
                    </td>
                    <td className="p-4">
                      <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">
                        {specialist.role}
                      </span>
                    </td>
                    <td className="p-4 pr-6 text-right space-x-2">
                      <Link 
                        to={`/admin/specialists/${specialist.id}`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        title="Editar"
                      >
                        <Edit2 size={14} />
                      </Link>
                      <button 
                        onClick={() => handleDelete(specialist.id)}
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
