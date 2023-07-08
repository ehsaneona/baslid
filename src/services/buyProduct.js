import { client } from '@/services/client';

export const buyProductApi = async (code, data) =>
    client.post(`/product-statistic/${code}`, data);
