const getToken = () => {
    return localStorage.getItem(`token`);
};

const setToken = token => {
    localStorage.setItem(`token`, token);
};

const clearToken = () => {
    localStorage.removeItem(`token`);
};

const getStrapiToken = () => {
    if (typeof localStorage === 'undefined') return null;

    return localStorage.getItem(`strapiToken`);
};

const setStrapiToken = token => {
    localStorage.setItem(`strapiToken`, token);
};

const clearStrapiToken = () => {
    localStorage.removeItem(`strapiToken`);
};

export {
    setToken,
    getToken,
    clearToken,
    getStrapiToken,
    setStrapiToken,
    clearStrapiToken,
};
