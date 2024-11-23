import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, MessageSquare } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Himalia Corp</h3>
            <p className="text-gray-400">Services d'élite en sécurité et opérations stratégiques dans l'univers Star Citizen.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/organization" className="text-gray-400 hover:text-red-500">Organisation</Link></li>
              <li><Link to="/fleet" className="text-gray-400 hover:text-red-500">Flotte</Link></li>
              <li><Link to="/tools" className="text-gray-400 hover:text-red-500">Outils</Link></li>
              <li><Link to="/knowledge" className="text-gray-400 hover:text-red-500">Ressources</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-400 hover:text-red-500">Actualités</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Recrutement</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Opérations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500">Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Nous Suivre</h3>
            <div className="flex space-x-4">
              <a href="https://discord.gg/himalia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500">
                <MessageSquare className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Corporation Himalia. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;