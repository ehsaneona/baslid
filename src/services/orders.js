import { client } from './client';

export const ordersApi = async (products, code) =>
    client.post('/orders', {
        products,
        code: code || 168901710017,
    });
