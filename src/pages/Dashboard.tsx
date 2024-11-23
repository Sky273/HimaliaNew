import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  FileEdit,
  Users,
  Settings,
  Ship,
  MessageSquare,
  BarChart2,
  Wrench,
  BookOpen,
  Image,
} from 'lucide-react';
import DashboardHome from '../components/dashboard/DashboardHome';
import BlogManager from '../components/dashboard/BlogManager';
import MemberManager from '../components/dashboard/MemberManager';
import FleetManager from '../components/dashboard/FleetManager';
import CommunicationHub from '../components/dashboard/CommunicationHub';
import Analytics from '../components/dashboard/Analytics';
import DashboardSettings from '../components/dashboard/DashboardSettings';
import ToolsManager from '../components/dashboard/ToolsManager';
import ResourcesManager from '../components/dashboard/ResourcesManager';
import VisualSettings from '../components/dashboard/VisualSettings';

function Dashboard() {
  const location = useLocation();
  
  const navigation = [
    { name: 'Vue d\'ensemble', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Gestion Blog', href: '/dashboard/blog', icon: FileEdit },
    { name: 'Gestion Membres', href: '/dashboard/members', icon: Users },
    { name: 'Gestion Flotte', href: '/dashboard/fleet', icon: Ship },
    { name: 'Communication', href: '/dashboard/communication', icon: MessageSquare },
    { name: 'Gestion Outils', href: '/dashboard/tools', icon: Wrench },
    { name: 'Gestion Ressources', href: '/dashboard/resources', icon: BookOpen },
    { name: 'Visuels', href: '/dashboard/visuals', icon: Image },
    { name: 'Analytiques', href: '/dashboard/analytics', icon: BarChart2 },
    { name: 'Paramètres', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800/80 backdrop-blur-sm border-r border-gray-700">
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-100 mb-6">Dashboard Himalia</h2>
          <nav className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-4 py-3 text-sm rounded-md transition-colors ${
                    isActive
                      ? 'bg-red-500/10 text-red-500'
                      : 'text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  <item.icon className={`h-5 w-5 mr-3 ${isActive ? 'text-red-500' : 'text-gray-400'}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="blog" element={<BlogManager />} />
            <Route path="members" element={<MemberManager />} />
            <Route path="fleet" element={<FleetManager />} />
            <Route path="communication" element={<CommunicationHub />} />
            <Route path="tools" element={<ToolsManager />} />
            <Route path="resources" element={<ResourcesManager />} />
            <Route path="visuals" element={<VisualSettings />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;