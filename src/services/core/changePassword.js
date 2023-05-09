import { client } from '../client';

export const changePasswordApi = async data =>
    client.post('/auth/change-password', data);
