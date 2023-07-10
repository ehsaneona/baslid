import { client } from './client';

export const registerApi = async data => client.post('/auth/register', data);
