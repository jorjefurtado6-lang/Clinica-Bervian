import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { Link } from 'react-router-dom';
import { Plus, Edit2, Trash2, HeartPulse, Building, Stethoscope as Steth, Eye, Ear, FileCheck } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  createdAt: string;
}

const getIconComponent = (iconName?: string) => {
  const icons: Record<string, React.ElementType> = {
    'HeartPulse': HeartPulse,
    'Building': Building,
    'Stethoscope': Steth,
    'Eye': Eye,
    'Ear': Ear,
    'FileCheck': FileCheck
  };
  const Icon = iconName && icons[iconName] ? icons[iconName] : Steth;
  return <Icon size={24} className="text-secondary" />;
};

export function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'services'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const servicesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt || new Date().toISOString()
      })) as Service[];
      setServices(servicesData);
    } catch (error) {
      console.error("Error fetching services: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este serviço?")) {
      try {
        await deleteDoc(doc(db, 'services', id));
        setServices(services.filter(s => s.id !== id));
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("Erro ao excluir. Tente novamente.");
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-primary">Gerenciar Serviços</h1>
        <Link 
          to="/admin/services/new"
          className="flex items-center gap-2 bg-primary text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-sm"
        >
          <Plus size={16} />
          Novo Serviço
        </Link>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-secondary/10 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-footer">Carregando serviços...</div>
        ) : services.length === 0 ? (
          <div className="p-12 text-center text-footer">Nenhum serviço encontrado. Cadastre um!</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-background/50 border-b border-secondary/10 text-xs uppercase tracking-widest text-primary font-bold">
                  <th className="p-4 pl-6 w-16">Ícone</th>
                  <th className="p-4">Título</th>
                  <th className="p-4 hidden sm:table-cell">Descrição</th>
                  <th className="p-4 pr-6 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-b border-secondary/5 hover:bg-background/20 transition-colors group">
                    <td className="p-4 pl-6">
                      <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                        {getIconComponent(service.icon)}
                      </div>
                    </td>
                    <td className="p-4 font-medium text-primary">
                      {service.title}
                    </td>
                    <td className="p-4 hidden sm:table-cell text-sm text-footer w-2/5">
                      <span className="line-clamp-2">{service.description}</span>
                    </td>
                    <td className="p-4 pr-6 text-right space-x-2">
                      <Link 
                        to={`/admin/services/${service.id}`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        title="Editar"
                      >
                        <Edit2 size={14} />
                      </Link>
                      <button 
                        onClick={() => handleDelete(service.id)}
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
