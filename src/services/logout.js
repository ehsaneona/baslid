import { client } from './client';

export const logoutApi = async () => client.post('/auth/logout');
