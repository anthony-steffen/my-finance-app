import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import BackButtonContext from './BackButtonContext';

const { Provider } = BackButtonContext;

function BackButtonProvider({ children }) {
  const [backButtonClicked, setBackButtonClicked] = useState(false);
  console.log(backButtonClicked);

  useEffect(() => {
    const handlePopstate = () => {
      if (!backButtonClicked) {
        // Se o botão de retroceder foi clicado pela primeira vez, exibe a mensagem de confirmação
        const confirmMessage = 'Deseja realmente sair do aplicativo?';
        if (window.confirm(confirmMessage)) {
          setBackButtonClicked(true);
        }
      } else {
        // Se o botão de retroceder foi clicado novamente, realiza a ação desejada (por exemplo, sair do aplicativo)
        // Aqui você pode adicionar a lógica para sair do aplicativo ou qualquer ação necessária
        window.history.pushState({}, ''); // Altera o estado da história sem realmente navegar
        console.log('Saindo do aplicativo');
      }
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [backButtonClicked, setBackButtonClicked]);

  const store = useMemo(() => ({
    backButtonClicked,
  }), [
    backButtonClicked,
  ]);

  return (
    <Provider value={ store }>
      {children}
    </Provider>
  );
}

export default BackButtonProvider;
BackButtonProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
