import React from 'react';
import { Plus, Edit2, Trash2, Shield } from 'lucide-react';

function FleetManager() {
  const ships = [
    {
      id: 1,
      name: 'Hammerhead',
      status: 'Opérationnel',
      captain: 'Sarah Chen',
      location: 'Port Olisar',
      crew: '7/8',
    },
    {
      id: 2,
      name: 'Carrack',
      status: 'En maintenance',
      captain: 'Mike Johnson',
      location: 'Area18',
      crew: '4/6',
    },
    {
      id: 3,
      name: 'Perseus',
      status: 'En mission',
      captain: 'Alex Wong',
      location: 'Hurston',
      crew: '6/6',
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-100">Gestion de la Flotte</h1>
        <button className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Ajouter un Vaisseau
        </button>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
        <div className="p-6">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-400 border-b border-gray-700">
                <th className="pb-3">Vaisseau</th>
                <th className="pb-3">Statut</th>
                <th className="pb-3">Capitaine</th>
                <th className="pb-3">Location</th>
                <th className="pb-3">Équipage</th>
                <th className="pb-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ships.map((ship) => (
                <tr key={ship.id} className="border-b border-gray-700 last:border-0">
                  <td className="py-4 text-gray-300">{ship.name}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      ship.status === 'Opérationnel'
                        ? 'bg-green-500/20 text-green-400'
                        : ship.status === 'En maintenance'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {ship.status}
                    </span>
                  </td>
                  <td className="py-4 text-gray-400">{ship.captain}</td>
                  <td className="py-4 text-gray-400">{ship.location}</td>
                  <td className="py-4 text-gray-400">{ship.crew}</td>
                  <td className="py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Shield className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FleetManager;