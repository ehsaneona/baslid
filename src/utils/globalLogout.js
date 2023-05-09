import { logoutApi } from '@/services/core/logout';
import { clearToken } from '@/lib/localstorage';
import router from 'next/router';

export const globalLogout = async () => {
    await logoutApi();
    clearToken();
    setTimeout(async () => {
        await router.replace('/');
        location.reload();
    }, 0);
};
