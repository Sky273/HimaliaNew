import Airtable from 'airtable';

// Configure Airtable base
const airtable = new Airtable({
  apiKey: 'pattQ2pWgkCFS6hNP.e10e7c7338adffe8df69008ce84190ad1e4603746619c9eb3cf749c53aedf911',
});

const base = airtable.base('appLFvdSZTLEVdKNR');

export interface Member {
  id: string;
  display: string;
  handle: string;
  image: string;
  rank: string;
  stars: number;
  roles: string;
}

export const membersService = {
  async getMembers(): Promise<Member[]> {
    try {
      const records = await base('Members').select({
        view: 'Grid view'
      }).all();
      
      return records.map(record => ({
        id: record.id,
        display: record.get('display') as string || '',
        handle: record.get('handle') as string || '',
        image: record.get('image') as string || '',
        rank: record.get('rank') as string || 'Recrue',
        stars: record.get('stars') as number || 0,
        roles: record.get('roles') as string || '',
      }));
    } catch (error) {
      console.error('Error fetching members:', error);
      throw new Error('Impossible de récupérer la liste des membres. Veuillez vérifier votre connexion.');
    }
  },

  async createMember(member: Omit<Member, 'id'>): Promise<Member> {
    try {
      const record = await base('Members').create({
        fields: {
          display: member.display,
          handle: member.handle,
          image: member.image,
          rank: member.rank,
          stars: member.stars,
          roles: member.roles,
        }
      });

      return {
        id: record.id,
        display: record.get('display') as string || '',
        handle: record.get('handle') as string || '',
        image: record.get('image') as string || '',
        rank: record.get('rank') as string || 'Recrue',
        stars: record.get('stars') as number || 0,
        roles: record.get('roles') as string || '',
      };
    } catch (error) {
      console.error('Error creating member:', error);
      throw new Error('Impossible de créer le membre. Veuillez réessayer.');
    }
  },

  async updateMember(id: string, updates: Partial<Member>): Promise<Member> {
    try {
      const record = await base('Members').update(id, {
        fields: {
          ...(updates.display && { display: updates.display }),
          ...(updates.handle && { handle: updates.handle }),
          ...(updates.image && { image: updates.image }),
          ...(updates.rank && { rank: updates.rank }),
          ...(updates.stars !== undefined && { stars: updates.stars }),
          ...(updates.roles && { roles: updates.roles }),
        }
      });

      return {
        id: record.id,
        display: record.get('display') as string || '',
        handle: record.get('handle') as string || '',
        image: record.get('image') as string || '',
        rank: record.get('rank') as string || 'Recrue',
        stars: record.get('stars') as number || 0,
        roles: record.get('roles') as string || '',
      };
    } catch (error) {
      console.error('Error updating member:', error);
      throw new Error('Impossible de mettre à jour le membre. Veuillez réessayer.');
    }
  },

  async deleteMember(id: string): Promise<void> {
    try {
      await base('Members').destroy(id);
    } catch (error) {
      console.error('Error deleting member:', error);
      throw new Error('Impossible de supprimer le membre. Veuillez réessayer.');
    }
  },
};