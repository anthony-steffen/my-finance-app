import { useMemo, useCallback, useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import AuthContext from './AuthContext';

const { Provider } = AuthContext;

function AuthProvider({ children }) {
  const [user, setUser] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    // Buscar os usuários registrados no localStorage
    const storedUsers = localStorage.getItem('registeredUsers');

    // Se existir usuários registrados, atualizar o estado da variável registeredUsers
    if (storedUsers) {
      setRegisteredUsers(JSON.parse(storedUsers));
    }

    // Busar os dados do usuário no localStorage e o estado da variável isLogged
    const storedUser = localStorage.getItem('user');
    const storedIsLogged = localStorage.getItem('isLogged');

    // Se existir dados do usuário no localStorage, atualizar o estado das variáveis user e isLogged
    if (storedUser && storedIsLogged) {
      setUser(JSON.parse(storedUser));
      setIsLogged(JSON.parse(storedIsLogged));
    }
  }, []);

  const register = useCallback((data) => {
    // Adicionar o novo usuário ao array de usuários registrados
    setRegisteredUsers((prevUsers) => [...prevUsers, data]);

    // Atualizar o localStorage com os dados dos usuários registrados
    localStorage.setItem('registeredUsers', JSON.stringify([...registeredUsers, data]));
  }, [registeredUsers]);

  const login = useCallback((data) => {
    const foundUser = registeredUsers.find(
      (users) => users.email === data.email && users.password === data.password,
    );

    if (foundUser) {
      setUser(foundUser);
      setIsLogged(true);

      localStorage.setItem('user', JSON.stringify(foundUser));
      localStorage.setItem('isLogged', JSON.stringify(true));
    } else {
      alert('Invalid credentials');
    }
  }, [registeredUsers]);

  const logout = useCallback(() => {
    setUser('');
    setIsLogged(false);

    localStorage.removeItem('user');
    localStorage.removeItem('isLogged');
  }, []);

  const store = useMemo(
    () => {
      return {
        user,
        isLogged,
        registeredUsers,
        register,
        login,
        logout,

      };
    },
    [user, isLogged, registeredUsers, register, login, logout],
  );

  return (

    <Provider value={ store }>
      {children}
    </Provider>
  );
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
