import { client } from './client';

export const meApi = async () => client.get('/users/me');
