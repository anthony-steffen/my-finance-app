import { useCallback, useMemo, useState } from 'react';

import PropTypes from 'prop-types';
import HomeContext from './HomeContext';

const { Provider } = HomeContext;

function HomeProvider({ children }) {
  const [typeRegister, setTypeRegister] = useState('');
  const [transaction, setTransaction] = useState([]);

  useCallback(
    (newTransaction) => {
      setTransaction((prevState) => [
        ...prevState,
        { id: prevState.length + 1, ...newTransaction },
        localStorage.setItem('transactions', JSON.stringify(
          [...transaction, newTransaction],
        )),
      ]);
    },
    [transaction],
  );

  const store = useMemo(() => ({
    typeRegister,
    setTypeRegister,
    transaction,
    setTransaction,

  }), [
    typeRegister,
    setTypeRegister,
    transaction,
    setTransaction,

  ]);

  return (
    <Provider value={ store }>
      {children}
    </Provider>
  );
}

export default HomeProvider;

HomeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
