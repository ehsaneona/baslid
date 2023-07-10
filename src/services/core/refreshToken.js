import { client } from './client';

export const refreshToken = async () => {
    return client.post(`/auth/refresh`);
};
