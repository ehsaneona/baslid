import { client } from './client';

export const uploadAvatarApi = async file => {
    const formData = new FormData();
    formData.append('avatar', file);
    return client.post('/auth/upload-avatar', formData);
};
