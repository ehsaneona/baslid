import { client } from './client';

export const getProductsStatisticsApi = async () =>
    client.get('/product-statistic');
