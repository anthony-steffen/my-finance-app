import { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import BackButtonContext from './BackButtonContext';

const { Provider } = BackButtonContext;

function BackButtonProvider({ children }) {
  // Ao clicar no botão voltar é exibido um alerta com a mensagem de confirmação de saída da aplicação, caso o usuário clique novamente no botão voltar, ele é redirecionado para a página de login.
  useEffect(() => {
    const handleBackButton = () => {
      window.alert('Você tem certeza que deseja sair?');
      window.location.href = '/#/home';
    };
    window.addEventListener('popstate', handleBackButton);
    return () => window.removeEventListener('popstate', handleBackButton);
  }, []);

  const store = useMemo(() => ({

  }), []);

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
