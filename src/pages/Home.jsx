// Home.jsx
import { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeProvider from '../contexts/HomeProvider';
import BackButtonProvider from '../contexts/BackButtonProvider';
import ExpenseProvider from '../contexts/ExpenseProvider';
import IncomeProvider from '../contexts/IncomeProvider';
import Content from '../components/Content';
import '../styles/components/ToggleTheme.css';

function Home() {
  const navigate = useNavigate();
  const backPressed = useRef(false);
  const timeStamp = 2000;

  const handleBackButton = useCallback(
    () => {
      if (backPressed.current) {
      // Se o botão de voltar foi pressionado novamente, redirecione para a raiz
        navigate('/');
      } else {
      // Se o botão de voltar foi pressionado pela primeira vez, defina backPressed como true
        backPressed.current = true;
        // Exiba uma mensagem para o usuário
        alert('Pressione novamente para sair');
        // Defina backPressed como false após 2 segundos
        setTimeout(() => {
          backPressed.current = false;
        }, timeStamp);
      }
    },
    [navigate],
  );

  useEffect(
    () => {
    // Adiciona um ouvinte de evento para o botão de voltar
      window.addEventListener('popstate', handleBackButton);
      // Remove o ouvinte de evento quando o componente é desmontado
      return () => {
        window.removeEventListener('popstate', handleBackButton);
      };
    },
    [handleBackButton],
  );
  return (
    <div className="home-container">
      <BackButtonProvider>
        <HomeProvider>
          <IncomeProvider>
            <ExpenseProvider>
              <Content />
            </ExpenseProvider>
          </IncomeProvider>
        </HomeProvider>
      </BackButtonProvider>
    </div>
  );
}

export default Home;
