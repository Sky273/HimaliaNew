import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Upload, ExternalLink } from 'lucide-react';

function ToolsManager() {
  const [tools, setTools] = useState([
    {
      id: 1,
      name: 'Calculateur de Commerce',
      description: 'Calculez les marges de profit et les routes commerciales optimales',
      image: 'https://images.unsplash.com/photo-1579226905180-636b76d96082',
      url: '#',
      status: 'En ligne',
    },
    {
      id: 2,
      name: 'Carte Stellaire',
      description: 'Carte interactive de l\'univers Star Citizen',
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564',
      url: '#',
      status: 'Hors ligne',
    },
  ]);

  const handleUrlChange = (id: number, newUrl: string) => {
    setTools(tools.map(tool => 
      tool.id === id ? { ...tool, url: newUrl } : tool
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-100">Gestion des Outils</h1>
        <button className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Nouvel Outil
        </button>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-start space-x-4 p-4 border border-gray-700 rounded-lg"
              >
                <div className="w-32 h-32 flex-shrink-0">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-100">{tool.name}</h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs mt-2 ${
                        tool.status === 'En ligne'
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {tool.status}
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Upload className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-2">{tool.description}</p>
                  <div className="mt-4">
                    <input
                      type="text"
                      value={tool.url}
                      onChange={(e) => handleUrlChange(tool.id, e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-gray-300"
                      placeholder="URL de l'outil"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToolsManager;