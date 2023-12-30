import {useMemo, useCallback, useState } from 'react'

import PropTypes from 'prop-types'
import AuthContext from './AuthContext'

const { Provider } = AuthContext;

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    
    const login = useCallback((user) => {
        setUser(user);
        setIsLogged(true);
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        setIsLogged(false);
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