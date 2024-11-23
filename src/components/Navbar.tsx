import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Menu, X, Settings } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/', label: 'Accueil' },
    { to: '/organization', label: 'Organisation' },
    { to: '/fleet', label: 'Flotte' },
    { to: '/tools', label: 'Outils' },
    { to: '/knowledge', label: 'Ressources' },
    { to: '/blog', label: 'Actualités' },
  ];

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-gray-300 bg-clip-text text-transparent">
              HIMALIA
            </span>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/dashboard"
              className="text-gray-300 hover:text-red-500 transition-colors"
              title="Dashboard"
            >
              <Settings className="h-5 w-5" />
            </Link>
            <a
              href="https://discord.gg/himalia"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-colors"
            >
              Rejoignez-nous
            </a>
          </div>

          {/* Bouton Menu Mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="text-gray-300 hover:text-red-500 transition-colors"
              title="Dashboard"
            >
              <Settings className="h-5 w-5" />
            </Link>
            <button
              className="text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-3 py-2 text-gray-300 hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://discord.gg/himalia"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Rejoignez-nous
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;