import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Navigate, Link } from 'react-router-dom';
import { LockKeyhole, ArrowLeft } from 'lucide-react';

export function AdminLogin() {
  const { user, isAdmin, loginWithGoogle, loginWithEmail, signupWithEmail, mockLogin, loading } = useAuth();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState<React.ReactNode>('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');
    setIsAuthenticating(true);

    try {
      if (username.trim() === 'clinica25' && password === 'bervian26') {
        const mappedEmail = 'clinica25@clinica.com';
        try {
          await loginWithEmail(mappedEmail, password);
        } catch (err: any) {
          if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
            try {
              await signupWithEmail(mappedEmail, password);
            } catch (err2: any) {
              if (err2.code === 'auth/operation-not-allowed') {
                 mockLogin();
                 setIsAuthenticating(false);
                 return;
              } else {
                 throw err2;
              }
            }
          } else if (err.code === 'auth/operation-not-allowed') {
             mockLogin();
             setIsAuthenticating(false);
             return;
          } else {
             throw err;
          }
        }
      } else {
        // Fallback for regular email login if they typed an email
        if (username.includes('@')) {
          await loginWithEmail(username.trim(), password);
        } else {
          setAuthError('Credenciais inválidas. Use "clinica25" como usuário.');
          setIsAuthenticating(false);
          return;
        }
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/operation-not-allowed') {
        setAuthError(
          <div className="flex flex-col gap-2">
            <span>O provedor de <b>E-mail/Senha</b> não está ativado no Firebase.</span>
            <span>Para utilizar este login, acesse o painel do Firebase em <i>Authentication &gt; Sign-in method</i> e ative a opção "E-mail/Senha".</span>
          </div>
        );
      } else if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password') {
         setAuthError('Usuário ou senha incorretos.');
      } else {
         setAuthError('Ocorreu um erro ao fazer login.');
      }
    } finally {
      setIsAuthenticating(false);
    }
  };

  if (loading) return <div className="flex-1 flex items-center justify-center p-8">Carregando...</div>;

  if (user && isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20 bg-background/50 px-4">
      <div className="w-full max-w-md mb-6 flex justify-start">
        <Link to="/" className="flex items-center gap-2 text-primary font-bold hover:-translate-x-1 transition-transform px-4 py-2 rounded-full border border-secondary/20 bg-white text-sm shadow-sm">
          <ArrowLeft size={16} />
          <span>Voltar à Home</span>
        </Link>
      </div>
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-secondary/10 max-w-md w-full text-center hover:border-secondary/30 transition-all">
        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
          <LockKeyhole size={32} />
        </div>
        <h1 className="text-2xl font-bold text-primary mb-2">Acesso Restrito</h1>
        <p className="text-footer mb-8 text-sm">
          {user && !isAdmin 
            ? 'Seu usuário não tem permissão de administrador. Utilize outra conta.'
            : 'Faça login para acessar o painel de administração.'}
        </p>
        
        {authError && <div className="mb-6 p-3 bg-red-50 text-red-600 text-xs text-left rounded-xl border border-red-100">{authError}</div>}
        
        <form onSubmit={handleCredentialsLogin} className="space-y-4 text-left mb-8">
          <div>
            <label className="block text-xs font-bold text-primary mb-1 uppercase tracking-wider">Usuário ou E-mail</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-primary mb-1 uppercase tracking-wider">Senha</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-secondary/20 bg-background/30 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <button
            type="submit"
            disabled={isAuthenticating}
            className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-sm hover:bg-primary/90 transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            {isAuthenticating ? 'Aguarde...' : 'Entrar'}
          </button>
        </form>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-secondary/20"></div>
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-2 text-footer uppercase tracking-widest font-bold">Ou</span>
          </div>
        </div>
        
        <button
          onClick={loginWithGoogle}
          className="w-full flex items-center justify-center gap-3 rounded-xl bg-white border border-secondary/20 px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary shadow-sm hover:border-primary transition-all hover:scale-105"
        >
          {user ? 'Google (Outra Conta)' : 'Entrar com Google'}
        </button>
      </div>
    </div>
  );
}
