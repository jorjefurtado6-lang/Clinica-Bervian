import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { FileText, Users, Eye, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { collection, getCountFromServer } from 'firebase/firestore';
import { db } from '../../lib/firebase';

export function AdminDashboard() {
  const { user } = useAuth();
  const [postCount, setPostCount] = useState<number | null>(null);
  const [serviceCount, setServiceCount] = useState<number | null>(null);
  const [specialistCount, setSpecialistCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const postsCol = collection(db, 'posts');
        const postsSnap = await getCountFromServer(postsCol);
        setPostCount(postsSnap.data().count);
        
        const servicesCol = collection(db, 'services');
        const servicesSnap = await getCountFromServer(servicesCol);
        setServiceCount(servicesSnap.data().count);
        
        const specialistsCol = collection(db, 'specialists');
        const specialistsSnap = await getCountFromServer(specialistsCol);
        setSpecialistCount(specialistsSnap.data().count);
      } catch (e) {
        console.error("Error fetching stats:", e);
      }
    };
    fetchStats();
  }, []);
  
  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-2">Bem-vindo, {user?.displayName || 'Admin'}</h1>
      <p className="text-footer mb-8">Esta é a área administrativa da Clínica Bervian.</p>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-3xl border border-secondary/10 flex items-center gap-4 shadow-sm">
          <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
            <FileText size={24} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-footer/60 mb-1">Total de Artigos</p>
            <p className="text-2xl font-bold text-primary">{postCount !== null ? postCount : '-'}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-3xl border border-secondary/10 flex items-center gap-4 shadow-sm">
          <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
            <Stethoscope size={24} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-footer/60 mb-1">Total de Serviços</p>
            <p className="text-2xl font-bold text-primary">{serviceCount !== null ? serviceCount : '-'}</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-3xl border border-secondary/10 flex items-center gap-4 shadow-sm">
          <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
            <Users size={24} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-footer/60 mb-1">Especialistas</p>
            <p className="text-2xl font-bold text-primary">{specialistCount !== null ? specialistCount : '-'}</p>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl border border-secondary/10 p-8 shadow-sm">
          <h2 className="text-xl font-bold text-primary mb-4">Blog</h2>
          <div className="flex gap-4">
            <Link 
              to="/admin/posts/new"
              className="flex items-center justify-center flex-1 gap-2 bg-primary text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-sm"
            >
              Novo Artigo
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl border border-secondary/10 p-8 shadow-sm">
          <h2 className="text-xl font-bold text-primary mb-4">Serviços</h2>
          <div className="flex gap-4">
            <Link 
              to="/admin/services/new"
              className="flex items-center justify-center flex-1 gap-2 bg-primary text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-sm"
            >
              Novo Serviço
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl border border-secondary/10 p-8 shadow-sm">
          <h2 className="text-xl font-bold text-primary mb-4">Especialistas</h2>
          <div className="flex gap-4">
            <Link 
              to="/admin/specialists/new"
              className="flex items-center justify-center flex-1 gap-2 bg-primary text-white py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-sm"
            >
              Novo Especialista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
