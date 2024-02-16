// Home.jsx
import { useEffect } from 'react';
import HomeProvider from '../contexts/HomeProvider';
import ExpenseProvider from '../contexts/ExpenseProvider';
import IncomeProvider from '../contexts/IncomeProvider';
import Content from '../components/Content';
import '../styles/components/ToggleTheme.css';

function Home() {
  const handleBackPress = (event) => {
    event.preventDefault();
    // Sua lógica de navegação personalizada para evitar o uso do botão de voltar
    window.history.pushState(null, null, '/#/home');
    console.log('Back button is disabled');
  };

  useEffect(() => {
    window.history.pushState(null, null, '/#/home');
    window.addEventListener('popstate', handleBackPress);
    return () => window.removeEventListener('popstate', handleBackPress);
  }, []);

  return (
    <div className="home-container">
      <HomeProvider>
        <IncomeProvider>
          <ExpenseProvider>
            <Content />
          </ExpenseProvider>
        </IncomeProvider>
      </HomeProvider>
    </div>
  );
}

export default Home;
