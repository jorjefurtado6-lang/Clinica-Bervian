/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Clinic } from './pages/Clinic';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { ClientArea } from './pages/ClientArea';
import { ProfissionalProfile } from './pages/ProfissionalProfile';
import { Solutions } from './pages/Solutions';
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminPosts } from './pages/admin/AdminPosts';
import { AdminPostEditor } from './pages/admin/AdminPostEditor';
import { AdminServices } from './pages/admin/AdminServices';
import { AdminServiceEditor } from './pages/admin/AdminServiceEditor';
import { AdminSpecialists } from './pages/admin/AdminSpecialists';
import { AdminSpecialistEditor } from './pages/admin/AdminSpecialistEditor';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AuthProvider>
        <Routes>
          {/* Public Routes with standard Layout */}
          <Route element={<Layout><Outlet /></Layout>}>
            <Route path="/" element={<Home />} />
            <Route path="/clinica" element={<Clinic />} />
            <Route path="/solucoes" element={<Solutions />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/area-cliente" element={<ClientArea />} />
            <Route path="/profissional/:id" element={<ProfissionalProfile />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="posts" element={<AdminPosts />} />
            <Route path="posts/:id" element={<AdminPostEditor />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="services/:id" element={<AdminServiceEditor />} />
            <Route path="specialists" element={<AdminSpecialists />} />
            <Route path="specialists/:id" element={<AdminSpecialistEditor />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
