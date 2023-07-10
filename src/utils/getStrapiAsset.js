import { STRAPI_URL } from '@/constants/appSettings';

export const getStrapiAsset = url => {
    if (!url) return '';

    return `${STRAPI_URL}${url}`;
};
