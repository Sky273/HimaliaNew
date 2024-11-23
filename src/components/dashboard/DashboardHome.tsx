import React from 'react';
import { Users, Ship, FileText, Activity } from 'lucide-react';

function DashboardHome() {
  const stats = [
    { name: 'Membres Actifs', value: '156', icon: Users, change: '+12%' },
    { name: 'Vaisseaux', value: '47', icon: Ship, change: '+3%' },
    { name: 'Articles Blog', value: '28', icon: FileText, change: '+5%' },
    { name: 'Missions', value: '124', icon: Activity, change: '+18%' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-100 mb-8">Vue d'ensemble</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.name}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="h-6 w-6 text-red-500" />
              <span className={`text-sm ${
                stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-100 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.name}</div>
          </div>
        ))}
      </div>

      {/* Activité Récente */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Activité Récente</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center py-3 border-b border-gray-700 last:border-0">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                <Users className="h-5 w-5 text-gray-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-300">Nouveau membre rejoint</p>
                <p className="text-xs text-gray-500">Il y a 2 heures</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;