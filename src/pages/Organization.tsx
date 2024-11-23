import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Target } from 'lucide-react';

function Organization() {
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
            Notre Organisation
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Découvrez la structure et le leadership de la Corporation Himalia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
          >
            <Users className="h-12 w-12 text-red-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Direction</h2>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <span className="font-semibold text-gray-300">PDG:</span> Commandant John Doe
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-300">Directeur des Opérations:</span> Jane Smith
              </li>
              <li className="text-gray-400">
                <span className="font-semibold text-gray-300">Amiral de la Flotte:</span> Mike Johnson
              </li>
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
          >
            <Target className="h-12 w-12 text-red-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Notre Mission</h2>
            <p className="text-gray-400">
              Fournir des services de sécurité et stratégiques inégalés dans l'univers de Star Citizen,
              tout en développant une communauté de professionnels qualifiés dédiés à l'excellence dans chaque opération.
            </p>
          </motion.div>

          {/* Valeurs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
          >
            <Shield className="h-12 w-12 text-red-500 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Valeurs Fondamentales</h2>
            <ul className="space-y-2 text-gray-400">
              <li>• Excellence Professionnelle</li>
              <li>• Précision Tactique</li>
              <li>• Coordination d'Équipe</li>
              <li>• Développement des Membres</li>
              <li>• Innovation Stratégique</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Organization;