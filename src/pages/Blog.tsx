import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock } from 'lucide-react';

function Blog() {
  const posts = [
    {
      title: 'Succès de l\'Opération Frappe Profonde',
      excerpt: 'Rapport détaillé sur notre récente opération de sécurité réussie dans le système Stanton.',
      author: 'Commandant Sarah Chen',
      date: '15/03/2024',
      readTime: '5 min de lecture',
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
    },
    {
      title: 'Nouvelle Acquisition de Flotte',
      excerpt: 'Annonce de l\'ajout de trois nouveaux vaisseaux à notre flotte corporative.',
      author: 'Amiral Mike Johnson',
      date: '12/03/2024',
      readTime: '3 min de lecture',
      image: 'https://images.unsplash.com/photo-1457364559154-aa2644600ebb',
    },
    {
      title: 'Mise à Jour du Programme de Formation',
      excerpt: 'Changements importants dans notre programme de certification de combat et nouveaux modules de formation.',
      author: 'Directeur de Formation Alex Wong',
      date: '10/03/2024',
      readTime: '4 min de lecture',
      image: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b',
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
            Actualités & Mises à Jour
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Restez informé des dernières activités de la Corporation Himalia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-48 w-full object-cover md:h-full"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-semibold text-gray-100 mb-2">
                    {post.title}
                  </h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <button className="text-red-500 hover:text-red-400 font-semibold">
                    Lire la Suite →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;