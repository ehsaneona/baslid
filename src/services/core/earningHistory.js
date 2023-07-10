import { client } from './client';

export const earningHistoryApi = async prevDays =>
    client.get('/product-statistic/earning-history', {
        params: {
            prevDays,
        },
    });
