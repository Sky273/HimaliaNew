import React, { useState, useEffect } from 'react';
import { Plus, Mail, Shield, Star, Trash2, X, AlertCircle } from 'lucide-react';
import { Member, membersService } from '../../services/airtable';

function MemberManager() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newMember, setNewMember] = useState({
    display: '',
    handle: '',
    image: '',
    rank: 'Recrue',
    stars: 0,
    roles: '',
  });

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await membersService.getMembers();
      setMembers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const handleAddMember = async () => {
    if (!newMember.display.trim() || !newMember.handle.trim()) {
      setError('Le nom et le handle sont requis');
      return;
    }

    try {
      setError(null);
      const member = await membersService.createMember(newMember);
      setMembers([...members, member]);
      setShowAddModal(false);
      setNewMember({
        display: '',
        handle: '',
        image: '',
        rank: 'Recrue',
        stars: 0,
        roles: '',
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'ajout du membre');
    }
  };

  const handleDeleteMember = async (id: string) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce membre ?')) return;
    
    try {
      setError(null);
      await membersService.deleteMember(id);
      setMembers(members.filter(member => member.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de la suppression du membre');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-100">Gestion des Membres</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Ajouter un Membre
        </button>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <p className="text-red-500">{error}</p>
        </div>
      )}

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
        <div className="p-6">
          {members.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-400">Aucun membre trouvé</p>
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-400 border-b border-gray-700">
                  <th className="pb-3">Membre</th>
                  <th className="pb-3">Handle</th>
                  <th className="pb-3">Rang</th>
                  <th className="pb-3">Étoiles</th>
                  <th className="pb-3">Rôles</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="border-b border-gray-700 last:border-0">
                    <td className="py-4">
                      <div className="flex items-center">
                        {member.image ? (
                          <img
                            src={member.image}
                            alt={member.display}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                            {member.display.charAt(0)}
                          </div>
                        )}
                        <span className="ml-3 text-gray-300">{member.display}</span>
                      </div>
                    </td>
                    <td className="py-4 text-gray-400">{member.handle}</td>
                    <td className="py-4 text-gray-400">{member.rank}</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                          <Star
                            key={index}
                            className={`h-4 w-4 ${
                              index < member.stars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                    <td className="py-4 text-gray-400">
                      <div className="max-w-xs truncate">{member.roles}</div>
                    </td>
                    <td className="py-4">
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                          <Mail className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                          <Shield className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteMember(member.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal d'ajout de membre */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-100">Ajouter un Membre</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-red-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Nom d'affichage
                </label>
                <input
                  type="text"
                  value={newMember.display}
                  onChange={(e) => setNewMember({ ...newMember, display: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Handle
                </label>
                <input
                  type="text"
                  value={newMember.handle}
                  onChange={(e) => setNewMember({ ...newMember, handle: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  URL Image
                </label>
                <input
                  type="text"
                  value={newMember.image}
                  onChange={(e) => setNewMember({ ...newMember, image: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Rang
                </label>
                <select
                  value={newMember.rank}
                  onChange={(e) => setNewMember({ ...newMember, rank: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-gray-300"
                >
                  <option value="Recrue">Recrue</option>
                  <option value="Membre">Membre</option>
                  <option value="Vétéran">Vétéran</option>
                  <option value="Elite">Elite</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Étoiles
                </label>
                <div className="flex items-center space-x-2">
                  {[...Array(5)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setNewMember({ ...newMember, stars: index + 1 })}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          index < newMember.stars ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Rôles
                </label>
                <textarea
                  value={newMember.roles}
                  onChange={(e) => setNewMember({ ...newMember, roles: e.target.value })}
                  className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-2 text-gray-300"
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-400 hover:text-gray-300"
                >
                  Annuler
                </button>
                <button
                  onClick={handleAddMember}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md"
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemberManager;