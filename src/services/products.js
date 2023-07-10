import { client } from './client';

export const productsApi = async () =>
    client.get('/products', {
        params: {
            populate: '*',
        },
    });
