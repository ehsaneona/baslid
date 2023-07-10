import { client } from './client';

export const updateProfileApi = async data =>
    client.patch('/auth/update', data);
