import { client } from '@/services/client';

export const buyProductApi = async data =>
    client.post(`/product-statistic/168885200980`, data);
