import { client } from './client';

export const validatePaymentApi = async ({ paymentId, code }) =>
    client.get('/payment/validate', {
        params: {
            paymentId,
            code,
        },
    });
