import { client } from './client';

export const profileApi = async () => client.get('/auth/profile');
