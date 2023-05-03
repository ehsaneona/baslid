// import Axios from 'axios';
// import { catchAxiosError } from '../services/errorHandling';
// import { API_URL } from '../constants/appSettings';
// import { getTokenFromCookie } from './Cookie';
//
// const websiteUrl = process.env.NEXT_PUBLIC_WEBSITE_URL;
//
// const securityHeaders = {
//     'Access-Control-Allow-Origin': websiteUrl,
//     Accept: 'application/json',
//     'Content-Security-Policy': `default-src ${websiteUrl}`,
// };
// const DeveloperUrls = [''];
//
// const axios = Axios.create({
//     baseURL: API_URL || 'http://127.0.0.1:8000',
//     headers: {
//         'Content-Type': 'application/json',
//         // if url in DeveloperUrls then set CORS header
//         ...(!DeveloperUrls.includes(
//             typeof window !== 'undefined' && window.location.origin
//         )
//             ? securityHeaders
//             : {}),
//     },
//     responseType: 'json',
//     xsrfCookieName: 'XSRF-TOKEN',
//     xsrfHeaderName: 'X-XSRF-TOKEN',
// });
//
// const getData = response => {
//     if (response.config.url.includes('login')) {
//         return response;
//     }
//     return response.data;
// };
//
// axios.interceptors.response.use(getData, catchAxiosError);
//
// axios.interceptors.request.use(config => {
//     const token = getTokenFromCookie();
//     config.headers.Authorization = token ? `Bearer ${token}` : '';
//     return config;
// });
//
// export const removeHeader = () => delete axios.defaults.headers.Authorization;
//
// export default axios;
