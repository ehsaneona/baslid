import axios from 'axios';
import { refreshToken } from './core/refreshToken';
import { API_URL } from '@/constants/appSettings';
import { clearToken, getToken, setToken } from '@/lib/localstorage';

const client = axios.create({
    baseURL: API_URL,
    // validateStatus: status => status >= 200 && status !== 204 && status < 300
});

// onRequest
client.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            // eslint-disable-next-line no-param-reassign
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
        const originalRequest = err.config;
        if (
            getToken() &&
            err.response?.status === 401 &&
            window.location.pathname !== '/' &&
            originalRequest.url !== '/auth/refresh'
        ) {
            try {
                // eslint-disable-next-line camelcase
                const { access_token } = await refreshToken();
                setToken(access_token);
                return client(originalRequest);
            } catch (e) {
                clearToken();
                return window.location.replace('/');
            }
        }
        return Promise.reject(err);
    }
);

export { client };
