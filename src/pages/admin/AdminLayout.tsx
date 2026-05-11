import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate, Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, FileText, Settings, LogOut, Stethoscope, Users } from 'lucide-react';

export function AdminLayout() {
  const { user, isAdmin, loading, logout } = useAuth();
  const location = useLocation();

  if (loading) return <div className="flex-1 flex items-center justify-center p-8">Carregando...</div>;

  if (!user || !isAdmin) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Artigos', path: '/admin/posts', icon: FileText },
    { name: 'Serviços', path: '/admin/services', icon: Stethoscope },
    { name: 'Especialistas', path: '/admin/specialists', icon: Users },
  ];

  return (
    <div className="flex-1 flex flex-col md:flex-row bg-background">
      <aside className="w-full md:w-64 bg-white border-r border-secondary/20 flex flex-col min-h-[calc(100vh-80px)]">
        <div className="p-6 border-b border-secondary/20">
          <h2 className="text-lg font-bold text-primary uppercase tracking-tight">Painel Admin</h2>
          <p className="text-xs text-footer/50 break-all">{user.email}</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-primary text-white font-bold' 
                    : 'text-footer hover:bg-secondary/10 hover:text-primary'
                }`}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-secondary/20">
          <button
            onClick={logout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-sm font-medium transition-colors text-red-500 hover:bg-red-50"
          >
            <LogOut size={18} />
            Sair
          </button>
        </div>
      </aside>
      
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
