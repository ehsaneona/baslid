import { client } from './client';

export const usersApi = async hasDiscountRequest =>
    client.get(
        '/users',
        hasDiscountRequest
            ? {
                  params: {
                      hasDiscountRequest: 1,
                  },
              }
            : {}
    );
