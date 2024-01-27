import { useMemo, useState, useEffect } from 'react';

import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import AuthContext from './AuthContext';

const { Provider } = AuthContext;

function AuthProvider({ children }) {
  // Ao inicializar, busca os dados do usuário no localStorage
  const initialRegisteredUsers = JSON.parse(localStorage
    .getItem('registeredUsers')) || [];

  // Estados do contexto.
  const [registeredUsers, setRegisteredUsers] = useState(initialRegisteredUsers);

  // Atualiza o localStorage sempre que registeredUsers mudar
  useEffect(() => {
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  const store = useMemo(
    () => {
      return {
        registeredUsers,
        setRegisteredUsers,
      };
    },
    [
      registeredUsers,
      setRegisteredUsers,
    ],
  );

  return (
    <Provider value={ store }>{children}</Provider>
  );
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
