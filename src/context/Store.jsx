import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Context, { Provider } from './Context';

// eslint-disable-next-line react/prop-types
function AppContext({ children }) {
    const [user, setUser] = useState(null);
    const [basket, setBasket] = useState([]);

    return (
        <Provider
            value={{
                user,
                setUser,
                basket,
                setBasket,
            }}>
            {children}
        </Provider>
    );
}

export const useProvider = () => useContext(Context);

export function ProtectRoute(Component) {
    // eslint-disable-next-line func-names
    return function () {
        const { user, loading } = useProvider();
        const router = useRouter();

        useEffect(() => {
            if (!user?.email && !loading) router.push('/user/login');
        }, [loading, user?.email]);

        // eslint-disable-next-line prefer-rest-params
        return !loading && user && <Component {...arguments} />;
    };
}

export default AppContext;
