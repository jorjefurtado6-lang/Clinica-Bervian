import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, HeartPulse } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/clinica', label: 'A Clínica' },
  { path: '/solucoes', label: 'Nossas Soluções' },
  { path: '/servicos', label: 'Serviços' },
  { path: '/blog', label: 'Blog' },
  { path: '/contato', label: 'Orçamento e Agendamento' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-secondary/20 shadow-sm">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo-bervian.png" alt="Clínica Bervian" className="h-[65px] w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      location.pathname === link.path ? "text-primary border-b-2 border-primary pb-1" : "text-footer"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center">
              <Link
                to="/area-cliente"
                className="bg-primary text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all"
              >
                Área do Cliente (ESO)
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary hover:bg-primary/10 rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background border-b border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <ul className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={cn(
                        "block px-4 py-2 rounded-md text-base font-semibold transition-colors",
                        location.pathname === link.path
                          ? "bg-primary/10 text-primary"
                          : "text-gray-600 hover:bg-gray-100 hover:text-primary"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 pt-4 border-t border-secondary/20">
                <Link
                  to="/area-cliente"
                  className="w-full inline-flex items-center justify-center rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all h-10 px-4 py-2"
                >
                  Área do Cliente (ESO)
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
