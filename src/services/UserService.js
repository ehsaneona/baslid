// import axios from './Axios';
// import { AUTH_API, BASE_URL_v2, HASURA_API, USER_API } from '../constants/apiUrls';
// import { handleResponse } from './handleResponse';
//
// const UserService = {
//     query: () => axios.get(`${USER_API}/profile`, {}).catch(handleResponse),
//     save: (data, Token) =>
//         axios
//             .put(`${USER_API}/profile`, data, {
//                 headers: {
//                     Authorization: `Token ${Token}`,
//                 },
//             })
//             .catch(handleResponse),
//     message: data => axios.get(`${USER_API}/message/list`, { params: data }),
//     readMessage: id => axios.post(`${USER_API}/message/${id}`),
//     getNotif: data => axios.post(`${BASE_URL_v2}/marketing/users/`, data, {}),
//     emailVerify: data =>
//         axios.get(`${BASE_URL_v2}/accounts/emails/verification/`, data, {}),
//     emailActivate: data =>
//         axios.post(`${BASE_URL_v2}/accounts/emails/activation/`, data, {}),
//     changePassword: data => axios.put(`${AUTH_API}/change-password`, data, {}),
//     userLogin: phoneNumber =>
//         axios.post(`${AUTH_API}/login`, { ID: `${phoneNumber}` }),
//     setPusheId: ({ id, email }, token) =>
//         axios
//             .put(
//                 `${USER_API}/profile`,
//                 { pushe_notification_id: id, email: email },
//                 {
//                     headers: {
//                         Authorization: `Token ${token}`,
//                     },
//                 }
//             )
//             .catch(handleResponse),
//     getPlans: (username) =>
//         axios
//             .get(
//                 `${HASURA_API}/users/${username}/plans`,
//                 {
//                     headers: {
//                         'x-hasura-admin-secret': 'KsB4CIFzB4fXKpIymNQq',
//                     },
//                 }
//             )
//             .catch(handleResponse),
// };
//
// export default UserService;
