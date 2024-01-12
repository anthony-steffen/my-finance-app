import { useMemo, useState } from 'react';

import PropTypes from 'prop-types';
import HomeContext from './HomeContext';

const { Provider } = HomeContext;

function HomeProvider({ children }) {
  const [typeRegister, setTypeRegister] = useState('');
  const [formData, setFormData] = useState({
    description: '',
    value: '',
    paymentMethod: '',
    category: '',
  });
  const store = useMemo(() => ({
    typeRegister,
    setTypeRegister,
    formData,
    setFormData,
  }), [
    typeRegister,
    setTypeRegister,
    formData,
    setFormData,
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
