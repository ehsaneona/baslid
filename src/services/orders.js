import { client } from './client';

export const ordersApi = async products =>
    client.post('/orders', {
        products,
    });
