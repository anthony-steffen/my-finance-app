import { useMemo, useState } from 'react';

import PropTypes from 'prop-types';
import HomeContext from './HomeContext';

const { Provider } = HomeContext;

function HomeProvider({ children }) {
  const [typeRegister, setTypeRegister] = useState('');
  const store = useMemo(() => ({
    typeRegister,
    setTypeRegister,
  }), [
    typeRegister,
    setTypeRegister,
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
