import { client } from './client';

export const loginApi = async data => client.post('/auth/login', data);
