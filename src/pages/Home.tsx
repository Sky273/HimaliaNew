import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, Target, Rocket } from 'lucide-react';

function Home() {
  const features = [
    {
      icon: Shield,
      title: 'Opérations de Sécurité',
      description: 'Services de sécurité professionnels à travers le verse',
    },
    {
      icon: Users,
      title: 'Communauté d\'Élite',
      description: 'Rejoignez une équipe dédiée d\'opérateurs qualifiés',
    },
    {
      icon: Target,
      title: 'Missions Stratégiques',
      description: 'Participez à des opérations de flotte coordonnées',
    },
    {
      icon: Rocket,
      title: 'Flotte Avancée',
      description: 'Accès aux vaisseaux et ressources de l\'entreprise',
    },
  ];

  return (
    <div>
      {/* Section Héro */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-gray-300 bg-clip-text text-transparent">
            CORPORATION HIMALIA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Services d'élite en sécurité et opérations stratégiques dans l'univers de Star Citizen
          </p>
          <a
            href="https://discord.gg/himalia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-md text-lg font-semibold transition-colors"
          >
            Rejoignez Nos Forces
          </a>
        </motion.div>
      </section>

      {/* Section Caractéristiques */}
      <section className="py-20 bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-100 mb-4">Pourquoi Choisir Himalia</h2>
            <p className="text-xl text-gray-400">L'excellence dans chaque opération</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700"
              >
                <feature.icon className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;