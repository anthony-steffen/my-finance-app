import { useMemo, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';

const { Provider } = AuthContext;

function AuthProvider({ children }) {
  const initialRegisteredUsers = JSON.parse(localStorage.getItem('users')) || [];
  const [registeredUsers, setRegisteredUsers] = useState(initialRegisteredUsers);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const login = useCallback((user) => {
    setAuthenticatedUser(user);
  }, []);

  const logout = useCallback(() => {
    setAuthenticatedUser(null);
  }, []);

  useEffect(() => {
    // Verifica se há um usuário autenticado no localStorage ao inicializar
    const storedUser = JSON.parse(localStorage.getItem('authenticatedUser'));
    if (storedUser) {
      setAuthenticatedUser(storedUser);
    }
  }, []);

  useEffect(() => {
    // Atualiza o localStorage sempre que authenticatedUser mudar
    localStorage.setItem('authenticatedUser', JSON.stringify(authenticatedUser));
  }, [authenticatedUser]);

  const store = useMemo(() => {
    return {
      registeredUsers,
      setRegisteredUsers,
      authenticatedUser,
      login,
      logout,
    };
  }, [registeredUsers, setRegisteredUsers, authenticatedUser, login, logout]);

  return (
    <Provider value={ store }>{children}</Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
