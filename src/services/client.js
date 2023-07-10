import axios from 'axios';
import { STRAPI_API_URL } from '@/constants/appSettings';
import { getStrapiToken } from '@/lib/localstorage';

const client = axios.create({
    baseURL: STRAPI_API_URL,
});

// onRequest
client.interceptors.request.use(
    config => {
        const token = getStrapiToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            config.headers['Content-Type'] = 'application/json';
        }
        return config;
    },
    err => Promise.reject(err)
);

// onResponse
client.interceptors.response.use(
    res => res.data,
    async err => {
        return Promise.reject(err);
    }
);

export { client };
