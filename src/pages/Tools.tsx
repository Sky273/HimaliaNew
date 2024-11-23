import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Map, Compass, BarChart3 } from 'lucide-react';

function Tools() {
  const tools = [
    {
      icon: Calculator,
      name: 'Calculateur de Commerce',
      description: 'Calculez les marges de profit et les routes commerciales optimales',
      url: '#',
    },
    {
      icon: Map,
      name: 'Carte Stellaire',
      description: 'Carte interactive de l\'univers Star Citizen',
      url: '#',
    },
    {
      icon: Compass,
      name: 'Outils de Navigation',
      description: 'Planifiez et optimisez vos itinéraires',
      url: '#',
    },
    {
      icon: BarChart3,
      name: 'Analyse de Marché',
      description: 'Données de marché en temps réel et analyse des tendances',
      url: '#',
    },
  ];

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-gray-300 bg-clip-text text-transparent">
            Centre d'Outils
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Outils essentiels pour les opérations Star Citizen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <motion.a
              key={tool.name}
              href={tool.url}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-red-500 transition-colors group"
            >
              <tool.icon className="h-12 w-12 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-gray-100 mb-2">{tool.name}</h3>
              <p className="text-gray-400">{tool.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tools;