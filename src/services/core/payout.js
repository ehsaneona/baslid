import { client } from './client';

export const payoutApi = async userId =>
    client.post(`/users/${userId}/paid-all-product`);
