import { client } from './client';

export const discountStatusApi = async ({ status, userId }) =>
    client.post(`/users/${userId}/accept-reject-discount`, {
        status,
    });
