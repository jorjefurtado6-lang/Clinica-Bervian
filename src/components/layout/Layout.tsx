import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatWhatsApp } from '../ui/FloatWhatsApp';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-1 bg-background">
        {children}
      </main>
      <Footer />
      <FloatWhatsApp />
    </div>
  );
}
