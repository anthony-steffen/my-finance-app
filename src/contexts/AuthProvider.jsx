import {useMemo, useCallback, useState, useEffect } from 'react'

import PropTypes from 'prop-types'
import AuthContext from './AuthContext'

const { Provider } = AuthContext;

const AuthProvider = ({children}) => {
    const [user, setUser] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        const isLogged = localStorage.getItem('isLogged');

        if (user && isLogged) {
            setUser(JSON.parse(user));
            setIsLogged(JSON.parse(isLogged));
        }
    }, []);
    
    const login = useCallback((user) => {
        setUser(user);
        setIsLogged(true);
        if (user) {
            localStorage.setItem('user', JSON.stringify(user.email));
            localStorage.setItem('isLogged', JSON.stringify(true));
        }
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        setIsLogged(false);
        localStorage.removeItem('user');
    }
    , []);

    const store = useMemo(() => {
        return {
            user,
            isLogged,
            login,
            logout
        }
    }
    , [user, isLogged, login, logout]);

    return (

        <Provider value={store}>
            {children}
        </Provider>
    )
}

export default AuthProvider

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}